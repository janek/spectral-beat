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
};

const mapStateToProps = ({ video, canvas, settings }) => ({
    backgroundColor: canvas.currentColor,
    settingsAreVisible: settings.settingsAreVisible,
});

const mapDispatchToProps = dispatch => ({
    setSettingsVisibility: (visible) => {
        dispatch(actions.setSettingsVisibility(visible));
    },
});


class SpectralBeatMainView extends Component {
    
    constructor(props) {
        super(props);
        this.jumpNumber = 0;
        // XXX: Using refs+zindex for the functionality of alternating between videos is a hack
        // a good solution would possibly use Redux and "elevate state"
        // 
        this.videoContainers = [React.createRef(), React.createRef(), React.createRef()];
        this.players =  [React.createRef(), React.createRef(), React.createRef()];
    }

    componentWillUpdate(prevState, nextState) {
        this.jumpToRandomTimestamp()
    }

    jumpToRandomTimestamp() {
        const i = this.jumpNumber%3
        this.players[i].current.seekTo(Math.random());
        this.videoContainers[i].current.style.zIndex = this.jumpNumber
        this.jumpNumber += 1 
    }

    render() {
        const { settingsAreVisible, backgroundColor } = this.props;
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
                <div style={styles.videoContainer} ref={this.videoContainers[0]}>
                    <ReactPlayer 
                        ref={this.players[0]}
                        url='video.mp4' 
                        width='100%'
                        height='100%'
                        playing 
                        muted 
                        loop
                        onClick={() => this.jumpToRandomTimestamp()}
                    />
                </div>
                <div style={styles.videoContainer} ref={this.videoContainers[1]}>
                    <ReactPlayer 
                        ref={this.players[1]}
                        url='video.mp4' 
                        width='100%'
                        height='100%'
                        playing 
                        muted 
                        loop
                        onClick={() => this.jumpToRandomTimestamp()}
                    />
                </div>
                <div style={styles.videoContainer} ref={this.videoContainers[2]}>
                    <ReactPlayer 
                        ref={this.players[2]}
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
        zIndex: 1000000, //XXX: this is a consequence of using zIndex to cycle videos 
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
        height: '100%',
        margin: 'auto',
        position: 'absolute',
        width: '100%',
    },
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpectralBeatMainView);
