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
   

    componentWillMount(){
      //  this.props.dispatch(getOrder())
     //   this.props.dispatch(getTransaction())
     if (this.props.transactionReducer.transactions.length >0 ){
        this.props.transactionReducer.transactions.map(item=> {
            subtotal = item.total
            }) 
        } 

     }   
        
    render()
    {
        return(
            <Container>
            <Content>
                <Row style={{flex:1, padding:20, justifyContent: 'space-between'}}>
                    <Col style={{flex:1,marginRight: 20, padding:5,marginBottom: 80}}>
                        <View style={{padding: 10}}>
                           
                            <CheckoutsOrder navigation={this.props.navigation} order={this.props.orderReducer.orders} tran={this.props.transactionReducer.transactions} payment={this.props.transactionReducer.payments}/>
                        </View>
                    </Col>
                   
                    <Col style={{flex:1, padding:5,marginBottom: 80}}>
                            <View style={{padding: 10}}>
                           
                            <PaymentMethod subtotal={subtotal}/>
                        </View>
                    </Col>
                </Row>
            </Content>  
            </Container>   
        )
    }
}


const mapStateToProps = (state)=>({
    transactionReducer: state.transactionReducer,
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(Checkouts)
