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
    SplashScreen.hide();
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
        <View>
          <Text style={{fontSize:10,fontWeight:'700',color:'black'}}>{"arab academy for science and technology".toLocaleUpperCase()} </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon/>
          </TouchableOpacity>
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
