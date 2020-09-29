import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import MainScreen from '../screens/main';
import ControlScreen from '../screens/controls';
import SplashScreen from '../screens/splash';
import SecurityScreen from '../screens/security';
import SecurityListMenuScreen from '../screens/securityListMenu'
import AddUserScreen from '../screens/addUserCam'
import LogsScreen from '../screens/logsView'
import UserScreen from "../screens/users"


const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="MainScreen">
        <Stack.Screen name='MainScreen' component={MainScreen} options={{ title: 'Main Screen' }}/>
        <Stack.Screen name='ControlScreen' component={ControlScreen} options={{ title: 'Control Screen' }} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ title: 'Splash Screen ' }} />
        <Stack.Screen name='SecurityScreen' component={SecurityScreen} options={{ title: 'Security Screen' }}/>
        <Stack.Screen name='SecurityListMenuScreen' component={SecurityListMenuScreen} options={{ title: 'Security Menu Screen' }}/>
        <Stack.Screen name='AddUserScreen' component={AddUserScreen} options={{ title: 'Add User' }}/>
        <Stack.Screen name='UserScreen' component={UserScreen} options={{ title: 'User Count' }}/>
        <Stack.Screen name='LogsScreen' component={LogsScreen} options={{ title: 'Logs Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
