import React, { useState } from "react";
// import GoogleMapReact from 'google-map-react'
import { LoadScript } from "@react-google-maps/api";
import { useJsApiLoader } from "@react-google-maps/api";

import { Autocomplete } from "@react-google-maps/api";
import { LIBRARIES } from "../utils/utils";

function Autocompletor() {
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState();
  const librariez = LIBRARIES;
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {

    setPlace({
      address: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // setCoordinates({ lat, lng });
  };

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        libraries={librariez}
      >
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div width={"35vw"} shadow="lg">
            <div
              pointerEvents={"none"}
              children={<div color="gray" fontSize={20} />}
            />

            <input
              type={"text"}
              placeholder="Search Google Map..."
              variant={"filled"}
              fontSize={18}
              bg={"white"}
              color={"gray.700"}
              _hover={{ bg: "whiteAlpha.800" }}
              _focus={{ bg: "whiteAlpha.800" }}
              _placeholder={{ color: "gray.700" }}
            />
          </div>
        </Autocomplete>
      </LoadScript>
      <h1>{JSON.stringify(place)}</h1>
    </div>
  );
}

export default Autocompletor;
