import React,  { Component,useState,useContext ,useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Alert, ImageBackground} from 'react-native';
import { spalshStyles } from '../styles/splashStyle'
import { useNavigation } from '@react-navigation/native';
import SocketContext from '../context/socketContext';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

//
import MainStackNavigator from '../routes/navigation'
//google
import {GoogleSignin,statusCodes} from 'react-native-google-signin';
import googleConfig from '../firebase/config';




const SplashItem =  (props) => {

    console.log(props.timer)
 
    const IsSocketContext = () => {
        const greeting = 'Splash Screen!'
        return (
            <View style={style.viewStyles}>
                <Text style={style.textStyles}>
                <Text>{greeting}</Text>
                </Text>
            </View>
        )
    
    };


    
    if(props.user.login == true ){
                return(
                   <MainStackNavigator/>
                )
    }else if(props.user.login == false ){
        const login = async () =>{
                       GoogleSignin.configure({googleConfig});
                       try {
                           GoogleSignin.hasPlayServices();
                           const sing = await GoogleSignin.signIn();
                           const userInfo = await GoogleSignin.signInSilently()
                           console.log("userInfo login")
                           console.log(userInfo)
                           props.setUser({user:userInfo.user,login:true})
                       }catch (error) {
                           if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                             // user cancelled the login flow
                             console.log('user cancelled the login flow')
                           } else if (error.code === statusCodes.IN_PROGRESS) {
                             // operation (e.g. sign in) is in progress already
                             console.log('operation (e.g. sign in) is in progress already')
                           } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
                             // play services not available or outdated
                             console.log('play services not available or outdated')
                           } else {
                             // some other error happened
                             console.log('some other error happened')
                           }
                       }
        }
        return(
            <View style={style.viewLogin}>
                <ImageBackground source={require('../img/fondos/4k.jpg')} style={style.image}>
 
                <Button
                    onPress={() =>
                       login() 
                    }
                    title="Login Caunt please"
                    type="outline"
                    ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                      colors: ['#4c669f', '#3b5998', '#192f6a'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 },
                    }}
                    titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                    containerStyle={{width:'50%',height:'10%',borderRadius:100}}
                ></Button>
                </ImageBackground>
            </View>
        )
    }
  
    return (
            <IsSocketContext />
    )
}


style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    viewLogin:{
        flex:5,
        width:'100%',
        height:'100%'
    },
    image:{
        flex:1,
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',
     },
});

export default SplashItem;
/*const IsSocketContext = () => {

    const navigation = useNavigation()

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    start = async () => {
        //Cambiar esta funcion por una de verdad
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            navigation.navigate('MainScreen');
        }
    }

    return (

        <View style={style.viewStyles}>

            <Text style={style.textStyles}>
                Splash Screen
            </Text>
        </View>
    );
}
style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    }
});*/

//export default SplashItem;
/*
const SplashItem = () => {

    const  navigation  = useNavigation()

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        );
    }

    start = async  ()=> {
        //Cambiar esta funcion por una de verdad
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            navigation.navigate('MainScreen');
        }
    }

    return (

        <View style={style.viewStyles}>
            <start/>
            <Text style={style.textStyles}>
                Splash Screen
            </Text>
        </View>
    );
}
style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    }
});

export default SplashItem;*/