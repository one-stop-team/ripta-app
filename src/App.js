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
        </div>
      </div>
    )
  }
}

export default App;
