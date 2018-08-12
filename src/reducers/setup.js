import {
	FETCH_INPROGRESS,
	FETCH_FAILED,
	FETCH_SUCCESS
} from '../actions/setup';

const initialState = {
	message: null
};

const labels = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_INPROGRESS:
		case FETCH_SUCCESS:
			return {
				message: action.payload
			};
		case FETCH_FAILED:
			return {
				message: action.payload
			};
		default:
			return state;
	}
};

export default labels;
