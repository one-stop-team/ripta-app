import React from 'react'
import { Col, Row } from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

export default class NextBuses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stopId: "13705",
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

  getStopTimeUpdates() {
    const buses = this.state.tripUpdates.map((tripUpdate) => {
      const stopUpdate = tripUpdate.trip_update.stop_time_update
        .find(item => item.stop_id === this.state.stopId)
      return stopUpdate
    })
    return buses
  }

  getStopName(id) {
    const stop = this.state.stops.find(
      stop => stop.stop_id === this.state.stopId)
    return stop ? stop.stop_name : ''
  }

  render() {
    const stopTimeUpdates = this.getStopTimeUpdates()
    console.log('tripUpdates', this.state.tripUpdates)
    console.log('stopTimeUpdates', stopTimeUpdates)
    console.log('stops', this.state.stops)

    const stopName = this.getStopName(this.state.stopId)

    return (
      <Row>
        <Col xs={12}>
          <b>{this.state.stopId + ': ' + stopName}</b>
          <ul>
            {stopTimeUpdates.map(update => {
              return <li>foo</li>
            }
            )}
          </ul>
        </Col>
      </Row>
    )
  }
}

//  if (update && update.arrival) {
//                 return <li>{`${update.arrival.time}: (delayed ${update.arrival.delay} seconds)`}</li>
//               } else {
//                 return null
//               }
