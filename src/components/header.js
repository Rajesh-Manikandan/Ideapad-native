import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header as HeaderRN } from "react-native-elements";

const Header = props => {
  return (
    <View style={styles.container}>
      <HeaderRN centerComponent={{ text: props.title, style: styles.title }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafbfc"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Header;
