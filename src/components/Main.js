import React, { Component } from 'react';
import Labels from '../containers/Labels';
import { Layout } from 'antd';
import Header from './Header';

const { Sider, Content } = Layout;

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
			<Layout style={{ height: '100vh' }}>
				<Header user={this.props.user} />
				<Layout>
					<Sider>
						<Labels />
					</Sider>
					<Layout>
						<Content>Content</Content>
					</Layout>
				</Layout>
			</Layout>
		);
	}
}
