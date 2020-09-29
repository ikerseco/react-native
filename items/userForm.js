import React, { useState, ReactDOM } from 'react';
import { View, Text, TextInput, Picker, ActivityIndicator, Alert, StyleSheet,ImageBackground} from 'react-native';
import {Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { DATAPOST, DATA } from '../data/data';

//carruselimage
import Imagecarrusel from '../components/carrusel'

const formItem = () => {

    const [selectedValue, setSelectedValue] = useState("true");

    const [request, setrequest] = useState(0);
    const { control, handleSubmit, errors } = useForm();
    
    const [image,setimage] = useState({}) 

    const onSubmit = (data) => {
        console.log(data)
        setrequest(true)
        console.log('data')
        console.log("selectedValue")
        console.log(selectedValue)
        axios.post(DATAPOST, {
            name: data.firstName,
            surname: data.surname,
            registerEmail: data.email,
            allowed: selectedValue,
            imageUrl: image.image
        })
            .then((response) => {
                console.log(response)
                Alert.alert('Usuario añadido')
               
            })
            .catch((error) => {
                console.log(error.response.request._response)
                Alert.alert('Ha habido un error')
                
            })
            setrequest(false)
    }
    const imageFire = (datJson) => {
        console.log(datJson)
        setimage(datJson)
    }
    if (request) {
        return (
            <View>
                <Text> Peticion en curso</Text>
                <ActivityIndicator>

                </ActivityIndicator>
            </View>
        )
    }
    else {
        return (
            <ImageBackground source={require('../img/fondos/abstract.jpg')} style={styles.image}>
                <View style={styles.menuVox}>
                    <LinearGradient 
                    colors={['#abebc6','#82e0aa','#58d68d']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.backgrounText}
                    >
                        <Text style={styles.textSty}>FirstName</Text>
                    </LinearGradient>
                    <Controller
                        as={TextInput}
                        control={control}
                        name="firstName"
                        onChange={args => args[0].nativeEvent.text}
                        rules={{ required: true }}
                        defaultValue=""
                        style={styles.textArea}
                    />
                    <LinearGradient 
                    colors={['#abebc6','#82e0aa','#58d68d']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.backgrounText}
                    >
                        <Text style={styles.textSty}>Surname</Text>
                    </LinearGradient>
                    <Controller
                        as={TextInput}
                        control={control}
                        name="surname"
                        onChange={args => args[0].nativeEvent.text}
                        defaultValue=""
                        style={styles.textArea}
                    />
                    <LinearGradient 
                    colors={['#abebc6','#82e0aa','#58d68d']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.backgrounText}
                    >
                        <Text style={styles.textSty}>Email</Text>
                    </LinearGradient>
                    <Controller
                        as={TextInput}
                        control={control}
                        name="email"
                        onChange={args => args[0].nativeEvent.text}
                        defaultValue=""
                        style={styles.textArea}
                    />
                    <LinearGradient 
                    colors={['#abebc6','#82e0aa','#58d68d']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.picker}
                    >
                        <Text style={styles.textSty}>Allowed</Text>
                    </LinearGradient>
                    <Picker
                        selectedValue={selectedValue}
                        style={{backgroundColor:'white',width:'35%' ,height:'5%',opacity:0.7}}
                        itemStyle={{width:100 ,height:100}}
                        onValueChange={(itemValue, itemIndex) =>{
                            setSelectedValue(itemValue)
                            console.log("itemValue")
                            console.log(itemValue)
                        }}
                    >
                        <Picker.Item label="true" value="true" />
                        <Picker.Item label="false" value="false" />
                    </Picker>
                    <Imagecarrusel jsonImg={imageFire}></Imagecarrusel>
                    <Button
                    onPress={handleSubmit(onSubmit)}
                    title="Submit"
                    type="outline"
                    ViewComponent={LinearGradient} // Don't forget this!
                    linearGradientProps={{
                      colors: ['#85c1e9','#21618c'],
                      start: { x: 0, y: 0.5 },
                      end: { x: 1, y: 0.5 },
                    }}
                    titleStyle={{color:'white',fontFamily:'MuseoModerno-ExtraBold'}}
                    containerStyle={{width:'50%',borderWidth:1,borderTopColor:'black',marginTop:'5%'}}
                    ></Button>
                </View>
            </ImageBackground>
        );
    }
}

export default formItem;

const styles = StyleSheet.create({
    menuVox:{
        flex:5,
        alignItems:"center",
        marginTop:"5%",
        width:'100%',
        height:'100%'
    },
    image:{
        flex:6,
        resizeMode: "cover",
        width:'100%',
        height:'100%'
     },
     textArea:{
         backgroundColor:'white',
         width:"80%",
         textAlign:'center',
         opacity:0.7
     },
     textSty:{
        fontFamily:'NotoSans-Bold',
        fontSize:15,
        backgroundColor:'transparent'
     },
     backgrounText:{
        width:"80%",
        height:"5%",
        alignItems:"center",
        marginTop:'5%',
        borderBottomWidth:2,
        borderBottomColor:'white'
     },
     picker:{
        width:"35%",
        height:"5%",
        alignItems:"center",
        marginTop:'5%',
        borderBottomWidth:2,
        borderBottomColor:'white'
     }
})