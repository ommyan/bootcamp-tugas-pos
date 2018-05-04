import React, { Component } from 'react'
import {View,Text, StyleSheet,TouchableOpacity, TextInput, phone} from 'react-native'
import {Container,Content,Col,Row} from 'native-base'
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';


import { getOrder } from '../../orderAction'
import { getTransaction } from '../../transactionAction';
import { numberThousand } from '../../../components/Util/Index'
import Bill from '../Checkouts/Bill'
import PaymentMethod from './PaymentMethod'

let item=[]
let trans=''
class Checkout extends Component {
    state = {  }
   
    render() {
        console.log('order',this.props.orderReducer.orders)
        return (
             <Container>
                <Content>
                    <Row>
                        <Col style={styles.billContainer}> 
                          <Bill />
                        </Col>
                        <Col style={styles.payContainer}> 
                          <PaymentMethod />
                        </Col>
                    </Row>
                </Content>
             </Container>   
        )
    }
}

const styles = StyleSheet.create({
   
    billContainer: {
      justifyContent: 'center',
      flex:1,
      flexDirection: 'column'  
    },
    payContainer: {
        justifyContent: 'flex-start',
        flex:2,
        flexDirection: 'column' 
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
  
export default connect(mapStateToProps)(Checkout)
