import { StackNavigator } from 'react-navigation';

import Category from '../products/screens/category/Category'
import Orders from '../orders/screens/Orders'

const RootNavigator = StackNavigator({
  Category: {
    screen: Category,
    navigationOptions: {
      title: 'Category'
    }
  },
  Orders: {
    screen: Orders,
    navigationOptions: {
      title: "Sales Order",
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: '#4DD0E1',
      }
    }
  },
})

export default RootNavigator;