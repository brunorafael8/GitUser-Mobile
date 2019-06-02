import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import Home from './screens/Home/Home'
import User from './screens/User/User'

const App = createAppContainer(
  createStackNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'New Search',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        },
      },
      User: {
        screen: User,
        navigationOptions: {
          title: 'Profile',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        },
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
)
export default () => <App />
