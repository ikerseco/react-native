import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import googleConfig from '../firebase/config';


async function SilentLogin(callback) {
    GoogleSignin.configure({ googleConfig });
    try {
        const userInfo = await GoogleSignin.signInSilently()
        alert('log silencioso')
        callback({ user: userInfo, login: true })

    } catch (error) {
        // GoogleSignin.hasPlayServices()
        // const userInfo =  GoogleSignin.signIn();
        console.log("not login")
        callback({ user: none, login: false })

    }
}


export default SilentLogin;