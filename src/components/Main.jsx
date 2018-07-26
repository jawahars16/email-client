import React, { Component } from 'react';
import Labels from '../containers/Labels';

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

		return (
			<div>
				<img src={this.props.user.image} alt={this.props.user.name} />
				<br />
				Logged in as {this.props.user.name}
				<br /> {this.props.user.email}
				<Labels />
			</div>
		);
	}
}
