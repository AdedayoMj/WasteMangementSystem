import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker,  } from 'google-maps-react';
import CurrentLocation from './Map'




class MapDesign extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}, 
    lat1:  59.415260,       //Shows the infoWindow to the selected place upon a marker
    lng1: 24.722100,
    lat2: 59.423599,
    lng2: 24.793341,
    lat3: 59.359231,
    lng3: 18.000154,


  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

 getDistance=(lat1, lng1, lat2, lng2, unit)=> {
	if ((lat1 == lat2) && (lng1 == lng2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lng1-lng2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
  }
  
 
  
}



    render() {
        return (
          <div  >
               
       
        <CurrentLocation
       
        centerAroundCurrentLocation
        google={this.props.google}
      >
      
      <Marker onClick={this.onMarkerClick} name={'current location'} 
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Go fast Dispose Site Estonia #1'}
          position={{
            lat:this.state.lat1 ,
            lng: this.state.lng1
        }}/>
        <Marker
          onClick={this.onMarkerClick}
          name={'Go fast Dispose Site Estonia #2'}
          position={{
            lat:this.state.lat2 ,
            lng: this.state.lng2
        }}/>
        <Marker
          onClick={this.onMarkerClick}
          name={'Go fast Dispose Site Stockholm'}
          position={{
            lat:this.state.lat3 ,
            lng: this.state.lng3
        }}/>
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
       
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </CurrentLocation>
        </div>

        );
    }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAhfcBMP5NxhOOpZei9uijhn2t_aIgyUnM',
})(MapDesign);