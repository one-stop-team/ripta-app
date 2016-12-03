import React from 'react'
import * as bs from 'react-bootstrap'

import logo from '../images/tripplanner.png'

const LinkContainer = ({children}) => (
  <span>{children}</span>
)

export default class TopNav extends React.Component {
  render() {
    const { isAuthenticated, isSupplier, isBuyer } = this.props
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
                <bs.NavItem>Dashboard</bs.NavItem>
              </bs.Nav>
            <bs.Nav pullRight>
              <bs.MenuItem>Login</bs.MenuItem>
            </bs.Nav>
          </bs.Navbar.Collapse>
      </bs.Navbar>
    )
  }
}
