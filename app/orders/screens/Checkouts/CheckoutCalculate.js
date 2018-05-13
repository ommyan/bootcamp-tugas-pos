import React, { Component } from "react";
import {
  Left,
  Right,
  Container,
  Content,
  Row,
  Col,
  Text,
  Body,
  List,
  ListItem
} from "native-base";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import {connect} from 'react-redux'
import DropdownAlert from 'react-native-dropdownalert';
import { items, MAIN_CUSTOM_COLOR } from './Constants';
import DialogBox from 'react-native-dialogbox';
import Dialog from "react-native-dialog";

import {CreateTransaction, CreatePayment}  from '../../transactionAction';
import {CreateOrder}  from '../../orderAction';

import { numberThousand } from "../../../components/Util/Index";

let subtotal = 0;
let grandtotal = 0;
let due =0;
class CheckoutCalculate extends Component {
  constructor(props) {
    super(props);
  }

  

  componentWillReceiveProps() {
    this.calculateTransaction(this.props.tran);
  }
  componentDidMount() {
    this.calculateTransaction(this.props.tran);
   
  }
  componentWillUnmount() {
    // Remove the alert located on this master page from the manager
  
  }
  calculateTransaction(prop) {
    let subtotal = 0;
    let grandtotal = 0;
    if (prop && prop.length > 0) {
      prop.map(item => ((subtotal = item.total), (grandtotal = item.total)));
    } else {
      grandtotal = 0;
      subtotal = 0;
    }
  }
  
  newOrder(){
     let payment=[]
     let transItem={}
     let order=[]
     this.props.dispatch(CreatePayment(payment))
     this.props.dispatch(CreateTransaction(transItem))
     this.props.dispatch(CreateOrder(order))
     this.setState({inputValue: 0});  
     
     
    this.props.navigation.navigate('Orders')
    return (
      <View>
      <Dialog.Container visible={true}>
        <Dialog.Title>Account delete</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this account? You cannot undo this action.
        </Dialog.Description>
      
      </Dialog.Container>
    </View>
    )
   
  }
  calculatePayment(){
   let paymentTotal=0
   let total= this.props.tran[0].total

   this.props.payment.map((pay,i)=>{
      paymentTotal=paymentTotal + Number(pay.bayar)
   })
   
   due= paymentTotal - total
   if (this.props.payment.length > 0)
   {
    let newpayment = this.props.payment 
    if (due >= 0) {
      alert('Completed')
      this.newOrder()
    } 
      
    return (
      <View >
      {newpayment.map((pay,i)=>(

            <ListItem key={i}>
                <Left style={{flex:1}}>
                  <Text style={styles.number}>{pay.cara}</Text>
                </Left>
                <Body style={{flex:0.2}}>
                  <Text style={styles.number}>:</Text>
                </Body>
                <Right style={{flex:2}}>
                  <Text style={styles.number}>
                    {numberThousand(pay.bayar)}
                  </Text>
                </Right>
            </ListItem>
        ))}
       

        <ListItem>
          <Left style={{flex:1}}>
            <Text style={styles.number}>Ballance Due</Text>
          </Left>
          <Body style={{flex:0.2}}>
            <Text style={styles.number}>:</Text>
          </Body>
          <Right style={{flex:2}}>
            <Text style={styles.numberTotal}>
              {numberThousand(due)}
            </Text>
          </Right>
        </ListItem>
        <DialogBox ref={dialogbox => { this.dialogbox = dialogbox }}/>
      </View>
  )
  
   
    }
  }
  showMessageCompleted(){
    <Dialog.Container visible={true}>
    <Dialog.Title>Transactions Completed</Dialog.Title>
    <Dialog.Description>
    Do you want to delete this account? You cannot undo this action.
    </Dialog.Description>
    <Dialog.Button label="Cancel" />
    <Dialog.Button label="Delete" />
    </Dialog.Container>

  }
  render() {
    if (this.props.tran && this.props.tran.length > 0) {
      return (
        <Container >
        <Content>
         <View style={{marginLeft:10,marginBottom:30,padding: 10}}>
                <List style={{padding:5}}>
                      <ListItem>
                        <Left style={{flex:1}}>
                          <Text style={styles.number}>Subtotal</Text>
                        </Left>
                        <Body style={{flex:0.2}}>
                          <Text style={styles.number}>:</Text>
                        </Body>
                        <Right style={{flex:2}}>
                          <Text style={styles.number}>
                            {numberThousand(this.props.tran[0].total)}
                          </Text>
                        </Right>
                      </ListItem>
                      <ListItem>
                      <Left style={{flex:1}}>
                          <Text style={styles.number}>Discount</Text>
                        </Left>
                        <Body style={{flex:0.2}}>
                          <Text style={styles.number}>:</Text>
                        </Body>
                        <Right style={{flex:2}}>
                          <Text style={styles.number}>0</Text>
                        </Right>
                      </ListItem>

                      <ListItem>
                      <Left style={{flex:1}}>
                          <Text style={styles.number}>Tax</Text>
                        </Left>
                        <Body style={{flex:0.2}}>
                          <Text style={styles.number}>:</Text>
                        </Body>
                        <Right style={{flex:2}}>
                          <Text style={styles.number}>0</Text>
                        </Right>
                      </ListItem>

                      <ListItem>
                      <Left style={{flex:1}}>
                          <Text style={styles.number}>Grand Total</Text>
                        </Left>
                        <Body style={{flex:0.2}}>
                          <Text style={styles.number}>:</Text>
                        </Body>
                        <Right style={{flex:2}}>
                          <Text style={styles.numberTotal}>
                            {numberThousand(this.props.tran[0].total)}
                          </Text>
                        </Right>
                      </ListItem>
                      {this.calculatePayment()}
                     
              </List>    
         </View>
         </Content>
        </Container>
      );
    } else {
      return (
        <View>
          <Text>.</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: 12,
    alignItems: "flex-end"
  },
  numberTotal: {
    fontSize: 25,
    alignItems: "flex-end"
  }
});


const mapStateToProps = (state)=>({
  transactionReducer: state.transactionReducer,
  orderReducer: state.orderReducer
})

export default connect(mapStateToProps)(CheckoutCalculate)  