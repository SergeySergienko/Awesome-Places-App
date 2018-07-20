import React from "react";
import { DrawerItems } from "react-navigation";
import { View, Text, StyleSheet, Image } from "react-native";
import { Container, Content, Header, Body, Icon } from "native-base";
import drawerImage from "../../../src/assets/flower.png";

const CustomDrawer = props => (
  <Container>
    <Header style={{ height: 100, backgroundColor: "#ccf" }}>
      <Body>
        <Image style={styles.drawerImage} source={drawerImage} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  drawerImage: {
    width: 100,
    height: 100
  }
});

export default CustomDrawer;
