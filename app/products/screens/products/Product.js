import React, {Component} from 'react'
import { Container, Header, Content, List, ListItem, Left,CheckBox,Grid,
  Body, Right, Thumbnail, Text,Col,Row,Card,CardItem,Icon } from 'native-base';
import { StyleSheet,Dimensions, View ,ListView, TouchableOpacity,FlatList,Image} from 'react-native';
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';

import {numberThousand,sum} from '../../../components/Util/Index';
import {CreateTransaction}  from '../../../orders/transactionAction';
import {CreateOrder}  from '../../../orders/orderAction';

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
let order=[]
let trans=[]

class Product extends Component {
  constructor(props){
      super(props)
  }
  handleProduct(id,name,qty,price){
    let transItem = {id: '221', tax: 0, discount: 0, total:25000, waiterId: '1'}
    let orderItem= {id: id,name: name, qty: 1, price: price, total: qty * price  }

    if (trans.length==0){
        trans.push(transItem)
        order.push(orderItem)
        this.props.dispatch(CreateOrder(order))
        this.props.dispatch(CreateTransaction(trans))
    } else {
        order.push(orderItem)
        this.props.dispatch(CreateOrder(order))
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