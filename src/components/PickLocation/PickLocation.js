import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import ButtonWithBG from '../UI/ButtonWithBG';
import imagePlaceholder from '../../assets/pic_1.jpg';

class PickLocation extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <ButtonWithBG backgroundColor='#29aaf4'
                        onPress={()=>alert('Pick Location')}
          >
          Locate Me
          </ButtonWithBG>
        </View>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    backgroundColor: '#ccc',
    width: '80%',
    height: 200,
  },
  button: {
    margin: 8,
  }
});

export default PickLocation;