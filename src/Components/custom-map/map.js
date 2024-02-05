import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import '../../Styles/map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel,center }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.coords.latitude}
          lng={location.coords.longitude}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
