import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import DefaultInput from './UI/DefaultInput';
import HeadingText from './UI/HeadingText';
import MainText from './UI/MainText';
import ButtonWithBG from './UI/ButtonWithBG';
import backgroundImage from '../assets/pic_1.jpg';

export default class Auth extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          
            <MainText>
              <HeadingText>Please Log In</HeadingText>
            </MainText>
            <ButtonWithBG 
              backgroundColor='#29aaf4'
              onPress={()=>alert('Hello')}
              >
                Switch to Login
            </ButtonWithBG>
            <View style={styles.inputContainer}>
              <DefaultInput placeholder='Email' style={styles.input}/>
              <DefaultInput placeholder='Password' style={styles.input} />
              <DefaultInput placeholder='ConfirmPassword' style={styles.input} />
            </View>
            <ButtonWithBG
            backgroundColor='#ff00aa'
            onPress={() => navigate('Tabs')}>Submit
            </ButtonWithBG>
          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    // borderColor: 'red',
    height: 605,
  },
  backgroundImage: {
    width: '100%',
    flex: 1,
  },
  inputContainer: {
    width:'80%'
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#555',
    fontWeight: '800',
    color: 'red'
  }
});
