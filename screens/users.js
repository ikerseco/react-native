import React, { useContext} from 'react';
import { View, Button, Text ,StyleSheet,ImageBackground} from 'react-native';
import { Avatar ,Icon} from 'react-native-elements';
import LoginContext from '../context/loginContext';
import LinearGradient from 'react-native-linear-gradient';



const UserScreen = () => {
    const usercontext = useContext(LoginContext)

	return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/fondos/fondo_de_teclado.jpg')} style={styles.image}>
            <View style={styles.avatar}>
                <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={{borderRadius: 100}}
                >
                    <Avatar 
                        rounded 
                        title={usercontext.user.email.charAt(0).toUpperCase()}   
                        size="xlarge" 
                        containerStyle={{borderWidth:2,borderColor:'black'}}
                        overlayContainerStyle={{backgroundColor:'transparent'}}
                    />
                </LinearGradient>
            </View>
            </ImageBackground>
            <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.menu1}
            >
                <Icon   
                    name='user'
                    type='font-awesome'
                    color='#f50'
                    backgroundColor='white'
                    containerStyle={{marginLeft:'5%'}}
                />
                <Text style={{marginLeft:'10%',fontFamily:'FredokaOne-Regular',color:'#f50'}}>{usercontext.user.name.toUpperCase()}</Text>
            </LinearGradient>         
            <LinearGradient 
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.menu2}
            >
                <Icon   
                    name='at'
                    type='font-awesome'
                    color='#f50'
                    backgroundColor='white'
                    containerStyle={{marginLeft:'5%'}}
                    />
                <Text style={{marginLeft:'10%',fontFamily:'FredokaOne-Regular',color:'#f50'}}>{usercontext.user.email.toUpperCase()}</Text>
            </LinearGradient>
        </View>
       // <i class="fas fa-user-alt"></i>
	);
}

export default UserScreen;


const styles = StyleSheet.create({

    image:{
        flex:1,
        height:'41%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        }
    },
    container: {
       height:'100%',
       width:'100%',
       flex:3,
       zIndex:0,
       backgroundColor:'#c2d6d6'
    },
    avatar:{
        marginTop: '5%',
        flexDirection:'column',
        flex:1,
        alignItems:'center',
     },
     menu1:{
        flex: 1,
        width:'80%',
        height:'10%',
        backgroundColor:'transparent',
        flexDirection: 'row',
        alignItems:'center',
        zIndex:1,
        position:'absolute',
        top:'50%',
        elevation: 5,
        marginLeft:'10%',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
     },
     menu2:{
        flex: 1,
        width:'80%',
        height:'10%',
        backgroundColor:'transparent',
        flexDirection: 'row',
        alignItems:'center',
        zIndex:1,
        position:'absolute',
        top:'65%',
        elevation: 5,
        marginLeft:'10%',
     }
})
