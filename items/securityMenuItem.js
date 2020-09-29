import React from 'react';
import { View, Text, ImageBackground,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';



const SecurityMenuItem = () => {

    const navigation = useNavigation()
    gestureHandler = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style ={styles.container}>
            <ImageBackground source={require('../img/fondos/imagef2.png')} style={styles.image}>
              <View style={styles.buttonview}>  
                    <Button
                        onPress={() =>
                            gestureHandler('SecurityListMenuScreen')
                        }
                        title="Personas Registradas Menu"
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                        colors: ['#9E9E9E', '#757575'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                        }}
                        titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                        containerStyle={styles.button}>
                    </Button>          
                    <Button
                        onPress={() =>
                            gestureHandler('AddUserScreen')
                        }
                        title="Añadir usuario de registro"
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                        colors: ['#9E9E9E', '#757575'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                        }}
                        titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                        containerStyle={styles.button}>
                    </Button>
                    <Button
                        onPress={() =>
                            gestureHandler('LogsScreen')
                        }
                        title="Ver imagenes registradas"
                        ViewComponent={LinearGradient} // Don't forget this!
                        linearGradientProps={{
                        colors: ['#9E9E9E', '#757575'],
                        start: { x: 0, y: 0.5 },
                        end: { x: 1, y: 0.5 },
                        }}
                        titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                        containerStyle={styles.button}
                        >
                    </Button>
               </View>     
            </ImageBackground>
        </View>
    );
}

export default SecurityMenuItem;

const styles = StyleSheet.create({
    image:{
        flex:1,
        resizeMode: "cover",
     },
     container: {
        flex:4,
     },
     buttonview:{
         flex:3,
         width:"100%",
         height:"100%",
         alignItems:'center',
         justifyContent:'center'
     },
     button:{
         marginTop:'5%',
         width:'70%',
         height:'10%'
     }
})
