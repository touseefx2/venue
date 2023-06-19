import { useEffect, useCallback } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
  LogBox,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import VenueCard from "./src/screens/VenueCard";
import utils from "./src/utils";
import { Provider } from "mobx-react";
import { observer } from "mobx-react";
import store from "./src/store";
import NetInfo from "@react-native-community/netinfo";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
LogBox.ignoreAllLogs(true);

export default observer(App);

function App() {
  const { isInternet, setIsInternet } = store.General;
  const { attemptToGetVenueList, loader, venueData } = store.Venue;

  useEffect(() => {
    const unsubscribeNetinfo = NetInfo.addEventListener((state) => {
      setIsInternet(state.isConnected);
    });

    return () => {
      unsubscribeNetinfo();
    };
  }, []);

  useEffect(() => {
    if (isInternet) {
      attemptToGetVenueList();
    }
  }, [isInternet]);

  const onEndReach = () => {
    if (isInternet) {
      attemptToGetVenueList();
    } else {
      Alert.alert("", "Please Connect internet to load more  list");
    }
  };

  const renderVenue = useCallback(
    ({ item, index }) => <VenueCard item={item} index={index} />,
    []
  );

  return (
    <Provider {...store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <utils.Header />
        <View style={styles.container2}>
          {loader && (
            <ActivityIndicator
              style={{ paddingVertical: responsiveHeight(4) }}
              color={"green"}
              size={responsiveFontSize(4)}
            />
          )}
          {venueData.length > 0 && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingVertical: 15 }}
              pagingEnabled
              viewabilityConfig={{
                itemVisiblePercentThreshold: 100,
              }}
              nestedScrollEnabled
              renderItem={renderVenue}
              horizontal
              data={venueData}
              initialNumToRender={10}
              maxToRenderPerBatch={5}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              onEndReachedThreshold={0.5}
              onEndReached={onEndReach}
            />
          )}
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
