import React, {Component} from 'react'
import {Container, Content, Text, List, ListItem} from 'native-base'
import {connect} from 'react-redux'

import { allFoods } from '../actions';

class FoodsList extends Component{

  componentDidMount(){
    this.props.dispatch(allFoods())
  }

  render(){
    console.log('fr',this.props.foodsReducer)
    return (
      <Container>
        <Content>
           {this.props.foodsReducer.foods.map((food,i)=>( 
            <ListItem key={i} onPress={()=> {
              this.props.navigation.navigate('FoodsDetail',{desc:food})
            }
            
            }>
              <Text>{food.title}</Text>
            </ListItem>
           ))}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>({
  foodsReducer: state.foodsReducer
})

export default connect(mapStateToProps)(FoodsList)