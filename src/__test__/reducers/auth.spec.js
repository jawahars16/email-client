import auth from '../../reducers/auth';
import {
	AUTHENTICATION_INPROGRESS,
	AUTHENTICATION_SUCCESS,
	AUTHENTICATION_FAILED
} from '../../actions/auth';

describe('Auth reducer', () => {
	const initialState = {
		loading: true,
		user: null,
		error: false
	};

	it('Should return correct state for in progress', () => {
		const state = auth(initialState, { type: AUTHENTICATION_INPROGRESS });
		expect(state).toEqual({ ...initialState, loading: true });
	});

	it('Should return correct state for success', () => {
		const state = auth(initialState, {
			type: AUTHENTICATION_SUCCESS,
			payload: {}
		});
		expect(state).toEqual({ ...initialState, loading: false, user: {} });
	});

	it('Should return correct state for failure', () => {
		const state = auth(initialState, {
			type: AUTHENTICATION_FAILED,
			payload: {}
		});
		expect(state).toEqual({ ...initialState, loading: false, error: true });
	});

	it('Should return initial state for default', () => {
		const state = auth(undefined, { type: '' });
		expect(state).toEqual(initialState);
	});
});
