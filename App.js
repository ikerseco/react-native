import React, {useContext, Fragment, useEffect,useState} from 'react';
import { AsyncStorage } from 'react-native';
import SocketContext from './context/socketContext';
//login
import LoginContext from './context/loginContext';
//splash
import Splash from './items/splashItem';
//gmailSing
import {GoogleSignin,statusCodes} from 'react-native-google-signin';
import googleConfig from './firebase/config';

import 'react-native-gesture-handler';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Alert
} from 'react-native';
import firebase from "react-native-firebase";

import MainStackNavigator from './routes/navigation'

import checkPermission from'./firebase/notifications'
import showAlert from './items/alert'
const SocketIOClient = require('socket.io-client');


const App = () => {

	const[countGmail,setcountGmai] = useState({user:null,login:null})
	const[time,setTime] = useState(null)

	console.log(time)

	const SilentLogin = async ()=>{
		console.log("apa")
		GoogleSignin.configure({googleConfig});
		try {
			const userInfo = await GoogleSignin.signInSilently()
			console.log("setcountGmai")
			console.log(userInfo.user)
			setcountGmai({user:userInfo.user,login:true})
		}catch (error) {
			// GoogleSignin.hasPlayServices()
			// const userInfo =  GoogleSignin.signIn();
			console.log("setcountGmai not")
			setcountGmai({user:null,login:false})
		}
	}
	

	const setUserJUnc = (dat)=>{
		console.log(`setJunc:\n${dat}`)
		setcountGmai(dat) 
	}
	//

	messageListener = async () => {
		this.notificationListener = firebase.notifications().onNotification((notification) => {
			const { title, body } = notification;
			showAlert(title, body);
		});

		this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
			const { title, body } = notificationOpen.notification;
			showAlert(title, body);
		});

		const notificationOpen = await firebase.notifications().getInitialNotification();
		if (notificationOpen) {
			const { title, body } = notificationOpen.notification;
			showAlert(title, body);
		}

		this.messageListener = firebase.messaging().onMessage((message) => {
			console.log(JSON.stringify(message));
		});
	}
	

	useEffect(() => {
		var async =  AsyncStorage.getItem("token").then((dat)=>{
			console.log("apptoken")
			console.log(dat)
			dat !== null ? (
				null
			):(
				checkPermission()
			);
			this.messageListener()
		})
		SilentLogin()
	}, []);

	const socket = SocketIOClient('https://gurobotserver.herokuapp.com');
	console.log(socket)
    


	return (

		<SocketContext.Provider value={socket} >
		  <LoginContext.Provider value={countGmail}>
			<Splash  setUser={setUserJUnc} user={countGmail} timer={time}/>
		  </LoginContext.Provider>	
		</SocketContext.Provider>
	);
};


export default App;
