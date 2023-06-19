import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "green",
    height: responsiveHeight(12),
    justifyContent: "flex-end",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    color: "white",
    fontWeight: "900",
    width: "65%",
  },
});
