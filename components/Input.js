import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = (props) => {
  return (
    <View style={{ ...styles.input, ...props.style }}>
      <TextInput {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 30,
    marginVertical: 10,
    textAlign: 'center'
  }
});

export default Input;
