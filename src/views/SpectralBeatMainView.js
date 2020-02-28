import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

import SettingsOverlay from '../components/SettingsOverlay';
import OnsetDetectionController from '../components/OnsetDetectionController';
import * as actions from '../actions';
import { toggleFullScreen } from '../lib/helpers';


const propTypes = {
    setSettingsVisibility: PropTypes.func.isRequired,
    settingsAreVisible: PropTypes.bool.isRequired,
    videoTime: PropTypes.number.isRequired,
};

const mapStateToProps = ({ video, canvas, settings }) => ({
    backgroundColor: canvas.currentColor,
    settingsAreVisible: settings.settingsAreVisible,
    videoTime: video.progress,
});

const mapDispatchToProps = dispatch => ({
    setSettingsVisibility: (visible) => {
        dispatch(actions.setSettingsVisibility(visible));
    },
});


class SpectralBeatMainView extends Component {
    
    constructor(props) {
        super(props);
        this.player = React.createRef();
    }

    componentWillUpdate(prevState, nextState) {
        this.player.current.seekTo(Math.random())
    }

    jumpToRandomTimestamp() {
        this.player.current.seekTo(Math.random());
    }

    render() {
        const { settingsAreVisible, backgroundColor } =  this.props;
        return (
            <div 
                style={{ backgroundColor, ...styles.main }}
            >
                <div style={styles.fullscreenButtonWrapper}>
                    <img
                        src={'fullscreen.png'}
                        style={styles.fullscreenButton}
                        onClick={toggleFullScreen}
                    />
                </div>
                <div style={styles.videoContainer}>
                    <ReactPlayer 
                        ref={this.player}
                        url='video.mp4' 
                        width='100%'
                        height='100%'
                        playing 
                        muted 
                        loop
                        onClick={() => this.jumpToRandomTimestamp()}
                    />
                </div>

                <div style={styles.settingsContainer} >
                    {settingsAreVisible
                        ? <SettingsOverlay />
                        : null
                    }
                </div>
                <div style={styles.controllerContainer}>
                    <OnsetDetectionController />
                </div>

            </div>
        )
    }
}

SpectralBeatMainView.propTypes = propTypes;

const styles = {
    controllerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    fullscreenButton: {
        height: "3em",
        width: "3em",
    },
    fullscreenButtonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    main: {
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif',
        height: '100%',
        justifyContent: 'space-between',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    settingsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    videoContainer: {
        display: 'flex',
        // flexDirection: 'column',
        // height: '100%',
        // width: '100%'

        height: '100%',
        margin: 'auto',
        width: '100%',
    },
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpectralBeatMainView);
