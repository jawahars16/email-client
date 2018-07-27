import React from 'react';
import { Layout, Row, Col, Avatar, Divider } from 'antd';

const Header = props => {
	return (
		<Layout.Header>
			<Row>
				<Col span={18}>Email Client</Col>
				<Col span={6}>
					<Row style={{ float: 'right' }}>
						{props.user.name}
						<Divider type="vertical"/>
						<Avatar size="small" src={props.user.image} alt={props.user.name} />
					</Row>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default Header;
