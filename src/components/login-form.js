import React from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Input, Button } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { login, inputChange } from "../actions/auth-action";

const LoginForm = () => {
  const { email, password, isLoading, error, user } = useSelector(
    state => state.auth
  );
  const dispatch = useDispatch();

  const renderButton = () => {
    if (isLoading) {
      return <ActivityIndicator />;
    } else {
      return (
        <Button
          title="Login"
          containerStyle={styles.fieldContainer}
          onPress={() => dispatch(login(email, password))}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        containerStyle={styles.fieldContainer}
        value={email}
        onChangeText={text => dispatch(inputChange("email", text))}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => dispatch(inputChange("password", text))}
        containerStyle={styles.fieldContainer}
      />
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10
  },
  fieldContainer: {
    marginVertical: 10
  }
});

export default LoginForm;
