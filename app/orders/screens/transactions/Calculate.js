import React, { Component } from 'react';
import {Left,Right,Container, Content,Row,Col , Text, Body} from 'native-base'
import { StyleSheet,View } from 'react-native';
import moment from 'moment'
import {connect} from 'react-redux'


import {numberThousand} from '../../../components/Util/Index'
import {CreateOrder,getOrder} from '../../orderAction';
import { CreateTransaction,getTransaction } from '../../transactionAction';

let subtotal=0
let grandtotal=0
class Calculate extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(){
        this.calculateTransaction(this.props.transactionReducer.transactions)
    }
    componentDidMount(){
        this.calculateTransaction(this.props.transactionReducer.transactions)
    }
    calculateTransaction(prop){
        let subtotal=0
        let grandtotal=0
        if (prop && prop.length > 0){
            prop.map(item => (
                subtotal=item.total,
                grandtotal=item.total
            ))
           
        } else {
           grandtotal=0;
           subtotal=0 ;
        }
    }
    
    render() {
        if (this.props.transactionReducer.transactions && this.props.transactionReducer.transactions.length > 0){
        return (
            <Container>
             <Row>
                    <Left  style={ { alignItems : 'center'} }>
                        <Col> 
                         
                                <Text style={styles.number}>
                                Subtotal 
                                </Text>

                                <Text style={styles.number}>
                                Discount 
                                </Text>

                                <Text style={styles.number}>
                                Tax 
                                </Text>

                                <Text style={styles.number}>
                                Grand Total 
                                </Text>
                        </Col>
                    </Left>
                    <Body>
                    <Col style={ { alignItems : 'flex-end'} }> 
                                <Text style={styles.number}>
                                {numberThousand(this.props.transactionReducer.transactions[0].total)}
                                </Text>
                                <Text style={styles.number}>
                                
                                </Text>
                                <Text style={styles.number}>
                                
                                </Text>
                                <Text style={{fontSize: 30}}>
                                    {numberThousand(this.props.transactionReducer.transactions[0].total)}
                                </Text>
                        </Col>
                    </Body>
                    
             </Row>
            </Container>
            
        );
        } else {
            return(
            <View><Text>.</Text></View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    number:{
        fontSize: 12,
        alignItems: 'flex-end'
    }
})

const mapStateToProps = (state)=>({
    orderReducer: state.orderReducer,
    transactionReducer: state.transactionReducer,
    
  })
  
export default connect(mapStateToProps)(Calculate)