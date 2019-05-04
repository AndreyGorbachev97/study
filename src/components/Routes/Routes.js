import React, { Component } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import { HashRouter, Route, Switch} from 'react-router-dom';


class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" component={Header} />
                </Switch>
            </HashRouter>
        );
    }
}

export default (Routes);