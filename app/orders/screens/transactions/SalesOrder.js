import React, { Component } from 'react';
import { StyleSheet,Dimensions, View ,FlatList, Image, Modal} from 'react-native';
import { Container,Content, Drawer, Header, List, ListItem, Left,CheckBox,
     Body, Right, Thumbnail, Text, Button, Row  } from 'native-base';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';

import GridView from 'react-native-super-grid';
import Calculate from './Calculate'
import OrderDetail from './OrderDetail'
import numberThousand from '../../../components/Util/Index'
import Payment from '../transactions/Payment'




const {width} = Dimensions.get('window');

const frameWidth = width;
const columnWidth = frameWidth/ 6;
let itemTran=[];
let items=[];
export default class SalesOrder extends Component {
    constructor(props) {
            super(props);
            this.state={
            itemTran:[],
            items:[],
            modalVisible: false,
            }
    }
    
    render() {
            return (
                <Container style={styles.container}>    
                <Row style={{ flex: 0.50}}>
                <Content>
                  <OrderDetail/>
                </Content>
                </Row>
                <Row style={{ flex: 0.25}}>
                  <Calculate tran={this.props.tran} />
                </Row>   
                <Row style={styles.button}>
                <Button success small><Text>Pending</Text></Button>
                <Button danger small><Text>Cancel</Text></Button>
                <Button info small
                onPress={()=>{this.props.navigation.navigate('Checkout')}}>
                <Text>Checkout</Text></Button> 
                </Row>
                              
            </Container>                                
             
            );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    },
    button: {
      flexDirection: 'row',
      flex: 0.25,
      justifyContent: 'center',
      alignItems:'center'
    }
  });
