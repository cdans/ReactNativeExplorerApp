import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

const style = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    p: '20px',
    flex: 1,
  },
});

storiesOf('Button', module)
  .addDecorator(getStory => <View style={style.view}>{getStory()}</View>)
  .add('button', () => (
    <Button
      onPress={() => {
        console.log('clicked');
      }}
      title="Click Me"
    />
  ));
