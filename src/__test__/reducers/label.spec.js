import labels from '../../reducers/label';
import {
	LABELS_INPROGRESS,
	LABELS_SUCCESS,
	LABELS_FAILED
} from '../../actions/label';

describe('Label reducer', () => {
	const initialState = {
		loading: true,
		data: null,
		error: false
	};

	it('Should return correct state on progress', () => {
		const state = labels(initialState, { type: LABELS_INPROGRESS });
		expect(state).toEqual({ ...initialState, loading: true });
	});

	it('Should return correct state on success', () => {
		const state = labels(initialState, {
			type: LABELS_SUCCESS,
			payload: [1, 2, 3]
		});
		expect(state).toEqual({ ...initialState, loading: false, data: [1, 2, 3] });
	});

	it('Should return correct state on failed', () => {
		const state = labels(initialState, { type: LABELS_FAILED });
		expect(state).toEqual({ ...initialState, loading: false, error: true });
	});

	it('Should return initial state on default', () => {
		const state = labels(undefined, { type: '' });
		expect(state).toEqual(initialState);
	});
});
