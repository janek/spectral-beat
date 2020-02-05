import ActionTypes from '../actions/actionTypes';

const { SET_VIDEO_PROGRESS, SET_CANVAS_COLOR } = ActionTypes;

interface IVideoState {
	progress: number
}

const initialState: IVideoState = {
	progress: 0.001
};

const reducer = (state: IVideoState = initialState, action: any = {}) => {
	switch (action.type) {
		case SET_VIDEO_PROGRESS:
			return {
				...state,
				currentColor: action.progress,
			}
		case SET_CANVAS_COLOR:
			return {
				...state,
				progress: Math.random(),
			};
		default:
			return state;
	}
}

export default reducer;