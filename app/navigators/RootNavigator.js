import { StackNavigator } from 'react-navigation';

import ProfilesList from '../profiles/screens/ProfilList'

const RootNavigator = StackNavigator({
  ProfilesList: {
    screen: ProfilesList,
    
  }
})

export default RootNavigator;