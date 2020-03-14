import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

class Dashboard extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Content>
                    Dashboard
                </Content>
            </Layout>
        )
    }
}

export default Dashboard;
