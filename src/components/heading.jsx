import React, {Component} from 'react';

export default class Heading extends Component {
  render () {
    return (
      <h2 className="form-heading">
        <strong className="big">#!/</strong>
        <i className="glyphicon glyphicon-trash" />
        <strong className="big">/</strong>
        <i className="glyphicon glyphicon-console" />
      </h2>
    );
  }
}
