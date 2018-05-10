import React, { Component } from 'react';
import GridView from 'react-native-super-grid';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'

import {CreateTransaction}  from '../../transactionAction';
class Paid extends Component {
    constructor(props){
        super(props)
        this.state=({
            subtotal: props.subtotal
        })
    }
    state = {  }
    
    _handlePayment(name)
    
       {
        console.log(this.props.transactionReducer.transactions)
           switch (name) {
               case "Cash":
                payCash=0
                transItem= this.props.transactionReducer.transactions
                transItem[0].cash= this.props.subtotal
                this.props.dispatch(CreateTransaction(transItem))
               default:
                   break;
           }
         
       }
    render() {
        const items = [
            {name:'Cash',code:'#FFCC80'},
            {name:'Credit Card',code:'#FF5722'},
            {name:'Coupon',code:'#1B5E20'},
            
        ]
       
        return (
            <View>
                <GridView
                    itemDimension={60}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity
                    onPress={()=>{this._handlePayment(item.name)}}
                    >
                        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>      
                    )}
                
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flexDirection: 'column',
      flex: 2,
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      padding: 5,
      height: 50,
    },
    itemName: {
      fontSize: 10,
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: '600',
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
  
export default connect(mapStateToProps)(Paid)  