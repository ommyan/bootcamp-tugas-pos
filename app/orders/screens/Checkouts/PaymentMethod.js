import React, { Component } from 'react'
import {View,Text, StyleSheet,TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Container,Content,Col,Row, Left,Body,Right} from 'native-base'
import GridView from 'react-native-super-grid';

import Numpad from '../../../components/numpad'

export default class PaymentMethod extends Component {
    state = {  }
   
    render() {
        return (
          <View><Numpad /></View>
        )
    }
}

const styles = StyleSheet.create({
   
   
  });
