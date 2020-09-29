import { createContext } from 'react';
import {GoogleSignin} from 'react-native-google-signin';
import googleeConfig from '../firebase/config'
//GoogleSignin.configure({googleeConfig});

const user = {
    photo: '',
    name: '',
    email: '',
    uid:0,
    robots:[]
};
/*
SilentLogin = async ()=>{
    try {
        const userInfo = await GoogleSignin.signInSilently()
        user.name = userInfo.user.name
        user.uid = userInfo.user.id
        user.email = userInfo.user.email
        user.photo = userInfo.user.img
        alert('log silencioso')
        return user;
    }catch (error) {
        return user;
    }
}
*/



const UserContext = createContext(user);

export default UserContext;