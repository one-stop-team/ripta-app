import React, { Component } from 'react';
import 'whatwg-fetch'
import * as bs from 'react-bootstrap'

import TopNav from './components/TopNav'
import BusList from './components/BusList'
import NextBuses from './components/NextBuses'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="shell" className="container-fluid">
        <TopNav />
        <div id="main-content">
          <bs.Grid fluid style={{ marginTop: '20px' }}>
            <TopNav />
			{/*<BusList />*/}
            <NextBuses />
          </bs.Grid>

          <div className="panel-heading">
            <h3 className="panel-title">Sunday, December 4, 2016</h3>
          </div>
          <p>Last Update: 6:30 p.m.</p>
          <div className="panel panel-success">
            <div className="panel-heading">
              <span className="panel-title">
                <span className="label label-primary">
                  <i className="fa fa-bus" aria-hidden="true"></i> 17
                </span> #675
              </span>
              <span className="badge pull-right">On time</span>
            </div>
            <div className="container-fluid">
              <div className="row">
              <div className="col-sm-4">
                  <i className="fa fa-bus" aria-hidden="true"></i>
                  <b>Stop</b>
                  <br></br>
                  Hope Street
                  <br></br>
                  7:00 p.m.
                </div>
              <div className="col-sm-4">
                  <i className="fa fa-road" aria-hidden="true"></i>
                  <b>Travel duration</b>
                  <br></br>
                  20 minutes
                </div>
              <div className="col-sm-4">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <b>Destination</b>
                  <br></br>
                  Kennedy Plaza
                  <br></br>
                  7:20 p.m.
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-danger">
            <div className="panel-heading">
              <span className="panel-title">
                <span className="label label-success">
                  <i className="fa fa-bus" aria-hidden="true"></i> 33
                </span> #324
              </span>
              <span className= "badge pull-right">20 min delayed</span>
            </div>
            <div className="container-fluid">
              <div className="row">
              <div className="col-sm-4">
                  <i className="fa fa-bus" aria-hidden="true"></i>
                  <b>Stop</b>
                  <br></br>
                  Place Providence
                  <br></br>
                  7:05 p.m.
                </div>
              <div className="col-sm-4">
                  <i className="fa fa-road" aria-hidden="true"></i>
                  <b>Travel duration</b>
                  <br></br>
                  15 minutes
                </div>
              <div className="col-sm-4">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <b>Destination</b>
                  <br></br>
                  Kennedy Plaza
                  <br></br>
                  7:40 p.m.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
