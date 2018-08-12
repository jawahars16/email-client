import * as auth from '../../service/auth';
import * as mock from '../mock';
import {
    initAuthentication,
    AUTHENTICATION_INPROGRESS,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED
} from '../../actions/auth';

describe('Auth action', () => {
    it('Should raise in progress and success actions', async () => {
        const dispatch = jest.fn();
        auth.authenticate = jest
            .fn()
            .mockImplementation(() => mock.mockResolve({name: 'test user'}));
        await initAuthentication()(dispatch);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATION_INPROGRESS});
        expect(dispatch).toBeCalledWith({
            type: AUTHENTICATION_SUCCESS,
            payload: {name: 'test user'}
        });
    });

    it('Should raise in progress and failure actions', async () => {
        const dispatch = jest.fn();
        auth.authenticate = jest.fn().mockImplementation(mock.mockReject);
        await initAuthentication()(dispatch);
        expect(dispatch).toBeCalledWith({type: AUTHENTICATION_INPROGRESS});
        expect(dispatch).toBeCalledWith({
            type: AUTHENTICATION_FAILED
        });
    });
});
