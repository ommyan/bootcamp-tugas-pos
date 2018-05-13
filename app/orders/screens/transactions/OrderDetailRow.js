import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button, CheckBox } from 'native-base';
import {connect} from 'react-redux'

import {numberThousand} from '../../../components/Util/Index';
import {CreateOrder,getOrder} from '../../orderAction';
import { CreateTransaction,getTransaction } from '../../transactionAction';

class OrderDetailRow extends Component {
  constructor(props){
    super(props)
    this.state = { 
        //Count: 0,
        orders: this.props.orderReducer.order,
        trans:[] //this.props.transactionReducer.transactions,
     }
  }
  sum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i].Total
    }
    return sum
}
  increment(id,idp,count,price,total) {
    let subtotal=0
      let items = this.props.orderReducer.orders;
      items[id].qty = Number(items[id].qty) + 1 
      items[id].total =  items[id].qty * price 
      
      for (let index = 0; index < items.length; index++) {
        subtotal=subtotal + items[index].total
      }

      let trans =  this.props.transactionReducer.transactions
     
      trans[0].total=subtotal     
      this.forceUpdate();
      this.props.dispatch(CreateOrder(items))
      this.props.dispatch(CreateTransaction(trans))
   
  }
    
    decrement(id,idp,count,price,total) {
      let subtotal=0
      if (this.props.orderReducer.orders && this.props.orderReducer.orders.length > 0) {
      let items = this.props.orderReducer.orders;
      items[id].qty = Number(items[id].qty) - 1 
      items[id].total =  items[id].qty * price 
      
      if (items[id].qty == 0){
        items.splice(id,1)
      } 
      console.log('items',items)
      for (let index = 0; index < items.length; index++) {
        subtotal=subtotal + items[index].total
      }
      let trans =  this.props.transactionReducer.transactions
      trans[0].total=subtotal    

      this.forceUpdate();
      this.props.dispatch(CreateOrder(items))
      this.props.dispatch(CreateTransaction(trans))
    }
    }

    render() {
      console.log('odr',this.props.orderReducer)
      if (this.props.orderReducer.orders && this.props.orderReducer.orders.length > 0) {
        return(
          
          this.props.orderReducer.orders.map((item,index)=>
          { 
                return (
                  <ListItem key={index}  >
                      <View style={{flexDirection: 'row',flex:0.2, justifyContent: 'flex-start' }}>
                          <CheckBox/>
                      </View>    
                      <Body style={{flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column', justifyContent: 'flex-start', flex:2}}>
                              <Text style={styles.item}>{item.name}</Text>
                              <Text style={styles.item} note></Text>
                          </View>
                          <View style={{flexDirection: 'row',flex:1.5, justifyContent: 'flex-end' }}>
                              <Increment increment={()=> {this.increment(index,item.id,item.qty,item.price,item.Total)}} />
                              <Text style={styles.item}>{item.qty}</Text>
                              <Decrement decrement={()=>{this.decrement(index,item.id,item.qty,item.price,item.Total)}} />
                          </View>
                      </Body>
                      <Right >
                          <Text style={styles.item}>{numberThousand(item.price)}</Text>
                          <Text style={styles.item} note>{numberThousand(item.qty * item.price)}</Text>
                      </Right>
                  </ListItem>
                )
              }
            )
          )
        } else {
          return(
            <ListItem>
              <Text>New Order</Text>
            </ListItem>
          )
        }   
  }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    },
    item: {
        fontSize: 11,
        justifyContent: "flex-end"
      },
    reverse:{
        flex: 1,
        transform: [
          { scaleY: -1 },
        ]
      }
});

class Increment extends React.Component {
    render() {
      return(
        <Button small rounded warning onPress={this.props.increment} ><Text>+</Text></Button>
      );
    }
  }
  
  class Decrement extends React.Component {
    render() {
      return(
        <Button small rounded warning onPress={this.props.decrement} ><Text>-</Text></Button>
      );
    }
  }

  const mapStateToProps = (state)=>({
    orderReducer: state.orderReducer,
    transactionReducer: state.transactionReducer,
    
  })
  
export default connect(mapStateToProps)(OrderDetailRow)
  