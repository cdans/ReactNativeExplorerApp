import React from "react";

import {SafeAreaView, StatusBar, useColorScheme} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

import {Main} from "@main";

export default () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Main />
      </>
    </SafeAreaView>
  );
};
