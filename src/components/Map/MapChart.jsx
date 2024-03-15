import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Map, { Popup, Marker } from "react-map-gl";
import pin from "./pin.svg";

const MapChart = ({ user }) => {
  const mapRef = useRef();

  console.log(user.address.coordinates.lat);
  console.log(user.address.coordinates.lng);

  const onLoad = (e) => {
    if (mapRef.current) {
      const pinImage = new Image();
      pinImage.onload = () => {
        if (!mapRef.current.hasImage("pin")) {
          mapRef.current.addImage("pin", pinImage, { sdf: true });
        }
      };
      pinImage.src = pin;
    }
  };

  return (
    <div className="mapbox">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYWRpdGh5YTk1IiwiYSI6ImNscGsxMWtxYjA1czAyaXA3MndsNjViaGkifQ.ce8RjQ_84kY6y2Lhn6gA9w"
        initialViewState={{
          longitude: user?.address?.coordinates?.lng,
          latitude: user?.address?.coordinates?.lat,
          zoom: 12,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        ref={mapRef}
        onLoad={onLoad}
      >
        <Marker
          longitude={user?.address?.coordinates?.lng}
          latitude={user?.address?.coordinates?.lat}
          anchor="bottom"
        >
          <img src={pin} className="" />
        </Marker>
      </Map>
    </div>
  );
};

export default MapChart;
