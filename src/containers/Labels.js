import { connect } from 'react-redux';
import Labels from '../components/Labels';
import { fetchLabels } from '../actions/labels';

const mapStateToProps = state => {
	return { ...state.labels };
};

const mapDispatchToProps = dispatch => ({
	fetchLabels: () => dispatch(fetchLabels())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Labels);
