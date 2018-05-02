import React, { Component } from 'react';
import {Left,Right,Container, Content,Row,Col , Text, Body} from 'native-base'
import { StyleSheet,View } from 'react-native';
import moment from 'moment'

import {numberThousand} from '../../../components/Util/Index'


let subtotal=0
let grandtotal=0
export default class Calculate extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(){
        this.calculateTransaction(this.props.tran)
    }
    componentDidMount(){
        this.calculateTransaction(this.props.tran)
    }
    calculateTransaction(prop){
        console.log('gtprop',prop)
        let subtotal=0
        let grandtotal=0
        if (prop && prop.length > 0){
            console.log('itran',prop)
            prop.map(item => (
                subtotal=item.total,
                grandtotal=item.total
            ))
           
        } else {
           grandtotal=0;
           subtotal=0 ;
        }
        console.log('gt',grandtotal,subtotal)
    }
    
    render() {
        if (this.props.tran && this.props.tran.length > 0){
        console.log('gt1',this.props.tran[0].total)
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
                                    {numberThousand(this.props.tran[0].total)}
                                    </Text>
                                    <Text style={styles.number}>
                                    0
                                    </Text>
                                    <Text style={styles.number}>
                                    0
                                    </Text>
                                    <Text style={{fontSize: 40}}>
                                    {numberThousand(this.props.tran[0].total)}
                                    </Text>
                                </Col>
                    </Right>
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

