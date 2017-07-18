import React, {Component} from 'react';
import {SHA256, SHA512, MD5} from 'crypto-js';

const ACTIVE_BTN_CLASS = 'btn btn-default btn-dark active';
const BTN_CLASS = 'btn btn-default btn-dark';

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
      buttonClasses: {
        MD5: BTN_CLASS,
        SHA256: BTN_CLASS,
        SHA512: BTN_CLASS,
      },
    };
  }
  hash (e) {
    const value = e.target.value;
    let newState;
    if (value === 'Hash') {
      newState = {
        hashed: "Awwwww...... This ain't right.....",
        input: value,
      };
    } else if (value.length > 0) {
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
    let classes = this.state.buttonClasses;

    Object.keys (classes).forEach (k => {
      if (k !== key) classes[k] = BTN_CLASS;
      else if (classes[k].indexOf ('active') === -1)
        classes[k] = ACTIVE_BTN_CLASS;
    });

    const newState = {
      hashFunction: this.state.hashes[key],
      buttonClasses: classes,
    };

    this.setState (Object.assign (this.state, newState));
    this.hash ({target: {value: this.state.input}});
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="container">
            <div className="main-form">
              <div className="row">
                <h2 className="form-heading">#Hash#Browns#for#Brekkie?</h2>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12 col-sm-12 text-center">

                  <div className="col-md-4">
                    <button
                      type="button"
                      className={this.state.buttonClasses['SHA256']}
                      onClick={this.toggle.bind (this)}
                    >
                      SHA256
                    </button>
                  </div>
                  <div className="col-md-4">

                    <button
                      type="button"
                      className={this.state.buttonClasses['SHA512']}
                      onClick={this.toggle.bind (this)}
                    >
                      SHA512
                    </button>
                  </div>
                  <div className="col-md-4">
                    <button
                      type="button"
                      className={this.state.buttonClasses['MD5']}
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
                        RAWWW
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
                        #HASH#
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
