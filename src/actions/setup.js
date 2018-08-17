import { resetLabels } from '../service/label';
import { loadThreads } from '../service/thread';

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

const fetch = (dispatch, apiAction, entity) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(fetchInProgress(`Fetching ${entity}...`));
			const response = await apiAction();
			dispatch(fetchSuccess(`${entity} retrieved successfully.`));

			resolve(response);
		} catch (error) {
			dispatch(fetchFailed(`Cannot fetch ${entity}...`));
			reject(error);
		}
	});
};

export const initialize = () => {
	return async dispatch => {
		await fetch(dispatch, resetLabels, 'Labels');
		await fetch(dispatch, () => loadThreads(new Date('2018/06/01')), 'Threads');

	};
};
