import { Typography } from 'antd';
import LoginForm from 'component/session/LoginForm'
import React from 'react';
import intl from 'react-intl-universal';
import Particles from 'react-particles-js';
import { params as particle_params } from './particles';

import './login.less';

const { Title } = Typography;

class LoginPage extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Particles width={"100vh"} height={"100vh"} className='particles' params={particle_params}/>
                <Title className="title" style={{marginBottom: '64px'}}>{intl.get('tweb')}</Title>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;
