import React from 'react';
import { StyleSheet, Text } from 'react-native';

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.bodyText, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans'
  }
});

export default BodyText;
