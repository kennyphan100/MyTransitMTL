import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  function handleMapPress(event) {
    const { coordinate } = event.nativeEvent;
    setMarkerCoordinates(coordinate);
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 45.497412,
        longitude: -73.578035,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      onPress={handleMapPress}
    >
      {markerCoordinates && (
        <Marker
          coordinate={markerCoordinates}
          title={"Selected Location"}
          pinColor={"blue"}
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '66.67%',
  },
});
