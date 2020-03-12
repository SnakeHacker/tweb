import { IsLoggedIn } from 'client/session'
import Login from 'component/session/Login'
import Index from 'component/index/Index'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { URLRoot} from 'common'

interface State {
    failed: boolean
}

export default class App extends React.Component<{}, State> {
    componentDidMount() {
    }

    render() {

        return (
            (!IsLoggedIn()) ? (
                <Router>
                    <Route exact={true} path={URLRoot} component={Login} />
                </Router>
            ) : (
                <Router>
                    <Route exact={true} path={`${URLRoot}/`} component={Index}/>
                </Router>
            )
        )
    }
}
