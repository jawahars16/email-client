import React, { Component } from 'react';

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error</div>;

export default class Main extends Component {
	componentDidMount() {
		this.props.authenticate();
	}

	render() {
		if (this.props.error) {
			return <Error />;
		}

		if (this.props.loading) {
			return <Loading />;
		}

		return <div>Logged in...</div>;
	}
}
