import React, { useState } from "react";
// import GoogleMapReact from 'google-map-react'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";

import { LIBRARIES } from "../utils/utils";
import { Marker } from "@react-google-maps/api";
import { Circle } from "@react-google-maps/api";


const containerStyle = {
    width: "400px",
    height: "400px",
  };
  
  const center = {
    lat: 3.139003,
    lng: 101.686855,
  };
  
  const position = {
    lat: 37.772,
    lng: -122.214,
  };

  const options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 3000,
    zIndex: 1,
  };

  
function Mapper() {
  const librariez = LIBRARIES;

  const onUnmount = circle => {
    console.log('Circle onUnmount circle: ', circle)
  }
  

  return (
    <div className="">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        libraries={librariez}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={position} />
          <Circle
            // optional
            // onLoad={}
            // optional
            onUnmount={onUnmount}
            // required
            center={center}
            // required
            options={options}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Mapper;
