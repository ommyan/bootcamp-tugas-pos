import React, { Component } from 'react'
import {View,Text, StyleSheet,TouchableOpacity, TextInput, phone} from 'react-native'
import {Container,Content} from 'native-base'
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';


import { getOrder } from '../../orderAction'
import { getTransaction } from '../../transactionAction';
import { numberThousand } from '../../../components/Util/Index'

class Payment extends Component {
    state = {  }
    
    render() {
        const suggestion= 
        [
            { name: '50.000', code: '#1abc9c' }, { name: '100.000', code: '#2ecc71' },
            { name: '20.000', code: '#3498db' }, { name: '10.000', code: '#9b59b6' },
        ]
        const buttons=
        [    
            { name: 'Cash', code: '#34495e' }, { name: 'Credit Card', code: '#16a085' },
            { name: 'Coupon', code: '#27ae60' },
        ]
        const numpad=
        [    
            { name: '1', code: '#34495e' }, { name: '2', code: '#16a085' },
            { name: '3', code: '#27ae60' }, { name: '4', code: '#27ae60' },
            { name: '5', code: '#27ae60' },{ name: '6', code: '#27ae60' },
            { name: '7', code: '#27ae60' },{ name: '8', code: '#27ae60' },
            { name: '9', code: '#27ae60' },{ name: '0', code: '#27ae60' },
            { name: '00', code: '#27ae60' },{ name: '000', code: '#27ae60' },
        ]
        return (
            <Container style={{flexDirection: 'row',justifyContent:'center', alignItems: 'center'}}>
            <Content style={styles.container1}><ButtonPayment buttonkey={suggestion} dim={95}/></Content>
            {this.props.transactionReducer.transactions.map((item,index) => 
            {    
                return(
                <Content style={styles.container} key={index}>
                <Text style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>Total </Text>
                <Text style={{fontSize: 40,justifyContent:'center', alignItems: 'center' }} > {numberThousand(item.total)}  </Text>

                <Text style={{flexDirection: 'column',justifyContent:'center', alignItems: 'center'}}>Payed </Text>
                <TextInput
                    placeholder="Text Input For Numeric Value"
                    style={styles.nomber}
                    keyboardType={'numeric'}
                />

                <ButtonPayment buttonkey={buttons} dim={65}/>
               
                
                    
                </Content>
                )
            }
        )}
           <Content style={styles.container1}><ButtonPayment buttonkey={numpad} dim={65}/></Content>
            </Container>
        )
    }
}
styles=StyleSheet.create({
    title:{
        fontSize: 10,
    },
    nomber: {
        fontSize: 36,
        textAlign: 'center',
    } ,
    container: {
        flex:2,
        flexDirection : 'column'
    },
    container1: {
        flex:1,
        flexDirection : 'column'
    }
})

export const ButtonPayment = () =>({
    


    render(){
        console.log(this.props.buttonkey)

        function handlePayment(name)
        {
            switch (name) {
                case 'Cash':
                    alert(name)
                    return item=suggestion
                case 'Credit Card':
                    alert(name)
                    return visiblecredit=true;
                case 'Coupon':
                    alert(name)
                    return visiblecoupon=true;
            }
        };
        
        return(
            <GridView
                    itemDimension={this.props.dim}
                    items={this.props.buttonkey}
                    style={styles.gridView}
                    renderItem={item => (
                      <TouchableOpacity
                      onPress={() => handlePayment(item.name)}
                      >
                          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                          </View>
                      </TouchableOpacity>      
                    )}
                   
            />
        )
    }
})
const styles = StyleSheet.create({
    gridView: {
      paddingTop: 25,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 50,
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
  
export default connect(mapStateToProps)(Payment)
