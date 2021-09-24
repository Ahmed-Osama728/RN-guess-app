import React, { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import colors from '../constants/colors';
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNum, setSelectedNum] = useState();
  const [confirmedNum, setConfirmedNum] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4
  );

  const numInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmedNum(false);
  };

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredValue);

    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert('Number is not Valid', 'Number should be between 0 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler
        }
      ]);
      return;
    }

    setConfirmedNum(true);
    setSelectedNum(chosenNum);
    setEnteredValue('');
  };

  useEffect(() => {
    const updateLayout = () => {
      Dimensions.addEventListener(
        'change',
        setButtonWidth(Dimensions.get('window').width / 4)
      );
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  let confirmedOutput;

  if (confirmedNum) {
    confirmedOutput = (
      <Card>
        <View>
          <Text>You Selected</Text>
        </View>
        <NumberContainer>{selectedNum} </NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNum)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <TitleText style={styles.title}>Start A New Game!</TitleText>
          <Card style={styles.inputContainer}>
            <Text>Select A Number</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={{ width: buttonWidth }}>
                <Button
                  title="reset"
                  onPress={resetInputHandler}
                  color={colors.accent}
                ></Button>
              </View>
              <View style={{ width: buttonWidth }}>
                <Button
                  title="confirm"
                  onPress={confirmInputHandler}
                  color={colors.primary}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    marginVertical: 20,
    alignItems: 'center',
    width: '80%',
    maxWidth: '95%',
    minWidth: 300
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  /* button: {
    //width: '40%'
    width: Dimensions.get('window').width / 4
  },*/
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;
