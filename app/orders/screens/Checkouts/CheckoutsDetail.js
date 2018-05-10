import React, { Component } from 'react';
import { StyleSheet,View, ScrollView, FlatList } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,CheckBox, Button,Row,Col } from 'native-base';

import CheckoutsDetailRow from './CheckoutDetailRow'
import numberThousand from '../../../components/Util/Index'

export default class CheckoutsDetail extends Component {
  constructor(props){
      super(props);
      
  }
  
  render() {
    console.log('prop',this.props.tran, this.props.order)
    return (
        <Container >
        <Content >
          <CheckoutsDetailRow order={this.props.order} tran={this.props.tran}/> 
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

