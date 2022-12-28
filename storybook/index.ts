import {AppRegistry} from 'react-native';

import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, configure, getStorybookUI} from '@storybook/react-native';

addDecorator(withKnobs);

configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

export const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('ReactNativeExplorer', () => StorybookUIRoot);
