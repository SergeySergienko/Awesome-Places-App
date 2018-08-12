import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import { connect } from "react-redux";
import { authLogout } from "../store/actions/index";

class DrawerScreen_2 extends React.Component {
  static navigationOptions = {
    title: "Sign Out",
    drawerIcon: <Icon name="log-out" />,
    drawerLabel: "Sign Out"
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
          <Text>Sign Out</Text>
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

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DrawerScreen_2);
