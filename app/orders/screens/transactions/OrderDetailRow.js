import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
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
  increment(id,count,price,total) {
    let subtotal=0
      let items = this.props.order;
      
     // subtotal=subtotal + items[id].qty * price

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
    
    decrement(id,count,price,total) {
      let subtotal=0
      if (this.props.order && this.props.order.length > 0) {
      let items = this.props.order;
      items[id].qty = Number(items[id].qty) - 1 
      items[id].total =  items[id].qty * price 

      console.log('ite',items)
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
      console.log('detail',this.props.order)
      if (this.props.order && this.props.order.length > 0) {
       
        return(
        
        this.props.order.map((item,index)=>
          { 
            
                return (
                  <ListItem key={index} >
                      <View style={{flexDirection: 'row',flex:0.2, justifyContent: 'flex-start' }}>
                          <CheckBox/>
                      </View>    
                      <Body style={{flexDirection: 'row'}}>
                          <View style={{flexDirection: 'column', justifyContent: 'flex-start', flex:2}}>
                              <Text style={styles.item}>{item.name}</Text>
                              <Text style={styles.item} note></Text>
                          </View>
                          <View style={{flexDirection: 'row',flex:1.5, justifyContent: 'flex-end' }}>
                              <Increment increment={()=> {this.increment(index,item.qty,item.price,item.Total)}} />
                              <Text style={styles.item}>{item.qty}</Text>
                              <Decrement decrement={()=>{this.decrement(index,item.qty,item.price,item.Total)}} />
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
  