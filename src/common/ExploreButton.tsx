import {StyleSheet, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
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

export const ExploreButton = () => (
  <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>Click me</Text>
  </TouchableOpacity>
);
