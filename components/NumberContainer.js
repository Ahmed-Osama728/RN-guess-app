import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 22,
    color: colors.accent
  }
});

export default NumberContainer;
