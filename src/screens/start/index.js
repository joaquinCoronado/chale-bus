import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button } from "react-native-elements";

var { width } = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* LOGO */}
        <View style={styles.logoContainter}>
          <View style={styles.circle}>
            <Text style={styles.title}>Chale Bus</Text>
          </View>
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => {
              // Actions.login();
              Actions.login()
            }}
            title="Ya tengo cuenta"
            type="outline"
            style={styles.button}
          />

          <Button
            onPress={() => {
              Actions.register();
            }}
            title="Registrarme"
            color="#841584"
            style={styles.button}
          />
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

  logoContainter: {
    flex: 8,

    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonsContainer: {
    flex: 2,
    justifyContent: "flex-start",
    width: "100%",
    paddingRight: 25,
    paddingLeft: 25
  },
  button: {
    marginBottom: 10,
    width: "100%"
  },
  title: {
    fontSize: 38,
    color: "#fff"
  },
  circle: {
    width: 500,
    backgroundColor: "#4288d1",
    width: width / 2,
    height: width / 2,
    borderRadius: width / 2 / 2,
    justifyContent: "center",
    alignItems: "center"
  }
});
