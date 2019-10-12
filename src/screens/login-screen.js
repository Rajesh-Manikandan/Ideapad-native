import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import LoginForm from "../components/login-form";

const LoginScreen = props => {
  return (
    <View style={styles.container}>
      <Header title="Login" />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafbfc"
  }
});

export default LoginScreen;
