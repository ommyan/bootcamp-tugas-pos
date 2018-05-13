import React, { Component } from 'react'
import {View,Text, StyleSheet,TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Container,Content,Col,Row, Left,Body,Right} from 'native-base'
import GridView from 'react-native-super-grid';

import Numpad from './Numpad'
export default class PaymentMethod extends Component {
    state = {  }
    
    render() {
      return (
              <Container>
                <Content>
                <View style={{flex: 1, marginTop: 10}}>
                 <Numpad />
                   
                </View>
                </Content>
              </Container>
               
        )
    }
}

const styles = StyleSheet.create({
   
   
  });
