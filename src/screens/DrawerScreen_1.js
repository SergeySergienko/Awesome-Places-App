import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

export default class DrawerScreen_1 extends React.Component {
  static navigationOptions = {
    drawerIcon: <Icon name="list" />,
    drawerLabel: "LIST"
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name="ios-menu"
              onPress={() => this.props.navigation.toggleDrawer()}
            />
          </Left>
        </Header>
        <Content contentContainerStyle={styles.container}>
          <Text>Drawer Screen 1</Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
