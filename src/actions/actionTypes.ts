enum ActionTypes {
	// SETTINGS
	SET_SETTINGS_VISIBILITY,
	TOGGLE_SETTINGS_VISIBILITY,
	
	// VIDEO
	SET_VIDEO_PROGRESS,

	// CANVAS
	SET_CANVAS_COLOR,
	TOGGLE_CANVAS_COLOR,
	
	// ONSET/THRESHOLD
	SET_ONSET_DETECTION_RUNNING,
	TOGGLE_ONSET_DETECTION_RUNNING,
	SET_ONSET_DATA,
	SET_ONSET_GRAPH_SCALE,
	SET_THRESHOLD,
	TOGGLE_AUTO_THRESHOLD_IS_ACTIVE,
}

export default ActionTypes;
