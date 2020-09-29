import React, { useContext, useState,useEffect} from 'react';
import { View, Text ,StyleSheet,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
//inport
import SocketBox from '../components/socketBox';
import Aixpad from '../components/axisPad';
import { Avatar,Button } from 'react-native-elements';
import LoginContext from '../context/loginContext';




const MainItem = () => {
    const navigation = useNavigation()
    gestureHandler = (screen) => {
        navigation.navigate(screen)
    }

    const userContext = useContext(LoginContext)
    console.log(userContext)
    console.log("m")
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/fondos/imagef2.png')} style={styles.image}>
                <View style={styles.avatar}>
                <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={{borderRadius: 100}}
                >
                    <Avatar 
                        rounded 
                        title={userContext.user.email.charAt(0).toUpperCase()} 
                        size="xlarge"  
                        onPress={() =>
                            gestureHandler('UserScreen')
                        }
                        containerStyle={{borderWidth:2,borderColor:'black'}}
                        overlayContainerStyle={{backgroundColor:'transparent'}}
                    />
                </LinearGradient>
                </View>
                <View style={styles.buttonView}>
                    <Button
                    onPress={() =>
                        gestureHandler('ControlScreen')
                    }
                    title="Controles"
                    type="outline"
                    ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                      colors: ['#9E9E9E', '#757575'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 },
                    }}
                    titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                    containerStyle={{width:'50%',height:'10%'}}
                    ></Button>
                    <Button
                    onPress={() => {
                        gestureHandler('SecurityScreen');
                    }}
                    title="Security" 
                    type="outline"
                    ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                      colors: ['#9E9E9E', '#757575'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 },
                    }}
                    titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                    containerStyle={{width:'50%',height:'10%',marginTop:'5%',fontFamily:'MuseoModerno-ExtraBold'}}
                    ></Button>
                </View>
            </ImageBackground>
        </View>
    );
}

export default MainItem;

const styles = StyleSheet.create({  
     image:{
        flex:1,
        resizeMode: "cover",
     },
     container: {
        flex:4,
     },
     avatar:{
        flexDirection:'column',
        flex:1,
        alignItems:'center',
        marginTop:60,
        marginBottom:80
     },
     buttonView:{
        flex:2,
        width:"100%",
        height:"100%",
        alignItems:'center',
    },
  });

  //       <ImageBackground source={require('../img/fondos/7a4c38a63b1aeb93162a00af42fe6323.jpg')} style={styles.image}/>