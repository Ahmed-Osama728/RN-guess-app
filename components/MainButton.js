import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import colors from '../constants/colors';

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if ((Platform.OS = 'android')) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.5} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans'
  }
});
export default MainButton;
