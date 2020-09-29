import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import socket from '../context/socketContext'
import styles from '../styles/globalStyles'
import ImageForGrid from './dinamic/imageForGrid'


const logItem = () => {

    const socketContext = React.useContext(socket);
    const [images, setImages] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [initialized, setInitialized] = React.useState(false);
    const getAllImages = async () => {
        socketContext.emit('SeeLogs')
        socketContext.on('Logs', (dataServer) => {
            console.log(dataServer)
            let imgs = images.concat(dataServer)
            setImages(imgs)
            setTotal(dataServer.total)
            setList(imgs)
          
        });
              
    }
    useEffect(() => {
        if (!initialized) {
            getAllImages();
            setInitialized(true);
        }
    }, [])


    const [logData, setList] = useState()

    if (logData) {
        console.log('entrar en load', logData)
        return (
            <View>
                <Text>Imagenes</Text>
               
                <FlatList
                    data={logData}
                    renderItem={({ item, index }) => (
                        <ImageForGrid
                            imgData={item}
                        />
                    )}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.activityIndicatorStyle}>

               
                <ActivityIndicator size="large" />

            </View>
        )
    }

}

export default logItem;