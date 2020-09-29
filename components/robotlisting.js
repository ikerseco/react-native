import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Nombre Robot</Text>
                <Text note>Info del robot</Text>
              </Body>
              <Right>
                <Text note>estado</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}