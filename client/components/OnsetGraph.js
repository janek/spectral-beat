import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const w = 512;
const h = 300;
const onsetScale = 100;

class OnsetGraph extends Component {
    componentDidMount() {
        this.updateCanvas([]);
    }

    componentWillUpdate(nextProps) {
        this.updateCanvas(nextProps.onsetValues);
    }

    updateCanvas(onsetData) {
        const onsetCanvasCtx = this.canvas.getContext('2d');
        onsetCanvasCtx.fillStyle = 'black';
        onsetCanvasCtx.fillRect(0, 0, w, h);

        onsetCanvasCtx.fillStyle = 'white';
        for (let i = 0; i < onsetData.length; i++) {
            onsetCanvasCtx.fillRect(i * 2, h, 1, -onsetData[i] * onsetScale);
        }
    }

    render() {
        const onsetValues = this.props.onsetValues;
        return (
            <canvas ref={(canvas) => { this.canvas = canvas; }} width={w} height={h} />
        );
    }
}

OnsetGraph.propTypes = {
    onsetValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => {
    return {
        onsetValues: state.onsetDetection.onsetValues,
    };
};

export default connect(mapStateToProps)(OnsetGraph);
