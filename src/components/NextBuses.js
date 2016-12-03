import React from 'react'
import { Col, Row } from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

export default class NextBuses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stops: [],
      tripUpdates: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/tripupdates/route/34')
      .then(response => response.json())
      .then(json => {
        this.setState({ tripUpdates: json.entity })
      })

    fetch('http://localhost:8000/api/route/34/stops')
      .then(response => response.json())
      .then(json => {
        this.setState({ stops: json })
      })

  }

  render() {
    const { bus } = this.props
    console.log('tripUpdates', this.state.tripUpdates)
    console.log('stops', this.state.stops)
    return (
      <Row>
        <Col xs={12}>
        </Col>
      </Row>
    )
  }
}
