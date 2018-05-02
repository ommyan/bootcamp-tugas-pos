import React, {Component} from 'react'
import { Container, Header, Content, List, ListItem, Left,CheckBox,Grid,
  Body, Right, Thumbnail, Text,Col,Row,Card,CardItem,Icon } from 'native-base';
import { StyleSheet,Dimensions, View ,ListView, TouchableOpacity,FlatList,Image} from 'react-native';
import {connect} from 'react-redux'
import GridView from 'react-native-super-grid';

import { allCategory } from '../../categoryActions';
import { allProduct } from '../../productsActions';
import Product from '../products/Product';

const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
let order=[]
class Category extends Component {
  constructor(props){
      super(props)
    this.state = {
        itemskat:[]
    }  
  }
  componentWillMount(){
    this.props.dispatch(allCategory())
    this.props.dispatch(allProduct('A'))
  }
  
  handleCategory(catID){
   if (this.props.productsReducer.products && this.props.productsReducer.products.length>0){  
   itemsProductSelected=this.props.productsReducer.products.filter(function(item){
      return item.category_id==catID;
   })
   this.setState({
    itemskat: itemsProductSelected
   })
    }
  }

  render(){
    
    if (this.props.categoryReducer.category && this.props.categoryReducer.category.length>0) {
        items=this.props.categoryReducer.category.category
    }  
    return (
      <Container>
       
          <View>
            <Text>Category</Text>
          </View>
          <Grid>
            <Col style={{flexDirection: 'column',justifyContent: 'center', flex: 0.5}}>
            <Content>
                  <GridView
                    itemDimension={65}
                    items={this.props.categoryReducer.category}
                    style={styles.gridView}
                    renderItem={item => (
                      <TouchableOpacity
                      onPress={() => this.handleCategory(item.id)}
                      >
                          <View style={[styles.itemContainer, { backgroundColor: '#4DD0E1' }]}>
                            <Text style={styles.itemName}>{item.category}</Text>
                          </View>
                      </TouchableOpacity>      
                    )}
                   
                  />
              </Content>      
            </Col>
            <Col style={{flexDirection: 'row',justifyContent: 'center', flex: 1.5}}>
                  <Product products={this.state.itemskat} reducer={this.props.productsReducer} tran={this.props.transactionReducer} /> 
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
    borderRadius: 5,
    padding: 10,
    height: 50,
  },
  itemName: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

const mapStateToProps = (state)=>({
    categoryReducer: state.categoryReducer,
    productsReducer: state.productsReducer,
  })

export default connect(mapStateToProps)(Category)