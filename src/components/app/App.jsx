import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardDetailContainer from '../../containers/CardDetailContainer';
import CardListContainer from '../../containers/CardListContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(routerProps) => (
                                <CardListContainer {...routerProps} />
                            )}
                        />
                        <Route
                            path="/:id"
                            exact
                            render={(routerProps) => (
                                <CardDetailContainer {...routerProps} />
                            )}
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}
