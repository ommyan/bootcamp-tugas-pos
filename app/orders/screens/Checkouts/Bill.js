import React, { Component } from 'react'
import {View,Text, StyleSheet,TouchableOpacity, TextInput, FlatList} from 'react-native'
import {Container,Content,Col,Row, Left,Body,Right} from 'native-base'
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';
import Moment from 'moment'


import { getOrder } from '../../orderAction'
import { getTransaction } from '../../transactionAction';
import { numberThousand } from '../../../components/Util/Index'

let item=[]
let trans=''
class Bill extends Component {
    state = {  }
   
    render() {
        //console.log('order',this.props.orderReducer.orders)
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                <Text style={{ fontSize: 12, alignItems: 'center' }}> OrdersID: {'001-002'} WaiterID: 001 Date:{Moment().format('D/MM/YYYY hh:mm')} </Text>
                </View>
                <View style={{flex: 1}} >
                {this.props.transactionReducer.transactions.map((item,index)=>
                    <Right key={index} style={{flexDirection: 'row',flex:1}}>
                          <Text style={{alignItems:'flex-end',justifyContent:'center',flex:1}}>Subtotal</Text>
                          <Text style={{fontSize: 40,justifyContent:'flex-end', alignItems:'flex-end',flex:1}}>{numberThousand(item.total)}</Text>
                    </Right>  
                  )}
                </View>
                <View style={{flex: 4,  backgroundColor: '#ffff'}} >
                    <Content>
                    <FlatList
                        data={this.props.orderReducer.orders}
                        renderItem={({item}) => 
                        (
                            <View style={{flexDirection: 'row'}}>
                                <Left style={{flex:2,alignItems:'flex-start'}}>
                                    <Text>{item.qty} @{numberThousand(item.price)}</Text>
                                </Left>
                                <Body style={{alignItems:'flex-start', flex:4}}>
                                    <Text>{item.name}</Text>
                                </Body>
                                <Right style={{alignItems:'flex-end', flex:1}}>
                                    <Text>{numberThousand(item.total)}</Text>
                                </Right>
                            </View>
                        )}
                    />
                    </Content>
                </View>
           
          </View>
        )
    }
}

const styles = StyleSheet.create({
   
    billContainer: {
      flexDirection: 'column',
      backgroundColor: '#ffff',
      marginRight: 10,
      flex:4
    },
    payContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
      },
  
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });
const mapStateToProps = (state)=>({
    transactionReducer: state.transactionReducer,
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(Bill)
