import React, { Component } from 'react'
import { View,StyleSheet, FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button, CheckBox } from 'native-base';
import {connect} from 'react-redux'

import {numberThousand} from '../../../components/Util/Index';
import {CreateOrder} from '../../orderAction';
import { CreateTransaction } from '../../transactionAction';

class OrderDetailRow extends Component {
  constructor(props){
    super(props)
    this.state = { 
        //Count: 0,
        orders: props.order,
        trans:[],
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
      let items = this.props.order;
      items[id].qty = Number(items[id].qty) + 1 
      items[id].total =  items[id].qty * price 
      
      for (let index = 0; index < items.length; index++) {
        subtotal=subtotal + items[index].total
      }

      let trans =  this.props.tran
     
      trans[0].total=subtotal     
      this.forceUpdate();
      this.props.dispatch(CreateOrder(items))
      this.props.dispatch(CreateTransaction(trans))
   
  }
    
    decrement(id,idp,count,price,total) {
      let subtotal=0
      if (this.props.order && this.props.order.length > 0) {
      let items = this.props.order;
      items[id].qty = Number(items[id].qty) - 1 
      items[id].total =  items[id].qty * price 
      
      if (items[id].qty == 0){
        items.splice(id,1)
      } 
      console.log('items',items)
      for (let index = 0; index < items.length; index++) {
        subtotal=subtotal + items[index].total
      }
      let trans =  this.props.tran
      trans[0].total=subtotal    

      this.forceUpdate();
      this.props.dispatch(CreateOrder(items))
      this.props.dispatch(CreateTransaction(trans))
    }
    }

    render() {
      if (this.props.order && this.props.order.length > 0) {
        return(
          <FlatList
          data={this.props.order}
          renderItem={({item}) => <ListItem title={item.name} />}
        />
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
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(OrderDetailRow)
  