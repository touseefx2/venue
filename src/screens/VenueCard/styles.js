import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import theme from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: theme.window.Width,
    marginTop: responsiveHeight(5),
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    height: responsiveHeight(28),
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 5,
  },
  imageContainer: {
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 2,
    borderColor: "green",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  numberContainer: {
    backgroundColor: "green",
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -30,
  },
  numberTitle: {
    fontSize: responsiveFontSize(1.7),
    color: "white",
    fontWeight: "900",
  },
  scrollContainer: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
    paddingVerticalVertical: responsiveHeight(3),
    marginTop: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: "green",
    fontWeight: "900",
    marginBottom: 3,
  },
  subTitle: {
    fontSize: responsiveFontSize(1.8),
    color: "black",
  },
});
