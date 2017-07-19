import React, {Component} from 'react';
import Heading from './heading';
import Body from './body';

export default class Container extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="container">
            <div className="main-form">
              <Heading />
              <hr />
              <Body />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
