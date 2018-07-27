import {
	LABELS_INPROGRESS,
	LABELS_SUCCESS,
	LABELS_FAILED
} from '../actions/label';

const initialState = {
	loading: true,
	data: null,
	error: false
};

const labels = (state = initialState, action) => {
	switch (action.type) {
		case LABELS_INPROGRESS:
			return {
				...state,
				loading: true
			};
		case LABELS_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false
			};

		case LABELS_FAILED:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}
};

export default labels;
