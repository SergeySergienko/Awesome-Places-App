import React from "react";
import { StyleSheet } from "react-native";
// import { Icon } from "react-native-elements";
import {Icon, Button, Container, Header, Content, Left} from 'native-base';
import Auth from "../components/Auth";

export default class AuthScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    // const menu = <Icon name='menu' color='white' size={30}/>;
    return {
      title: navigation.state.routeName,
      // headerRight: (
      //   <Text onPress={() => navigation.navigate('Drawer')}>{menu}</Text>
      // ),
    };
  };

  render() {
    return(
      <Container>
          <Header>
            <Left>
              <Icon name='ios-menu'
                    onPress={()=>this.props.navigation.toggleDrawer()}
              />
            </Left>
          </Header>
          <Content style={styles.container}>
            <Auth navigation={this.props.navigation} />
          </Content>
        </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 2,
    borderColor: 'green',

  }
});