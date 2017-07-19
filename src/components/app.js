import React, {Component} from 'react';
import Header from './header';
import Container from './container';
export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="container-fluid main">
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
