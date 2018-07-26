import * as label from '../../service/label';
import * as mock from '../mock';
import {
	LABELS_INPROGRESS,
	LABELS_SUCCESS,
	LABELS_FAILED,
    fetchLabels
} from '../../actions/labels';

describe('Auth action', () => {
	it('Should raise in progress and success actions', async () => {
		const dispatch = jest.fn();
		label.getLabels = jest
			.fn()
			.mockImplementation(() => mock.mockResolve({ data: [] }));
		await fetchLabels()(dispatch);
		expect(dispatch).toBeCalledWith({ type: LABELS_INPROGRESS });
		expect(dispatch).toBeCalledWith({
			type: LABELS_SUCCESS,
			payload: { data: [] }
		});
	});

	it('Should raise in progress and failure actions', async () => {
		const dispatch = jest.fn();
		label.getLabels = jest.fn().mockImplementation(mock.mockReject);
		await fetchLabels()(dispatch);
		expect(dispatch).toBeCalledWith({ type: LABELS_INPROGRESS });
		expect(dispatch).toBeCalledWith({
			type: LABELS_FAILED
		});
	});
});
