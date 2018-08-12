import { resetLabels } from '../service/label';
import * as ipc from '../common/ipc';
import * as task from '../common/task';

export const FETCH_INPROGRESS = 'FETCH_INPROGRESS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

const fetchInProgress = message => ({
	type: FETCH_INPROGRESS,
	payload: message
});

const fetchSuccess = message => ({
	type: FETCH_SUCCESS,
	payload: message
});

const fetchFailed = message => ({
	type: FETCH_FAILED,
	payload: message
});

const fetch = (dispatch, apiAction, channel, entity) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(fetchInProgress(`Fetching ${entity}...`));
			const response = await apiAction();
			dispatch(fetchSuccess(`${entity} retrieved successfully.`));

			// const result = await ipc.ipcSendToElectron(channel, response);
			// dispatch(fetchSuccess(`${entity} stored successfully.`));

			resolve(response);
		} catch (error) {
			dispatch(fetchFailed(`Cannot fetch ${entity}...`));
			reject(error);
		}
	});
};

export const initialize = () => {
	return async dispatch => {
		await fetch(dispatch, resetLabels, 'labels', 'Labels');
	};
};
