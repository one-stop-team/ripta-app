import React from 'react'
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row
} from 'react-bootstrap'

import logo from '../images/ripta_logo.png'

export default class NextBuses extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      stopId: "17045",
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

  handleChange(evt) {
    this.setState({ stopId: evt.target.value.toString()})
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
    const stopName = this.getStopName(this.state.stopId)

    return (
      <div>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select a stop</ControlLabel>
              <FormControl componentClass="select" placeholder="select"
                onChange={this.handleChange}>
                <option value="">Select a stop</option>
                {this.state.stops.map(stop => (
                  <option value={stop.stop_id}>{stop.stop_name}</option>
                ))}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <b>{this.state.stopId + ': ' + stopName}</b>
            <ul>
              {stopTimeUpdates
                .filter(update => update)
                .map(update => (
                  <li>Arrives at: {new Date(update.arrival.time).toString()}</li>
                )
                )}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
