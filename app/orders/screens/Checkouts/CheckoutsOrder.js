import React, { Component } from 'react';
import { StyleSheet,Dimensions, View ,FlatList, Image, Modal} from 'react-native';
import { Container,Content, Drawer, Header, List, ListItem, Left,CheckBox,
     Body, Right, Thumbnail, Text, Button, Row  } from 'native-base';
import {NavigationActions} from 'react-navigation';
import { connect } from 'react-redux';

import GridView from 'react-native-super-grid';
import CheckoutCalculate from './CheckoutCalculate'
import CheckoutsDetail from './CheckoutsDetail'
import numberThousand from '../../../components/Util/Index'

const {width} = Dimensions.get('window');

const frameWidth = width;
const columnWidth = frameWidth/ 6;

let itemTran=[];
let items=[];

class CheckoutsOrder extends Component {
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
                <Row style={{ flex: 0.25}}>
                  <CheckoutCalculate tran={this.props.tran} payment={this.props.payment} />
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

  const mapStateToProps = (state)=>({
    transactionReducer: state.transactionReducer,
    orderReducer: state.orderReducer
  })
  export default connect(mapStateToProps)(CheckoutsOrder)