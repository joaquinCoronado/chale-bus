import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import { ListItem, Avatar } from "react-native-elements";

var { height, width } = Dimensions.get("window");

const list = [
  {
    title: "Personal Information",
    icon: "person"
  },
  {
    title: "Payments",
    icon: "attach-money"
  }
];

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.pictureContainer}>
          <Avatar
            size="xlarge"
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
            }}
            showEditButton
            onPress={() => console.log("Works!")}
            activeOpacity={0.5}
          />
        </View>
        <View style={styles.list}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              rightIcon={{ name: "keyboard-arrow-right" }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.9}
            />
          ))}
        </View>
        <View style={styles.list}>
          <ListItem
            key={"logout"}
            title={"Logout"}
            leftIcon={{ name: "exit-to-app" }}
            rightIcon={{ name: "keyboard-arrow-right" }}
            onPress={() => Actions.start()}
            activeOpacity={0.9}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  list: {
    width: width,
    marginBottom: 20
  },
  pictureContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20
  }
});
