import React, { Component } from 'react';
import {Left,Right,Container, Content,Row,Col , Text, Body} from 'native-base'
import { StyleSheet } from 'react-native';
import moment from 'moment'

import {numberThousand} from '../../../components/Util/Index'

let subtotal=0
let grandtotal=0

export default class Calculate extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(){
        this.calculateTransaction(this.props.itemTrans)
    }
    componentDidMount(){
        this.calculateTransaction(this.props.itemTrans)
    }
    calculateTransaction(prop){
        if (prop && prop.length > 0){
            console.log('itran',prop)
            prop.map(item => (
                subtotal=item.grandTotal,
                grandtotal=item.grandTotal
            ))
            console.log('gt',grandtotal,subtotal)
        }
    }
    
    render() {
        console.log('panggil calculate', this.props.itemTrans)
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
                                :
                                </Text>
                                <Text style={styles.number}>
                                :
                                </Text>
                                <Text style={styles.number}>
                                :
                                </Text>
                                <Text style={styles.number}>
                                :
                                </Text>
                        </Col>
                    </Body>
                    <Right>
                            <Col style={ { alignItems : 'flex-end',  marginRight: 5} }> 
                                    <Text style={styles.number}>
                                    {numberThousand(grandtotal)}
                                    </Text>
                                    <Text style={styles.number}>
                                    0
                                    </Text>
                                    <Text style={styles.number}>
                                    0
                                    </Text>
                                    <Text style={styles.number}>
                                    {numberThousand(grandtotal)}
                                    </Text>
                                </Col>
                    </Right>
             </Row>
            </Container>
            
        );
    }
}

const styles = StyleSheet.create({
    number:{
        fontSize: 12,
        alignItems: 'flex-end'
    }
})

