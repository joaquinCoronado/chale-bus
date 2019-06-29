import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Alert,
  AsyncStorage
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import ChalesInput from "../../components/chalesInput";
import ChalesApi from "../../api/chalesApi";

var { width } = Dimensions.get("window");

const saveToken = async token => {
  await AsyncStorage.setItem("token", token);
};

export default class Login extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  onchangeNameHandler = text => {
    this.setState({ name: text });
  };

  onchangeEmailHandler = text => {
    this.setState({ email: text });
  };

  onchangePasswordHandler = text => {
    this.setState({ password: text });
  };

  render() {
    let { name, email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* TEXT INPUTS */}
        <View style={styles.textInputContainer}>
          <ChalesInput
            label="Nombre"
            placeholder="Nombre"
            onChangeText={this.onchangeNameHandler}
            value={name}
          />

          <ChalesInput
            label="Email"
            placeholder="Email"
            onChangeText={this.onchangeEmailHandler}
            value={email}
          />

          <ChalesInput
            label="Password"
            placeholder="Password"
            onChangeText={this.onchangePasswordHandler}
            value={password}
            password={true}
          />
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => {
              Alert.alert(
                "Afuevo",
                `email: ${email}, pass: ${password}, name: ${name}`
              );
              this.setState({ email: "", password: "", name: "" });
              ChalesApi.createAcount(email, password, name)
                .then(json => {
                  //Alert.alert("response", json);
                  saveToken(json.id);
                })
                .catch(err => {
                  Alert.alert("error", err);
                });
            }}
            title="Crear Cuenta"
            type="outline"
            style={styles.button}
          />

          <Button
            onPress={() => {
              Actions.pop();
            }}
            title="Regresar"
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
    backgroundColor: "#F5FCFF"
  },

  textInputContainer: {
    flex: 8,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
    paddingLeft: 25
  },

  buttonsContainer: {
    flex: 2,
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 25,
    paddingLeft: 25
  },
  button: {
    marginBottom: 10,
    width: "100%"
  },
  input: {
    width: width,
    marginTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  inputText: {
    marginLeft: 10
  }
});
