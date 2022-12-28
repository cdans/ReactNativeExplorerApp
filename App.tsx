import React, {ReactElement, useRef} from 'react';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {App} from './src/App';

const STORYBOOK_START = true;

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const storybookUI = useRef<ReactElement | null>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const Rest = () => {
    if (STORYBOOK_START) {
      // eslint-disable-next-line global-require
      const {StorybookUIRoot} = require('./storybook');

      storybookUI.current = <StorybookUIRoot />;
    }

    return STORYBOOK_START ? storybookUI.current : <App />;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Rest />
      </>
    </SafeAreaView>
  );
};
