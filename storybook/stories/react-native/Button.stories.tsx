import React from 'react';

import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    p: '20px',
    flex: 1,
  },
  button: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#61D9FB',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

storiesOf('react-native', module)
  .addDecorator(getStory => <View style={styles.view}>{getStory()}</View>)
  .add('Button', () => (
    <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>Click me</Text>
    </TouchableOpacity>
  ))
  .add('Link', () => (
    <Button
      onPress={() => {
        console.log('clicked');
      }}
      title="Click Me"
    />
  ))
  .add('disabled', () => (
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button title="Press me" disabled onPress={() => {}} />
    </View>
  ));
