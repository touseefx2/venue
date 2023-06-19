import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import MapView from "../MapView";

export default function VenueCard({ item, index }) {
  const markerPosition = {
    latitude: item.lat,
    longitude: item.lon,
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.thumbnail }} style={styles.Image} />
        </View>
        <View style={{ width: "65%", flex: 1 }}>
          <MapView markerPosition={markerPosition} />
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberTitle}>{index + 1}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{item.name || "Venue"}</Text>
        <Text style={styles.subTitle}>{item.address || "Venue"}</Text>
      </ScrollView>
    </View>
  );
}
