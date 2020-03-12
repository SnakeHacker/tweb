
import { Typography, Button } from 'antd';
import React from 'react';
import BaseComponent from 'component/Base';
import { session } from 'proto/session';
import { Logout } from 'client/session';
import intl from 'react-intl-universal';
import { URLRoot } from 'common'

import "./header.less"

const { Title } = Typography;

class Header extends BaseComponent<{}, {}> {
    componentDidMount() {

    }

    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <img src="/static/image/logo.svg" className="logo" alt="" />
                    <Title className="title"level={2}>Tweb</Title>
                </div>
                
                <Button
                    type="primary"
                    className="logout"
                    onClick={this.logout}
                >
                    {intl.formatMessage({ id: "logout" })}
                </Button>
            </div>
        )
    }

    logout = async () => {
        const req = session.LogoutRequest.create({})
        const result = await Logout(req);

        if (!this.checkHTTPResult(result)) {
            return
        }

        console.log(URL)

        // reset the page to force to login page
        window.location.href = URLRoot;
    }
}

export default Header;