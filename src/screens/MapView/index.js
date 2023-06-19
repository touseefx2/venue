import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { styles } from "./styles";
import theme from "../../theme";

export default function MapShow({ markerPosition }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (markerPosition) {
      markerPosition.latitudeDelta =
        theme.window.LATITUDE_DELTA * Number(10 / 1000);
      markerPosition.longitudeDelta =
        theme.window.LONGITUDE_DELTA * Number(10 / 1000);
      mapRef?.current?.animateToRegion(markerPosition, 700);
    }
  }, [markerPosition]);

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: markerPosition.latitude,
        longitude: markerPosition.longitude,
        latitudeDelta: theme.window.LATITUDE_DELTA,
        longitudeDelta: theme.window.LONGITUDE_DELTA,
      }}
      showsBuildings={true}
      zoomEnabled={true}
      showsCompass={false}
    >
      <MarkerPosition position={markerPosition} />
    </MapView>
  );
}

function MarkerPosition({ position }) {
  return (
    <Marker
      identifier="Venue Location"
      coordinate={position}
      pinColor={"red"}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.markerCircle} />
      <View style={styles.markerLine} />
    </Marker>
  );
}
