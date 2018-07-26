import React, { Component } from 'react';

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error</div>;

export default class Labels extends Component {
	componentDidMount() {
		this.props.fetchLabels();
	}

	render() {
		if (this.props.error) {
			return <Error />;
		}

		if (this.props.loading) {
			return <Loading />;
		}

		const labelItems = this.props.data.map(label => (
			<div key={label.id}>{label.name}</div>
		));
		return <div>{labelItems}</div>;
	}
}
