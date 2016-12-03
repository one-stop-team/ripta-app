import React from 'react'
import * as bs from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

const LinkContainer = ({children}) => (
  <span>{children}</span>
)

export default class TopNav extends React.Component {
  render() {
    return (
      <bs.Navbar fixedTop fluid>
        <bs.Navbar.Header>
          <bs.Navbar.Brand>
            <img src={logo} alt="RIPTA" />
          </bs.Navbar.Brand>
          <bs.Navbar.Toggle />
        </bs.Navbar.Header>

          <bs.Navbar.Collapse>
              <bs.Nav>
                <bs.NavItem>Home</bs.NavItem>
                <bs.NavItem>Schedules</bs.NavItem>
                <bs.NavItem>Alerts</bs.NavItem>
              </bs.Nav>
          </bs.Navbar.Collapse>
      </bs.Navbar>
    )
  }
}
