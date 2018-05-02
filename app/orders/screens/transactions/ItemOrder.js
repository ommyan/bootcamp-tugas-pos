import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button, CheckBox } from 'native-base';
import { View } from 'react-native'
export default class ItemOrder extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left style={flex=0.2}>
                <View style={{flexDirection: 'row', justifyContent: 'center' }}>
                    <CheckBox/>
                </View>    
              </Left>
              <Body style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', flex:2}}>
                    <Text >Foods Foods Foods </Text>
                    <Text note>Pedes</Text>
                </View>
                <View style={{flexDirection: 'row',flex:1.5, justifyContent: 'center' }}>
                <Button round small warning><Text>+</Text></Button>
                <Text note>1</Text>
                <Button round small warning><Text>-</Text></Button>
                </View>
              </Body>
              <Right style={flex=0.25}>
              <Text >25.500</Text>
              <Text >250.500</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
