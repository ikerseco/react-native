import MainScreen from '../screens/main.js';
import ControlScreen from '../screens/controls.js';
import LoginScreen from '../screens/loginUser.js';
import SplashScreen from '../screens/splash.js';

import {createStackNavigator} from 'react-navigation-stack';

export const AppNavigator = createStackNavigator(
	{
		Home: {
			screen: MainScreen,
		},
		Control: {
			screen: ControlScreen,
		},
		Login: {
			screen: LoginScreen,
		},
		Splash:{
			screen: SplashScreen,
		},
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none'
	},
);
