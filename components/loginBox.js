import React, { useContext } from 'react';
import loginContext from '../context/loginContext';
import {Text,Button, View} from 'react-native';
import {GoogleSignin,statusCodes} from 'react-native-google-signin';
import googleConfig from '../firebase/config';

import RNRestart from 'react-native-restart'



 const Proba =  ()  => {
    const context = useContext(loginContext);
    console.log(context)
    return (
        <View>
            <Button
                onPress={() => {
                    console.log(context)
                    RNRestart.Restart();
                }}
                title="login">        
            </Button>
        </View>
    );
    // var userJson = Promise.resolve(jsPromise)
    //var data = userJson._55
}
export default Proba;
