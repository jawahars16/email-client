import React, { Component } from 'react';
import Labels from '../containers/Labels';
import { Layout } from 'antd';
import Header from './Header';

const { Sider, Content } = Layout;

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error</div>;
const Setup = props => <div>{props.message}</div>;

export default class Main extends Component {
	componentDidMount() {
		this.props.authenticate();
	}

	render() {
		if (this.props.auth.error) {
			return <Error />;
		}

		if (this.props.auth.loading) {
			return <Loading />;
		}

		if(this.props.setup){
			return <Setup message={this.props.setup.message}/>;
		}

		return (
			<Layout style={{ height: '100vh' }}>
				<Header user={this.auth.props.user} />
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
