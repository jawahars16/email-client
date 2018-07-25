import { initAuthentication } from '../actions/auth';
import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = state => {
	return { ...state.auth };
};

const mapDispatchToProps = dispatch => ({
	authenticate: () => dispatch(initAuthentication())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
