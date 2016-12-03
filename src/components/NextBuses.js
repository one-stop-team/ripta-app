import React from 'react'
import { Col, Row } from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

export default class NextBuses extends React.Component {

  componentDidMount() {
    fetch('http://localhost:8000/api/tripupdates/route/34')
      .then(response => {
        console.log(response)
      })
  }

  render() {
    const { bus } = this.props
    return (
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
    )
  }
}
