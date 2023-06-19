import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Header({}) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          Total Venues
        </Text>
        <Text style={[styles.title, { width: "30%", textAlign: "right" }]}>
          76
        </Text>
      </View>
    </View>
  );
}
