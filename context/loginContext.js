import { createContext } from 'react';
import {GoogleSignin,statusCodes} from 'react-native-google-signin';
import googleConfig from '../firebase/config';













const loginContext = createContext('null');

export default loginContext;

