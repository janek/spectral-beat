import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {
    canvasHeight: PropTypes.number.isRequired,
    canvasWidth: PropTypes.number.isRequired,
    graphScale: PropTypes.number.isRequired,
    onsetData: PropTypes.shape({
        isPeak: PropTypes.bool.isRequired,
        threshold: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
    setOnsetGraphScale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    graphScale: state.onsetDetection.graphScale,
    onsetData: state.onsetDetection.onsetData,
});

const mapDispatchToProps = {
    setOnsetGraphScale: actions.setOnsetGraphScale,
};

class OnsetGraph extends Component {
    constructor(props) {
        super(props);
        const { canvasWidth } = props;
        this.createDataArrays(canvasWidth);
    }

    createDataArrays(length) {
        this.onsetValues = Array.from({ length }, _ => 0);
        this.thresholdValues = Array.from({ length }, _ => 0);
        this.peakValues = Array.from({ length }, _ => false);
    }

    componentDidMount = () => {
        this.startLoop();
    };

    componentWillUnmount = () => {
        this.stopLoop();
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        const { onsetData, canvasWidth } = nextProps;

        if (this.props.canvasWidth !== canvasWidth) {
            this.createDataArrays(canvasWidth);
            return true;
        }

        const { value, threshold, isPeak } = onsetData;

        this.onsetValues.shift();
        this.onsetValues.push(onsetData.value);

        this.thresholdValues.shift();
        this.thresholdValues.push(onsetData.threshold);

        this.peakValues.shift();
        this.peakValues.push(onsetData.isPeak);

        return false;
    };

    startLoop = () => {
        if (!this.frameId) {
            this.frameId = window.requestAnimationFrame(this.loop);
        }
        if (!this.scalingTimer) {
            this.scalingTimer = setInterval(() => {
                const maxValue = Math.max(...this.onsetValues);
                const newGraphScale = this.props.canvasHeight / maxValue;
                this.props.setOnsetGraphScale(newGraphScale);
            }, 2500);
        }
    }

    loop = () => {
        this.drawCanvas();
        this.frameId = window.requestAnimationFrame(this.loop);
    }

    stopLoop = () => {
        window.cancelAnimationFrame(this.frameId);
        clearInterval(this.scalingTimer);
    }

    drawCanvas = () => {
        const { canvasHeight, canvasWidth, graphScale } = this.props;
        const onsetCanvasCtx = this.canvas.getContext("2d");

        onsetCanvasCtx.fillStyle = "grey";
        onsetCanvasCtx.fillRect(0, 0, canvasWidth, canvasHeight);

        onsetCanvasCtx.fillStyle = "blue";
        this.thresholdValues.forEach((value, i) => {
            onsetCanvasCtx.fillRect(i, canvasHeight, 1, -value * graphScale);
        });

        onsetCanvasCtx.fillStyle = "white";
        this.onsetValues.forEach((value, i) => {
            onsetCanvasCtx.fillRect(i, canvasHeight, 1, -value * graphScale);
        });

        onsetCanvasCtx.fillStyle = "black";
        this.peakValues.forEach((value, i) => {
            if (value === true) {
                onsetCanvasCtx.fillRect(i, canvasHeight, 1, -canvasHeight);
            }
        });
    }

    render() {
        const { canvasHeight, canvasWidth } = this.props;
        return (
            <div style={{
                height: canvasHeight,
                opacity: 0.5,
                width: canvasWidth,
            }}>
                <canvas
                    ref={canvas => {
                        this.canvas = canvas;
                    }}
                    width={canvasWidth}
                    height={canvasHeight}
                />
            </div>
        );
    }
}

OnsetGraph.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(OnsetGraph);