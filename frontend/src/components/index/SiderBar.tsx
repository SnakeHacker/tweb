

import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import intl from 'react-intl-universal';

import './sidebar.less'

const { SubMenu } = Menu;
const { Sider } = Layout;

class Siderbar extends React.Component<{}, {}> {
    render() {
        return (
            <Sider width={200} className="sidebar">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['index']}
                    defaultOpenKeys={['management']}
                >
                    <Menu.Item key="index" className="menu-item">
                        <Link to="/app/dashboard">{intl.formatMessage({ id: "dashboard-menu"})}</Link>
                        </Menu.Item>
                    <SubMenu key="management" className="sub-menu" title={intl.formatMessage({ id: "management-menu"})}>
                        <Menu.Item key="account_management" className="menu-item">
                            <Link to="/app/management/account">{intl.formatMessage({ id: "account-menu"})}</Link>
                        </Menu.Item>
                        <Menu.Item key="model_management" className="menu-item">
                            <Link to="/app/management/model">{intl.formatMessage({ id: "model-menu"})}</Link>
                        </Menu.Item>
                    </SubMenu>
                    
                </Menu>
            </Sider>
        )
    }
}

export default Siderbar;