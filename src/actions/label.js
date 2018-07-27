import { getLabels } from '../service/label';

export const LABELS_INPROGRESS = 'LABEL_INPROGRESS';
export const LABELS_SUCCESS = 'LABEL_SUCCESS';
export const LABELS_FAILED = 'LABEL_FAILED';

const labelsInProgress = {
	type: LABELS_INPROGRESS
};

const labelsSuccess = labels => ({
	type: LABELS_SUCCESS,
	payload: labels
});

const labelsFailed = {
	type: LABELS_FAILED
};

export const fetchLabels = () => {
	return dispatch => {
		dispatch(labelsInProgress);
		return getLabels()
			.then(response => {
				dispatch(labelsSuccess(response));
			})
			.catch(() => dispatch(labelsFailed));
	};
};
