import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Alert
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import ChalesInput from "../../components/chalesInput";

var { width } = Dimensions.get("window");

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handletTest = () => {
    Alert.alert("test", "test");
  };

  onchangeEmailHandler = text => {
    this.setState({ email: text });
  };

  onChangePasswordHandler = text => {
    this.setState({ password: text });
  }

  render() {
    let { email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* TEXT INPUTS */}
        <View style={styles.textInputContainer}>
          <ChalesInput
            label="Email"
            placeholder="Email"
            onChangeText={this.onchangeEmailHandler}
            value={email}
          />

          <ChalesInput
            label="Password"
            placeholder="Password"
            onChangeText={this.onChangePasswordHandler}
            value={password}
            password={true}
          />
        </View>

        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <Button
            onPress={() => {
              //Alert.alert("Afuevo", `email: ${email}, pass: ${password}`);
              this.setState({ email: "", password: "" });

              Actions.home()
            }}
            title="Entrar"
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
