import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginScreen from "./screens/login-screen";

const Main = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Main;
