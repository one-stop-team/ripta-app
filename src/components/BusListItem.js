import React from 'react'
import { Col, Row } from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

export default class BusListItem extends React.Component {
  render() {
    const { bus } = this.props
    return (
      <Row>
        <Col xs={12}>
          Bus {bus.number}
        </Col>
      </Row>
    )
  }
}
