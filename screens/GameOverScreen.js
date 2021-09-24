import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

import colors from '../constants/colors';
const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={30}>
        <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/success.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <BodyText style={styles.resultText}>
            <Text>
              Your Phone needed{' '}
              <Text style={styles.hightLight}>{props.roundsNumber}</Text> rounds
              to guess your number{' '}
              <Text style={styles.hightLight}>{props.userNumber}</Text>
            </Text>
          </BodyText>
          <Button title="Restart Game" onPress={props.onRestart} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height * 0.05
  },
  resultText: {
    marginHorizontal: 10,
    textAlign: 'center',
    width: '80%',
    marginBottom: Dimensions.get('window').height * 0.025
  },
  hightLight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
