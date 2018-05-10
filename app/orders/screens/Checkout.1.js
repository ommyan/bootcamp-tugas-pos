import React, { Component } from 'react';
import { TextInput, Modal, View, StyleSheet,  Dimensions,ListView, TouchableOpacity,FlatList,Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left,CheckBox,Button,
    Body, Right, Thumbnail, Text,Col,Row,Card,CardItem,Icon } from 'native-base';
import {connect} from 'react-redux'
import Moment from 'moment'

import CheckoutsOrder from './Checkouts/CheckoutsOrder';
import { getOrder } from '../orderAction';
import { getTransaction } from '../transactionAction';
import PaymentMethod from './Checkouts/PaymentMethod';
import Paid from './Checkouts/Paid'

let subtotal=0
class Checkouts extends Component {
    constructor(props){
        super(props)
        this.state={
            order:[],
            modalVisible: false,
        }
       
    }
   

    componentDidMount(){
     //   this.props.dispatch(getOrder())
     //   this.props.dispatch(getTransaction())
        
        this.props.transactionReducer.transactions.map(item=> {
            subtotal = item.total
            }) 
        } 
    render()
    {
        return(
            <Container>
              
              <Row>
                    <Col style={{ flex: 1 }}>
                    <Col>
                        <View style={ {flexDirection:'row', marginLeft: 5}}>
                        <Text style={{ fontSize: 12, alignItems: 'center' }}> OrdersID: {'001-002'} WaiterID: 001 Date:{Moment().format('D/MM/YYYY hh:mm')} </Text>
                        </View> 
                        <Row style={{flex:0.85}}>
                            <CheckoutsOrder navigation={this.props.navigation} order={this.props.orderReducer.orders} tran={this.props.transactionReducer.transactions}/>
                        </Row>
                    </Col>    
                    </Col>
                    <Col style={{ flex: 1, flexDirection: 'row' }}>
                       <Content style={{ flex: 0.75 }}>
                       <PaymentMethod subtotal={subtotal}/>
                        </Content>
                    </Col>
                    
                </Row>
             
            </Container>   
        )
    }
}


const mapStateToProps = (state)=>({
    transactionReducer: state.transactionReducer,
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(Checkouts)
