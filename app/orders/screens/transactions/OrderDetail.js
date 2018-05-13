import React, { Component } from 'react';
import { StyleSheet,View, ScrollView, FlatList } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,CheckBox, Button,Row,Col } from 'native-base';

import OrderDetailRow from './OrderDetailRow'
import numberThousand from '../../../components/Util/Index'

export default class OrderDetail extends Component {
  constructor(props){
      super(props);
      
  }
  render() {
    return (
        <Container >
        <Content >
          <OrderDetailRow /> 
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    },
    item: {
        fontSize: 12
      },
});

