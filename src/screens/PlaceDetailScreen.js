import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

class PlaceDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: navigation.state.routeName,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="green"
        />
      ),
    };
  };

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
          <Button
            title="Delete"
            color="#d35400"
            onPress={this.props.onItemDeleted}
          />
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

export default PlaceDetailScreen;
