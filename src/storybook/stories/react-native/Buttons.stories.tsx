import React from "react";

import {Button, StyleSheet, Text, View} from "react-native";

import {storiesOf} from "@storybook/react-native";

import {ExploreButton} from "../../../common/ExploreButton";

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: "1%",
    color: "black",
    // paddingHorizontal: 8,
  },
  view: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#61D9FB",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const Seperator = () => <View style={styles.seperator} />;

storiesOf("react-native", module)
  .addDecorator(getStory => <View style={styles.view}>{getStory()}</View>)
  .add("Buttons", () => (
    <View>
      <Text style={styles.title}>Button</Text>
      <ExploreButton />
      <Seperator />
      <Text style={styles.title}>Link</Text>
      <Button
        onPress={() => {
          console.log("clicked");
        }}
        title="Click Me"
      />
      <Seperator />
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button title="Press me" disabled onPress={() => {}} />
    </View>
  ));
