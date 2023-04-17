import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import busImage from '../assets/bus.png';
import metroImage from '../assets/metro.png';

const busData = [
  {
    id: 1,
    image: metroImage,
    number: 'Honoré-Beaugrand',
    intersection: 'Guy-Concordia',
    time: '2 min',
  },
  {
    id: 2,
    image: metroImage,
    number: 'Côte-Vertu',
    intersection: 'Lucien-l\'Allier',
    time: '1 min',
  },
  {
    id: 3,
    image: busImage,
    number: '15 E Sainte-Catherine',
    intersection: 'Sainte-Catherine / Guy',
    time: '6 min',
  },
  {
    id: 4,
    image: busImage,
    number: '66 N The Boulevard',
    intersection: 'Saint-Mathieu / Sainte Catherine',
    time: '15 min',
  },
  {
    id: 5,
    image: busImage,
    number: '166 N Queen-Mary',
    intersection: 'Station Guy-Concordia',
    time: '20 min',
  },
];

export default function Map() {
 const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 45.497412,
    longitude: -73.578035,
  });


  function handleMapPress(event) {
    const { coordinate } = event.nativeEvent;
    setMarkerCoordinates(coordinate);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.497412,
          longitude: -73.578035,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
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
      <ScrollView style={styles.busList}>
        {busData.map((bus, index) => (
          <View
            key={bus.id}
            style={[
              styles.busItem,
              index === 0 ? { backgroundColor: 'green' } : index === 1 ? { backgroundColor: 'orange' } : null,
            ]}
          >
            <Image source={bus.image} style={{ width: 50, height: 50, marginRight: 10 }} />
            <View>
              <Text style={styles.busNumber}>{bus.number}</Text>
              <Text style={styles.busIntersection}>{bus.intersection}</Text>
            </View>
            <Text style={styles.busTime}>{bus.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2,
  },
  busList: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%',
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  busItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  busNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
  busIntersection: {
    fontSize: 14,
    marginRight: 10,
    color: '#555',
  },
  busTime: {
    fontSize: 18,
    marginLeft: 'auto',
  },
});
