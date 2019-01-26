import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
var SendIntentAndroid = require("react-native-send-intent");
import SplashScreen from "react-native-splash-screen";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/AntDesign";
var SendIntentAndroid = require("react-native-send-intent");

export class Intro extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      showOverlay: false
    };
  }
  componentDidMount() {
    setTimeout(function() { SplashScreen.hide(); }, 3000);
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      currentLocation => {
        console.log(currentLocation);
        this.setState({ currentLocation: currentLocation.coords });
      },
      err => console.log(err)
    );
  }
  myCustomMarkerView(currentLocation, imageUrl) {
    return (
      <Marker
        coordinate={currentLocation}
        onPress={() => {
          this.setState({ showOverlay: !this.state.showOverlay });
        }}
      >
        <Image source={imageUrl} style={{ height: 100, width: 100 }} />
      </Marker>
    );
  }

  renderBuildingInfo() {
    return (
      <View style={styles.innerOverlay}>
        <Image
          source={require("../assets/AASTL.png")}
          style={styles.renderBuildingInfoImage}
        />
        <View style={{ width: width - 100, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "700", color: "black" }}>
            {"arab academy for science and technology".toLocaleUpperCase()}{" "}
          </Text>
          <Text
            style={{ fontSize: 10, fontWeight: "300", color: "grey" }}
            numberOfLines={2}
          >
            Over five years (from 1991 to 1996), the educational and maritime
            training services were funded by the Egyptian Ministry of Transport.
            Consequently, in 1992, the AASTMT was granted the most modern
            training ship, "Aida 4", as a donation from the Japanese government.
            In 1994 the AASTMT was awarded the most modern simulator in the
            world (completed in two phases) from the USA administration.
            Cooperation with the American counterpart continued to found an
            advanced technology center. Scholarships have exceeded 120,000 for
            students from 58 countries.
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10
            }}
          >
            <View>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  SendIntentAndroid.openApp("com.Abdullah.BuildingGVR").then(
                    wasOpened => {
                      console.log(wasOpened);
                    }
                  );
                }}
              >
                <Icon name="logout" size={40} color="#3FB97C" />
              </TouchableOpacity>
              <Text>Outside View</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => {
                  SendIntentAndroid.openApp("com.Abdullah.FloorGVR").then(
                    wasOpened => {
                      console.log(wasOpened);
                    }
                  );
                }}
              >
                <Icon name="login" size={40} color="#3FB97C" />
              </TouchableOpacity>
              <Text>Inner View</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state.currentLocation.latitude,
            longitude: this.state.currentLocation.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          {this.myCustomMarkerView(
            this.state.currentLocation,
            require("../assets/trypin.png")
          )}
        </MapView>
        {this.state.showOverlay ? (
          <View style={styles.overlay}>{this.renderBuildingInfo()}</View>
        ) : null}
      </View>
    );
  }
}
let { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: height * 0.3,
    width: "100%"
  },
  innerOverlay: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    borderTopWidth: 4,
    borderTopColor: "#3FB97C"
  },
  renderBuildingInfoImage: {
    height: 100,
    width: 100,
    marginBottom: 40,
    alignSelf: "center"
  }
});
