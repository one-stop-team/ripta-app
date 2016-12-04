import React from 'react'
import {
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  Row
} from 'react-bootstrap'

import routes from '../routes.json'
import logo from '../images/ripta_logo.png'

export default class NextBuses extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRouteChange = this.handleRouteChange.bind(this)
    this.state = {
      routeNumber: "1",
      stopId: "17045",
      stops: [],
      tripUpdates: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/tripupdates/route/${this.state.routeNumber}`)
      .then(response => response.json())
      .then(json => {
        this.setState({ tripUpdates: json.entity })
      })
    
    this.getStopsByRoute()
  }

  getStopsByRoute() {
    console.log(this.state.routeNumber)
    fetch(`http://localhost:8000/api/route/${this.state.routeNumber}/stops`)
      .then(response => response.json())
      .then(json => {
        this.setState({ stops: json })
      })
  }

  handleChange(evt) {
    this.setState({ stopId: evt.target.value.toString()})
  }

  handleRouteChange(evt) {
    this.setState({ routeNumber: evt.target.value.toString()}, function() {
      this.getStopsByRoute()
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
    const stopName = this.getStopName(this.state.stopId)

//    var displayYear = new update.arrival.time.substr(0,3)
//    var displayMonth = new update.arrival.time.substr(4,5)

    return (
      <div>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="routes">
              <ControlLabel>Select a route</ControlLabel>
              <FormControl componentClass="select" placeholder="select"
                onChange={this.handleRouteChange}>
                <option value="">Select a route</option>
                {routes
                  .map(route => (
                  <option value={route.route_id}>{route.route_long_name}</option>
                ))}
              </FormControl>
            </FormGroup>

            <FormGroup controlId="stops">
              <ControlLabel>Select a stop</ControlLabel>
              <FormControl componentClass="select" placeholder="select"
                onChange={this.handleChange}>
                <option value="">Select a stop</option>
                {this.state.stops
                  .map(stop => (
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
                <ul>
                    <li>Next bus is in: {(update.arrival.time - new Date()
                        .getTime()/1000)/60} minutes
                    </li>
                    <li>This bus will arrive at:
                        {new Date(update.arrival.time * 1000).toString()}
                    </li>
                    <li>This bus is delayed by:
                        {(update.arrival.delay/60)} minutes
                    </li>

                </ul>
                )
                )}
            </ul>
          </Col>
        </Row>
      </div>
    )
  }
}
