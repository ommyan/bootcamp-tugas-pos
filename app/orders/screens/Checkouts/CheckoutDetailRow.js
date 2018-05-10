import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button, CheckBox } from 'native-base';
import {connect} from 'react-redux'

import {numberThousand} from '../../../components/Util/Index';
import {CreateOrder} from '../../orderAction';
import { CreateTransaction } from '../../transactionAction';

class CheckoutsDetailRow extends Component {
  constructor(props){
    super(props)
    this.state = { 
      
     }
  }
  sum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i].Total
    }
    return sum
}
  

    render() {
     
      
      if (this.props.order && this.props.order.length > 0) {
        return(
        this.props.order.map((item,index)=>
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
                              <Text style={styles.item}>{item.qty}</Text>
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
        fontSize: 12,
        justifyContent: "flex-end"
      },
    reverse:{
        flex: 1,
        transform: [
          { scaleY: -1 },
        ]
      }
});


  const mapStateToProps = (state)=>({
    orderReducer: state.orderReducer
  })
  
export default connect(mapStateToProps)(CheckoutsDetailRow)
  