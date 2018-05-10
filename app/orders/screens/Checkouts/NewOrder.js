import React, { Component } from 'react';
import { Button} from  'react-native' ;
import {connect} from 'redux';

import {CreateTransactions } from '../../transactionAction'

class NewOrder extends Component {
    constructor(props){
       super(props)
    }
    render() {
        return (
         <View>
            <Button 
                title= 'New Order'
            />
         </View>   
        );
    }
}
const mapStateToProps = (state)=>({
    orderReducer: state.orderReducer,
    transactionsReducer: state.transactionsReducer
    
  })
  
export default connect(mapStateToProps)(NewOrder)