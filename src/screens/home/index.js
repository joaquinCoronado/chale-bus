import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Avatar, Button } from "react-native-elements";

var { height, width } = Dimensions.get("window");

getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token !== null) {
      //Alert.alert("token", token);
    }
  } catch (error) {
    console.warn(error);
  }
};

onPresProfileImage = () => {
  // Alert.alert("perfil", "esta mierda te va a llevar al perfil de usuario");
  Actions.profile()
};

export default class Home extends Component {
  render() {
    getToken();

    return (
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.imageName}
            onPress={onPresProfileImage}
          >
            <Avatar
              size="medium"
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
            />
            <Text>Joaquín Coronado Ramírez</Text>
          </TouchableOpacity>
        </View>

        {/* BODY */}
        <View style={styles.bodyContainer}>
          <Text>Home</Text>
        </View>

        {/* PANIC BOTTON */}
        <View style={styles.panicBottonContainer}>
          <Button title="ME ESTAN ASALTANDO ALV!!!" buttonStyle={styles.button}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },

  headerContainer: {
    flex: 0.8,
    width: width,
    height: (height / 10) * 2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15
  },
  imageName: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },

  bodyContainer: {
    flex: 8,
    width: width,
    height: (height / 10) * 6,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center"
  },

  panicBottonContainer: {
    flex: .8,
    width: width,
    height: (height / 10) * 2,
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    backgroundColor: "red",
    width: "100%"
  }
});
