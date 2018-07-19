import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ButtonWithBG from '../UI/ButtonWithBG';
import imagePlaceholder from '../../assets/pic_1.jpg';

class PickImage extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceholder} style={styles.previewImage}/>
        </View>
        <View style={styles.button}>
          <ButtonWithBG backgroundColor='#29aaf4'
                        onPress={()=>alert('Pick Image')}
          >
            Pick Image
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
  previewImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    margin: 8,
  }
});

export default PickImage;