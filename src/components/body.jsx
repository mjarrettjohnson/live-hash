import React, {Component} from 'react';
import {SHA256, SHA512, MD5} from 'crypto-js';

export default class Body extends Component {
  constructor () {
    super ();
    this.state = {
      input: '',
      hashes: {
        MD5: MD5,
        SHA256: SHA256,
        SHA512: SHA512,
      },
      hashFunction: SHA256,
    };
  }
  hash (e) {
    const value = e.target.value;
    let newState;
    if (value.length > 0) {
      newState = {
        hashed: this.state.hashFunction (value),
        input: value,
      };
    } else {
      newState = {
        input: value,
        hashed: '',
      };
    }
    this.setState (newState);
  }
  toggle (e) {
    const key = e.target.innerText;
    const newState = {
      hashFunction: this.state.hashes[key],
    };
    this.setState (Object.assign (this.state, newState));
    const value = {
      target: {
        value: this.state.input,
      },
    };

    this.hash (value);
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="container">
            <div className="main-form">
              <div className="row">
                <h2 className="form-heading">Can you Guess them all?</h2>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12 text-center">
                  <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="..."
                  >
                    <button
                      data-toggle="button"
                      type="button"
                      className="btn btn-default"
                      onClick={this.toggle.bind (this)}
                    >
                      SHA256
                    </button>
                    <button
                      data-toggle="button"
                      type="button"
                      className="btn btn-default "
                      onClick={this.toggle.bind (this)}
                    >
                      SHA512
                    </button>
                    <button
                      data-toggle="button"
                      type="button"
                      className="btn btn-default"
                      onClick={this.toggle.bind (this)}
                    >
                      MD5
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <form>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label">
                        Enter Text
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          placeholder="Enter String..."
                          value={this.state.input}
                          onChange={this.hash.bind (this)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 col-form-label">
                        Output
                      </label>
                      <div className="col-md-10">
                        <textarea
                          className="form-control"
                          value={this.state.hashed}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
