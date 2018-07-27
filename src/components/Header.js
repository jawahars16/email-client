import React from 'react';
import { Layout, Row, Col } from 'antd';

const Header = props => {
	return (
		<Layout.Header>
			<Row>
				<Col span={18}>Email Client</Col>
				<Col span={6}>
					<Row style={{ float: 'right' }}>
						{props.user.name}
					</Row>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default Header;
