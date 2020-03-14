import React from 'react';
import { Layout, Spin, List, Typography, Tag } from 'antd';
import BaseComponent from 'components/Base';
import { FetchUserList } from 'client/account'
import { account } from 'proto/account'
import { common } from 'proto/common'
import intl from 'react-intl-universal';

import "./account.less"

interface State {
    loading: boolean;
    accounts: common.IUser[] | undefined;
}
// class Account extends React.Component<{}, {}> {
class Account extends BaseComponent<{}, State> {
    state: Readonly<State> = {
        loading: false,
        accounts: [] as common.IUser[],
    };
    
    componentDidMount(){
        this.fetchUsers();
    }

    fetchUsers = async () => {
        this.setState({loading: true});
        const req = account.FetchAccountRequest.create({});
        const resp = await FetchUserList(req);

        if (!this.checkHTTPResult(resp)) {
            return
        }

        this.setState({
            accounts: resp.response?.accounts ,
            loading: false,
        });
    }

    render() {
        return (
            <Layout>
                <List
                    header={<h1>Header</h1>}
                    bordered
                    className="accounts_list"
                    dataSource={this.state.accounts}
                    renderItem={item => (
                        <List.Item>
                            {item.role === common.UserRole.ROLE_ADMIN ?
                                <Tag color="#f50">ADMIN</Tag>:
                                <Tag color="#108ee9">USER</Tag>
                            }

                            {item.nickname}
                        </List.Item>
                    )}
                />
                <Spin 
                    className="spin" 
                    size="large" 
                    spinning={this.state.loading}
                    tip={intl.formatMessage({ id: "loading"})}
                />
            </Layout>
        
        )
    }
}

export default Account;
