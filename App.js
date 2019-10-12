import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Main from "./src/main";
import store from "./src/config/store";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
