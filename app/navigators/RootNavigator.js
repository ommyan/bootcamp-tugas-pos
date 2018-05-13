import { StackNavigator } from 'react-navigation';

import Category from '../products/screens/category/Category'
import Orders from '../orders/screens/Orders'
import Checkouts from '../orders/screens/Checkout'
import PaymentMethod from '../orders/screens/Checkouts/PaymentMethod'

const RootNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
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
  PaymentMethod: {
    screen: PaymentMethod,
    navigationOptions: {
      title: "Payment Method",
      headerTitleStyle: { alignSelf: 'center' },
      headerStyle: {
        backgroundColor: '#FF6F00',
      }
    }
  },
  Checkout: {
    screen: Checkouts,
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