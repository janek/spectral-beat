class WebAudioEngine {

	// https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
	private static mediaStreamConstraints: MediaStreamConstraints = {
		audio: {
			echoCancellation: false,
			// noiseSuppression: false
		}
	}

	public onFloatFrequencyData: ((data: Float32Array, timeStamp: number) => void) | null = null;

	private audioContext: AudioContext;

	private inputNode: MediaStreamAudioSourceNode | null = null;
	private filterNode: BiquadFilterNode;
	private analyserNode: AnalyserNode;
	private processingNode: ScriptProcessorNode;
	private gainNode: GainNode;
	private bufferSize: number;

	constructor(bufferSize: number) {
		const options: AudioContextOptions = {
			latencyHint: "interactive"
		}
		const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
		this.audioContext = new AudioContext(options);
		this.bufferSize = bufferSize;

		// filter
		this.filterNode = this.audioContext.createBiquadFilter();
		this.filterNode.type = "lowpass";
		this.filterNode.frequency.setValueAtTime(1000, 0);

		// fft
		this.analyserNode = this.audioContext.createAnalyser();

		// processing
		this.processingNode = this.audioContext.createScriptProcessor(this.bufferSize, 1, 1);
		this.processingNode.onaudioprocess = this.audioProcessingCallback;

		// gain
		this.gainNode = this.audioContext.createGain();
		this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + 1);
	}

	public get frequencyBinCount(): number {
		return this.analyserNode.frequencyBinCount;
	}

	public start(): void {
		if (this.inputNode) {
			this.connect();
		} else {
			const constraints = WebAudioEngine.mediaStreamConstraints
			navigator.mediaDevices.getUserMedia(constraints)
			.then((mediaStream: MediaStream) => {
				this.inputNode = this.audioContext.createMediaStreamSource(mediaStream);
				this.connect();
			})
			.catch(console.error);
		}
		this.audioContext.resume();
	}

	public stop(): void {
		this.disconnect();
		this.inputNode = null; // safari workaround
		this.audioContext.suspend();
	}

	private connect(): void {
		if (this.inputNode) {
			this.inputNode.connect(this.analyserNode);
		}
		this.analyserNode.connect(this.processingNode);
		this.processingNode.connect(this.gainNode);
		this.gainNode.connect(this.audioContext.destination);
	}

	private disconnect(): void {
		if (this.inputNode) {
			this.inputNode.disconnect();
		}
		this.filterNode.disconnect();
		this.analyserNode.disconnect();
		this.processingNode.disconnect();
		this.gainNode.disconnect();
	}

	private audioProcessingCallback = (audioProcessingEvent: AudioProcessingEvent) => {
		const dataArray = new Float32Array(this.analyserNode.frequencyBinCount);
		void this.analyserNode.getFloatFrequencyData(dataArray);

		if (this.onFloatFrequencyData) {
			this.onFloatFrequencyData(dataArray, audioProcessingEvent.timeStamp);
		}
	};
}

export default WebAudioEngine;