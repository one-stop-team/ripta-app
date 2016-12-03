import React from 'react'
import * as bs from 'react-bootstrap'

import BusListItem from './BusListItem'
import logo from '../images/ripta_logo.png'

class BusList extends React.Component {
  render() {
    console.log('bus list')
    const { buses } = this.props
    return (
      <div>
        {buses.map((bus, index) => (
          <BusListItem key={bus.number} bus={bus} />
        ))}
      </div>
    )
  }
}

BusList.defaultProps = {
  buses: [
    { number: 123 },
    { number: 456 },
  ]
}

export default BusList
