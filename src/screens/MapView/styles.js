import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerCircle: {
    backgroundColor: "red",
    width: responsiveFontSize(2),
    height: responsiveFontSize(2),
    borderRadius: responsiveFontSize(2) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  markerLine: {
    height: responsiveHeight(1.5),
    width: 4,
    backgroundColor: "red",
    borderRadius: 15,
    top: 1,
  },
});
