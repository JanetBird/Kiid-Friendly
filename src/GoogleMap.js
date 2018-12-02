import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class Map extends Component {
    render(){
        const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

        return (
            <GoogleMapLoader
            containerElement= { mapContainer }
            GoogleMap= {
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={this.props.center}
                    options={{streetViewControl: false, mapTypeControl: false}}>
                </GoogleMap>
            } />
        )
    }
}

export default Map;