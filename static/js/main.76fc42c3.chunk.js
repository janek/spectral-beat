(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var o,r=n(1),i=n.n(r),s=n(6),a=n(16),c=n(31);!function(e){e[e.SET_SETTINGS_VISIBILITY=0]="SET_SETTINGS_VISIBILITY",e[e.TOGGLE_SETTINGS_VISIBILITY=1]="TOGGLE_SETTINGS_VISIBILITY",e[e.SET_CANVAS_COLOR=2]="SET_CANVAS_COLOR",e[e.TOGGLE_CANVAS_COLOR=3]="TOGGLE_CANVAS_COLOR",e[e.SET_ONSET_DETECTION_RUNNING=4]="SET_ONSET_DETECTION_RUNNING",e[e.TOGGLE_ONSET_DETECTION_RUNNING=5]="TOGGLE_ONSET_DETECTION_RUNNING",e[e.SET_ONSET_DATA=6]="SET_ONSET_DATA",e[e.SET_ONSET_GRAPH_SCALE=7]="SET_ONSET_GRAPH_SCALE",e[e.SET_THRESHOLD=8]="SET_THRESHOLD",e[e.TOGGLE_AUTO_THRESHOLD_IS_ACTIVE=9]="TOGGLE_AUTO_THRESHOLD_IS_ACTIVE"}(o||(o={}));var u=o,l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=u.SET_CANVAS_COLOR,d={currentColor:"black"},f=function(e,t){switch(void 0===e&&(e=d),void 0===t&&(t={}),t.type){case h:return l(l({},e),{currentColor:t.color});default:return e}},p=function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},g=u.SET_ONSET_DATA,v=u.SET_ONSET_DETECTION_RUNNING,T=u.SET_ONSET_GRAPH_SCALE,m=u.SET_THRESHOLD,b=u.TOGGLE_AUTO_THRESHOLD_IS_ACTIVE,y=u.TOGGLE_ONSET_DETECTION_RUNNING,S={autoThresholdIsActive:!0,graphScale:1e7,isRunning:!1,onsetData:{isPeak:!1,threshold:0,value:0},userThreshold:0},E=function(e,t){switch(void 0===e&&(e=S),void 0===t&&(t={}),t.type){case T:return p(p({},e),{graphScale:t.graphScale});case v:return p(p({},e),{isRunning:t.isRunning});case y:return p(p({},e),{isRunning:!e.isRunning});case g:return p(p({},e),{onsetData:p(p({},e.onsetData),t.onsetData)});case b:return p(p({},e),{autoThresholdIsActive:!e.autoThresholdIsActive});case m:return p(p({},e),{userThreshold:t.threshold});default:return e}},O=function(){return(O=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},C=u.SET_SETTINGS_VISIBILITY,w=u.TOGGLE_SETTINGS_VISIBILITY,N={settingsAreVisible:!1},_=function(e,t){switch(void 0===e&&(e=N),void 0===t&&(t={}),t.type){case C:return O(O({},e),{settingsAreVisible:t.settingsAreVisible});case w:return O(O({},e),{settingsAreVisible:!e.settingsAreVisible});default:return e}},I=Object(c.b)({canvas:f,onsetDetection:E,settings:_}),A=n(84),D=n(10),R=n(11),j=n(13),k=n(12),V=n(14),G=n(0),x=n.n(G),L=n(83),F=u.SET_SETTINGS_VISIBILITY,H=u.SET_CANVAS_COLOR,B=u.TOGGLE_SETTINGS_VISIBILITY,P=u.TOGGLE_AUTO_THRESHOLD_IS_ACTIVE,U=(u.TOGGLE_ONSET_DETECTION_RUNNING,u.SET_ONSET_DETECTION_RUNNING),W=u.SET_ONSET_DATA,q=u.SET_THRESHOLD,M=u.SET_ONSET_GRAPH_SCALE,z=function(e){return{color:e,type:H}},Y=function(e){return{graphScale:e,type:M}},J={setOnsetGraphScale:Y},Q=function(e){function t(e){var n;Object(D.a)(this,t),(n=Object(j.a)(this,Object(k.a)(t).call(this,e))).componentDidMount=function(){n.startLoop()},n.componentWillUnmount=function(){n.stopLoop()},n.shouldComponentUpdate=function(e,t){var o=e.onsetData,r=e.canvasWidth;if(n.props.canvasWidth!==r)return n.createDataArrays(r),!0;o.value,o.threshold,o.isPeak;return n.onsetValues.shift(),n.onsetValues.push(o.value),n.thresholdValues.shift(),n.thresholdValues.push(o.threshold),n.peakValues.shift(),n.peakValues.push(o.isPeak),!1},n.startLoop=function(){n.frameId||(n.frameId=window.requestAnimationFrame(n.loop)),n.scalingTimer||(n.scalingTimer=setInterval(function(){var e=Math.max.apply(Math,Object(L.a)(n.onsetValues)),t=n.props.canvasHeight/e;n.props.setOnsetGraphScale(t)},2500))},n.loop=function(){n.drawCanvas(),n.frameId=window.requestAnimationFrame(n.loop)},n.stopLoop=function(){window.cancelAnimationFrame(n.frameId),clearInterval(n.scalingTimer)},n.drawCanvas=function(){var e=n.props,t=e.canvasHeight,o=e.canvasWidth,r=e.graphScale,i=n.canvas.getContext("2d");i.fillStyle="grey",i.fillRect(0,0,o,t),i.fillStyle="blue",n.thresholdValues.forEach(function(e,n){i.fillRect(n,t,1,-e*r)}),i.fillStyle="white",n.onsetValues.forEach(function(e,n){i.fillRect(n,t,1,-e*r)}),i.fillStyle="black",n.peakValues.forEach(function(e,n){!0===e&&i.fillRect(n,t,1,-t)})};var o=e.canvasWidth;return n.createDataArrays(o),n}return Object(V.a)(t,e),Object(R.a)(t,[{key:"createDataArrays",value:function(e){this.onsetValues=Array.from({length:e},function(e){return 0}),this.thresholdValues=Array.from({length:e},function(e){return 0}),this.peakValues=Array.from({length:e},function(e){return!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.canvasHeight,o=t.canvasWidth;return i.a.createElement("div",{style:{height:n,opacity:.5,width:o}},i.a.createElement("canvas",{ref:function(t){e.canvas=t},width:o,height:n}))}}]),t}(r.Component),$=Object(a.b)(function(e){return{graphScale:e.onsetDetection.graphScale,onsetData:e.onsetDetection.onsetData}},J)(Q),K=n(42),X=(n(77),x.a.number.isRequired,x.a.number.isRequired,x.a.func.isRequired,{setOnsetGraphScale:Y}),Z=function(e){function t(){return Object(D.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.graphScale,e.setOnsetGraphScale),n=e.height;return i.a.createElement(K.a,{min:100,max:1e6,step:1e-5,onChange:function(e){t(e)},vertical:!0,style:{alignItems:"stretch",display:"flex",height:n,paddingRight:"2em"}})}}]),t}(r.Component),ee=(Object(a.b)(function(e){return{onsetGraphScale:e.onsetDetection.graphScale}},X)(Z),{setUserThreshold:function(e){return{threshold:e,type:q}},toggleAutoThresholdIsActive:function(){return{type:P}}}),te=function(e){function t(){var e,n;Object(D.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).handleThresholdChange=function(e){n.props.setUserThreshold(parseFloat(e))},n}return Object(V.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=e.autoThresholdIsActive,n=(e.userThreshold,e.toggleAutoThresholdIsActive);return i.a.createElement("div",{style:{alignItems:"center",backgroundColor:"blue",borderColor:"#CCCCCC",borderRadius:7,borderStyle:"solid",borderWidth:4,cornerRadius:3,display:"flex",flexDirection:"column",justifyContent:"center",opacity:.75,padding:"1em"}},i.a.createElement("div",{htmlFor:"manualThreshold",style:{marginBottom:"0.7em"}},i.a.createElement("input",{type:"checkbox",name:"manualThreshold",checked:!t,onChange:n}),"Manual Threshold"),i.a.createElement(K.a,{min:0,max:.02,step:1e-5,onChange:this.handleThresholdChange,disabled:t}))}}]),t}(r.Component),ne=(Object(a.b)(function(e){return{autoThresholdIsActive:e.onsetDetection.autoThresholdIsActive,userThreshold:e.onsetDetection.userThreshold}},ee)(te),n(82)),oe=n.n(ne),re=function(e){function t(){return Object(D.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=e.windowWidth,n=e.windowHeight,o=Math.round(n/3),r=Math.round(t);return i.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"1em"}},i.a.createElement($,{canvasHeight:o,canvasWidth:r}))}}]),t}(r.Component);re.props={windowHeight:x.a.number.isRequired,windowWidth:x.a.number.isRequired};var ie=oe()(function(e){var t=e.width;return{windowHeight:e.height,windowWidth:t}})(re),se=function(){function e(t,n,o){var r,i,s=this;this.shouldCalculateThreshold=!0,this.threshold=0,this.run=function(t,n){if(t.length===s.previousSpectrum.length){var o,r=t.map(ce),i=ae(s.previousSpectrum,r),a=((o=s.onsetValues.subarray(s.onsetValues.length-e.smoothingWindowLength,s.onsetValues.length)).reduce(function(e,t){return e+t},0)+i)/(o.length+1);s.previousSpectrum.set(r),s.onsetValues.set(s.onsetValues.subarray(1)),s.onsetValues[s.onsetValues.length-1]=a,s.shouldCalculateThreshold&&(s.threshold=le(s.onsetValues));var c=ue(s.onsetValues,s.threshold);c&&null!=s.onOnsetDetected&&s.onOnsetDetected(n),s.onOnsetResultData&&s.onOnsetResultData({isPeak:c,threshold:s.threshold,value:s.onsetValues[s.onsetValues.length-1]})}else console.error("previous "+s.previousSpectrum.length+" and current "+t.length+" spectrum don't have the same length")},this.onsetValues=(r=n/t,i=Math.round(e.onsetBufferDurationS/r),new Float32Array(i)),this.previousSpectrum=new Float32Array(o)}return e.prototype.setThreshold=function(e){e?(this.threshold=e,this.shouldCalculateThreshold=!1):this.shouldCalculateThreshold=!0},e.onsetBufferDurationS=2.5,e.smoothingWindowLength=2,e}(),ae=function(e,t){var n=t.reduce(function(t,n,o){var r=e[o]-n;return r<0?t:t+(r*=r)},0);return Math.sqrt(n)/t.length};function ce(e){return Math.pow(10,e/20)}var ue=function(e,t){var n=e[e.length-3]<e[e.length-2]&&e[e.length-2]>e[e.length-1],o=e[e.length-2]>t;return n&&o},le=function(e){return e.reduce(function(e,t){return e+t},0)/e.length},he=se;function de(){var e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,o=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen;e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?o&&o.call(document):n&&n.call(t)}var fe={button:{backgroundColor:"black",borderColor:"white",borderRadius:7,borderStyle:"solid",borderWidth:2,color:"white",cornerRadius:3,fontSize:18,opacity:.5,padding:"0.5em",textAlign:"center",width:100}},pe=function(e){var t=e.label,n=e.onClick;return i.a.createElement("div",{style:fe.button,onClick:n},t)},ge=function(e){function t(){return Object(D.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClickStartStop,n=e.onClickSettings,o=e.isRunning;return i.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"space-around",margin:"1em",position:"relative"}},i.a.createElement(pe,{label:"Graph",onClick:n}),i.a.createElement(pe,{label:o?"Stop":"Start",onClick:function(){return t(!o)}}))}}]),t}(r.Component),ve=function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((o=o.apply(e,t||[])).next())})},Te=function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},me=!1,be=function(){function e(e){var t=this;this.audioProcessingCallback=function(e){var n=new Float32Array(t.analyserNode.frequencyBinCount);t.analyserNode.getFloatFrequencyData(n),t.onFloatFrequencyData&&t.onFloatFrequencyData(n,e.timeStamp)};var n=window.AudioContext||window.webkitAudioContext;this.audioContext=new n({latencyHint:"interactive"}),this.analyserNode=this.audioContext.createAnalyser(),this.processingNode=this.audioContext.createScriptProcessor(e),this.processingNode.onaudioprocess=this.audioProcessingCallback,this.gainNode=this.audioContext.createGain();var o=me?1:0;this.gainNode.gain.setValueAtTime(o,this.audioContext.currentTime)}return Object.defineProperty(e.prototype,"frequencyBinCount",{get:function(){return this.analyserNode.frequencyBinCount},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sampleRate",{get:function(){return this.audioContext.sampleRate},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferSize",{get:function(){return this.processingNode.bufferSize},enumerable:!0,configurable:!0}),e.prototype.start=function(){return ve(this,void 0,void 0,function(){var e;return Te(this,function(t){switch(t.label){case 0:return this.inputNode?[3,2]:(e=this,[4,(me?Se:ye)(this.audioContext)]);case 1:e.inputNode=t.sent(),t.label=2;case 2:return this.connect(),this.audioContext.resume(),[2]}})})},e.prototype.stop=function(){this.disconnect(),this.removeInputNodeIfNecessary(),this.audioContext.suspend()},e.prototype.removeInputNodeIfNecessary=function(){window.webkitAudioContext&&(this.inputNode=void 0)},e.prototype.connect=function(){this.inputNode&&(this.inputNode.connect(this.gainNode),this.inputNode.connect(this.analyserNode),this.inputNode.connect(this.processingNode)),this.analyserNode.connect(this.gainNode),this.processingNode.connect(this.gainNode),this.gainNode.connect(this.audioContext.destination)},e.prototype.disconnect=function(){this.inputNode&&this.inputNode.disconnect(),this.analyserNode.disconnect(),this.processingNode.disconnect(),this.gainNode.disconnect()},e}();function ye(e){return ve(this,void 0,Promise,function(){var t,n;return Te(this,function(o){switch(o.label){case 0:return t={audio:{echoCancellation:!1,noiseSuppression:!1}},[4,navigator.mediaDevices.getUserMedia(t)];case 1:return n=o.sent(),[2,e.createMediaStreamSource(n)]}})})}function Se(e){return ve(this,void 0,Promise,function(){var t,n;return Te(this,function(o){switch(o.label){case 0:return e.resume(),"example.mp3",[4,Ee("example.mp3",e)];case 1:return t=o.sent(),(n=e.createBufferSource()).buffer=t,n.start(),[2,n]}})})}function Ee(e,t){return ve(this,void 0,Promise,function(){var n;return Te(this,function(o){switch(o.label){case 0:return[4,fetch(e)];case 1:return[4,o.sent().arrayBuffer()];case 2:return n=o.sent(),window.webkitAudioContext?[2,new Promise(function(e,o){t.decodeAudioData(n,e,o)})]:[2,t.decodeAudioData(n)]}})})}var Oe=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(j.a)(this,Object(k.a)(t).call(this))).audioEngine=new be(t.desiredBufferSize),e.onsetDetection=new he(e.audioEngine.sampleRate,e.audioEngine.bufferSize,e.audioEngine.frequencyBinCount),e}return Object(V.a)(t,e),Object(R.a)(t,[{key:"startAudioProcessing",value:function(){this.audioEngine.onFloatFrequencyData=this.onsetDetection.run,this.audioEngine.start()}},{key:"stopAudioProcessing",value:function(){this.audioEngine.stop()}},{key:"componentDidMount",value:function(){var e;this.onsetDetection.onOnsetDetected=(e=t.refractoryTimeMS,function(t){var n=0;return function(o){o-n>=e&&t(),n=o}})(this.props.setNewRandomColor)}},{key:"componentDidUpdate",value:function(e){e.onsetDetectionIsRunning!==this.props.onsetDetectionIsRunning&&(this.props.onsetDetectionIsRunning?this.startAudioProcessing():this.stopAudioProcessing()),e.autoThresholdIsActive!==this.props.autoThresholdIsActive&&(this.onsetDetection.shouldCalculateThreshold=this.props.autoThresholdIsActive),e.userThreshold!==this.props.userThreshold&&this.onsetDetection.setThreshold(this.props.userThreshold),e.settingsAreVisible!==this.props.settingsAreVisible&&(this.props.settingsAreVisible?this.onsetDetection.onOnsetResultData=this.props.setOnsetData:this.onsetDetection.onOnsetResultData=null)}},{key:"render",value:function(){var e=this.props,t=e.onsetDetectionIsRunning,n=e.setOnsetDetectionRunning,o=e.toggleSettingsVisibility;return i.a.createElement(ge,{onClickStartStop:function(e){n(e)},onClickSettings:o,isRunning:t})}}]),t}(r.Component);Oe.desiredBufferSize=1024,Oe.refractoryTimeMS=75;var Ce,we=Object(a.b)(function(e){return{autoThresholdIsActive:e.onsetDetection.autoThresholdIsActive,onsetDetectionIsRunning:e.onsetDetection.isRunning,settingsAreVisible:e.settings.settingsAreVisible,userThreshold:e.onsetDetection.userThreshold}},function(e){return{setCanvasColor:function(t){e(z(t))},setNewRandomColor:function(){var t=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}();e(z(t))},setOnsetData:function(t){e(function(e){return{onsetData:e,type:W}}(t))},setOnsetDetectionRunning:function(t){e(function(e){return{isRunning:e,type:U}}(t))},toggleSettingsVisibility:function(){e({type:B})}}})(Oe),Ne=function(e){function t(){return Object(D.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(V.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this.props,t=e.settingsAreVisible,n=e.backgroundColor;return i.a.createElement("div",{style:Object(A.a)({backgroundColor:n},_e.main)},i.a.createElement("div",{style:_e.fullscreenButtonWrapper},i.a.createElement("img",{src:"fullscreen.png",style:_e.fullscreenButton,onClick:de})),i.a.createElement("div",{style:_e.settingsContainer},t?i.a.createElement(ie,null):null),i.a.createElement("div",{style:_e.controllerContainer},i.a.createElement(we,null)))}}]),t}(r.Component),_e={controllerContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},fullscreenButton:{height:"3em",width:"3em"},fullscreenButtonWrapper:{display:"flex",flexDirection:"row",justifyContent:"flex-end"},main:{alignItems:"stretch",display:"flex",flexDirection:"column",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif',height:"100%",justifyContent:"space-between",left:0,position:"absolute",top:0,width:"100%"},settingsContainer:{display:"flex",flexDirection:"column",justifyContent:"flex-end"}},Ie=Object(a.b)(function(e){var t=e.canvas,n=e.settings;return{backgroundColor:t.currentColor,settingsAreVisible:n.settingsAreVisible}},function(e){return{setSettingsVisibility:function(t){e({settingsAreVisible:t,type:F})}}})(Ne),Ae=(Ce=function(e,t){return(Ce=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}Ce(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),De=Object(c.c)(I),Re=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ae(t,e),t.prototype.render=function(){return r.createElement(a.a,{store:De},r.createElement(Ie,null))},t}(r.Component),je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.render(r.createElement(Re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/spectral-beat",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/spectral-beat/service-worker.js";je?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ke(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ke(e)})}}()},85:function(e,t,n){e.exports=n(152)}},[[85,2,1]]]);
//# sourceMappingURL=main.76fc42c3.chunk.js.map