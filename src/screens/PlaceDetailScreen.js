import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image, Text, Button, StyleSheet, TouchableOpasity } from 'react-native';
import { Icon } from "react-native-elements";
import {connect} from 'react-redux';
import {deletePlace} from '../store/actions/index';

class PlaceDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // const menu = <Icon name='menu' color='white' size={30}/>;
    return {
      title: navigation.state.routeName,
      // headerRight: (
      //   <Text onPress={() => navigation.navigate('Drawer')}>{menu}</Text>
      // ),
    };
  };

  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.navigation.getParam('selectedPlace').key);
    this.props.navigation.pop();
  }

  render() {
    const selectedPlace = this.props.navigation.getParam('selectedPlace');
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={selectedPlace.image}
            resizeMode="cover"
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{selectedPlace.name}</Text>
        </View>
        <View>
          <Icon name='delete' color='red' size={40} onPress={this.placeDeleteHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22,
  },
  placeImage: {
    width: '100%',
    height: 300,
  },
  placeName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const dispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  }
}

export default connect(null, dispatchToProps)(PlaceDetailScreen);