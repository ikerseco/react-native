import firebase from "react-native-firebase";
import axios from 'axios';
import { FCMDATA } from '../data/data';
import { AsyncStorage } from 'react-native';
export default checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getFcmToken();
    } else {
        this.requestPermission();
    }
}
requestPermission = async () => {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
    } catch (error) {
        console.log(error)
        // User has rejected permissions
    }
}
getFcmToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
        axios.post(FCMDATA, {
            token: fcmToken,
        })
            .then((response) => {
                AsyncStorage.setItem("token",fcmToken)
            })
            .catch((error) => {
                console.log(error.response.request._response)
            })

    } else {
        console.log("Failed", "No token received");
    }
}