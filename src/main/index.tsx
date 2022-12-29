import {AppRegistry} from "react-native";

import {withKnobs} from "@storybook/addon-knobs";
import {addDecorator, configure, getStorybookUI} from "@storybook/react-native";

addDecorator(withKnobs);

configure(() => {
  // eslint-disable-next-line global-require
  require("./stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  // eslint-disable-next-line global-require
  asyncStorage: require("@react-native-async-storage/async-storage").default,
});

export const Main = () => <StorybookUIRoot />;

AppRegistry.registerComponent("ReactNativeExplorer", () => StorybookUIRoot);
