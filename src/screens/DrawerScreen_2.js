import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

export default class DrawerScreen_2 extends React.Component {
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
          <Text>Drawer Screen 2</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});