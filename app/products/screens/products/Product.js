import React, {Component} from 'react'
import { Container, Header, Content, List, ListItem, Left,CheckBox,Grid,
  Body, Right, Thumbnail, Text,Col,Row,Card,CardItem,Icon } from 'native-base';
import { StyleSheet,Dimensions, View ,ListView, TouchableOpacity,FlatList,Image} from 'react-native';
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';

import {numberThousand,sum} from '../../../components/Util/Index';
import {CreateTransaction,getTransaction}  from '../../../orders/transactionAction';
import {CreateOrder}  from '../../../orders/orderAction';

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
let order=[]
let trans=[]
let orderItem=[]
let subtotal=0

class Product extends Component {
  constructor(props){
      super(props)
      order=[]
      trans=[]
      subtotal=0
      orderItem=[]
  }
  componentWillMount(){
   
  }
  handleProduct(id,name,qty,price){
    this.props.dispatch(getTransaction())

    orderItem= {id: id,name: name, qty: 1, price: price, total: qty * price  }

    console.log('orderItem',orderItem)
    subtotal=subtotal+(qty*price)

        let transItem = {
          id: '', 
          tax: 0, 
          discount: 0, 
          total: subtotal , 
          waiterId: '',
          cash:0,
          creditcard:0,
          coupon:0,
          paymentmethod:'',
        }

    trans=this.props.transactionReducer.transactions
    console.log(this.props.transactionReducer.transactions)    
    console.log('tr',trans.length,subtotal)
    console.log('trans',trans,subtotal)
    

    if (trans.length == 0){
      
        trans.push(transItem)
        order.push(orderItem)

        this.props.dispatch(CreateOrder(order))
        this.props.dispatch(CreateTransaction(trans))
    } else {
        transItem= this.props.transactionReducer.transactions
        console.log('tree',transItem)
        transItem[0].total= subtotal
        console.log('tri',transItem)
        order.push(orderItem)
        this.props.dispatch(CreateOrder(order))
        this.props.dispatch(CreateTransaction(transItem))
    }
  }

  render(){
    return (
      <Container>
          <Grid>
            <Col style={{flexDirection: 'column',justifyContent: 'center', flex: 1.5}}>
                    <GridView
                    itemDimension={60}
                    items={this.props.products}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity
                    
                    onPress={() => this.handleProduct(item.id,item.name,1,item.price)}
                    >
                        <View style={[styles.itemContainer, { backgroundColor: '#2ecc71' }]}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemName}>{numberThousand(item.price)}</Text>
                        </View>
                    </TouchableOpacity>      
                    )}
                    
                />
            </Col>
          </Grid>
      </Container>
    )
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

export default connect(mapStateToProps)(Product)