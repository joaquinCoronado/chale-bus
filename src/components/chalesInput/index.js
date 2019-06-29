import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import { Button, Input } from "react-native-elements";

var { width } = Dimensions.get("window");

const defaultHandler = () => {
  Alert.alert("input", "defatul input");
};

const chalesInput = (...props) => {
  let {
    label = "default value",
    placeholder = "default value",
    onChangeText = defaultHandler,
    value,
    password = false
  } = props[0];

  return (
    <View style={styles.input}>
      <Text style={styles.inputText}>{label}</Text>
      <Input
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        value={value}
        secureTextEntry={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 8,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 25,
    paddingLeft: 25
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

export default chalesInput;
