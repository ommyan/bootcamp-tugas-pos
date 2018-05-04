import { StackNavigator } from 'react-navigation';

import Category from '../products/screens/category/Category'
import Orders from '../orders/screens/Orders'
import Payment from '../orders/screens/transactions/Payment'
import Checkout from '../orders/screens/Checkouts/Checkout'

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
  Payment: {
    screen: Payment,
    navigationOptions: {
      title: "Payment Method",
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: '#FF6F00',
      }
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Payment Method",
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: '#FF6F00',
      }
    }
  }
})

export default RootNavigator;