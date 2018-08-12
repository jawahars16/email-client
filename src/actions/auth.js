import { authenticate } from '../service/auth';
import { initialize } from './setup';

export const AUTHENTICATION_INPROGRESS = 'AUTHENTICATION_INPROGRESS';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED';

const authenticationInProgress = {
	type: AUTHENTICATION_INPROGRESS
};

const authenticationSuccess = user => ({
	type: AUTHENTICATION_SUCCESS,
	payload: user
});

const authenticationFailed = {
	type: AUTHENTICATION_FAILED
};

export const initAuthentication = () => {
	return dispatch => {
		dispatch(authenticationInProgress);
		return authenticate()
			.then(response => {
				dispatch(authenticationSuccess(response));
				dispatch(initialize());
			})
			.catch(() => dispatch(authenticationFailed));
	};
};
