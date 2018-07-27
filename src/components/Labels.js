import React, { Component } from 'react';
import { Menu } from 'antd';

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
			<Menu.Item key={label.id}>{label.name}</Menu.Item>
		));
		return <Menu style={{ height: '100vh' }}>{labelItems}</Menu>;
	}
}
