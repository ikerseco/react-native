import React,{Component,useContext} from 'react';
import Splash from '../items/splashItem';
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
    const navigation = useNavigation()
    navigation.navigate('MainScreen')
    return (
        <Splash />
    )
}


export default SplashScreen;



