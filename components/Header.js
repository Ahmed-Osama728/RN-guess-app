import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyText from './BodyText';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <BodyText style={styles.headerTitle}>{title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
