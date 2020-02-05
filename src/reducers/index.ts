import { combineReducers } from 'redux';
import canvas from './canvas';
import onsetDetection from './onset';
import settings from './settings';
import video from './video';

export default combineReducers({
	canvas,
	onsetDetection,
	settings,
	video,
});
