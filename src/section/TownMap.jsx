import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '50%'
};

export class MapContainer extends Component {
// (async () => {
//     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=949d1u22cbffbrarjh182eig55721odj');
//     const data = await response.json();
//     console.log(data);
// })();

render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 42.2403,
                        lng: -70.9458
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({

})(MapContainer);

