import {
	AUTHENTICATION_INPROGRESS,
	AUTHENTICATION_FAILED,
	AUTHENTICATION_SUCCESS
} from '../actions/auth';

const initialState = {
	loading: false,
	user: null,
	error: false
};

const auth = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATION_INPROGRESS:
			return {
				...state,
				loading: true
			};
		case AUTHENTICATION_FAILED:
			return {
				...state,
				error: true,
				loading: false
			};
		case AUTHENTICATION_SUCCESS:
			return {
				...state,
				loading: false,
				error: false,
				user: action.payload
			};
		default:
			return state;
	}
};

export default auth;
