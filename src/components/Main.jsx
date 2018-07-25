import React, { Component } from 'react';

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error</div>;

export default class Main extends Component {
	componentDidMount() {
		this.props.authenticate();
	}

	render() {
		if (this.props.error || this.props.user == null) {
			return <Error />;
		}

		if (this.props.loading) {
			return <Loading />;
		}

		return (
			<div>
				<img src={this.props.user.image} />
				<br />
				Logged in as {this.props.user.name}
				<br /> {this.props.user.email}
			</div>
		);
	}
}
