import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CardListContainer from '../../containers/CardListContainer';
import CardDetail from '../card/CardDetail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path='/'
              exact
              render={(routerProps) => <CardListContainer {...routerProps} />}
            />
            <Route 
              path='/:id'
              exact
              render={(routerProps) => <CardDetail {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

