import { Layout } from 'antd';
import Header  from 'component/index/Header';
import Siderbar from 'component/index/SiderBar';

import React from 'react';
import intl from 'react-intl-universal';

const { Content } = Layout;

class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Header/>
                <Layout>
                    <Siderbar/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
