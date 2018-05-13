import { StackNavigator } from 'react-navigation';

<<<<<<< HEAD
import Category from '../products/screens/category/Category'
import Orders from '../orders/screens/Orders'
import Payment from '../orders/screens/transactions/Payment'
import Checkouts from '../orders/screens/Checkout'
import PaymentMethod from '../orders/screens/Checkouts/PaymentMethod'

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
=======
import ProfilesList from '../profiles/screens/ProfilList'

const RootNavigator = StackNavigator({
  ProfilesList: {
    screen: ProfilesList,
    
>>>>>>> 124efc4b435fca7fbb6d1c9653401f275afe5118
  }
})

export default RootNavigator;