import React, { Component } from 'react';
import { TextInput, View, StyleSheet,  Dimensions,ListView, TouchableOpacity,FlatList,Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left,CheckBox,Button,
    Body, Right, Thumbnail, Text,Col,Row,Card,CardItem,Icon } from 'native-base';
import {connect} from 'react-redux'
import Moment from 'moment'

import Category from '../../products/screens/category/Category';
import SalesOrder from './transactions/SalesOrder';
import Calculate from './transactions/Calculate';
import { getOrder } from '../orderAction';
import { getTransaction } from '../transactionAction';


class Orders extends Component {
    constructor(props){
        super(props)
        this.state={
            order:[]
        }
        console.log('order',this.state.order)
    }
    componentWillMount(){
        this.props.dispatch(getOrder())
        this.props.dispatch(getTransaction())
        
        this.setState({
            order: this.props.orderReducer.orders
        })

      }
    render(){
        console.log('orderA',this.props.transactionReducer.transactions)
        return(
            <Container>
                <Row>
                    <Col style={{ flex:1 }}>
                    <Col>
                        <View style={ {flexDirection:'row', marginLeft: 5}}>
                        <Text style={{ fontSize: 12, alignItems: 'center' }}> OrdersID: {'001-002'} WaiterID: 001 Date:{Moment().format('D/MM/YYYY hh:mm')} </Text>

                        </View> 
                        <Row style={{flex:0.85}}>
                        <SalesOrder order={this.props.orderReducer.orders} tran={this.props.transactionReducer.transactions}/>
                        </Row>
                        
                    </Col>    
                    </Col>
                    <Col style={{ flex:1.5 }}>
                        <Category />                  
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
  
export default connect(mapStateToProps)(Orders)
