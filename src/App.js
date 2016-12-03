import React, { Component } from 'react';
import * as bs from 'react-bootstrap'

import TopNav from './components/TopNav'
import BusList from './components/BusList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="shell" className="container-fluid">
        <TopNav />
        <div id="main-content">
          <bs.Grid fluid style={{ marginTop: '20px' }}>
            <TopNav />
            <BusList />
          </bs.Grid>
        </div>
      </div>
    )
  }
}

export default App;
