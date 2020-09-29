import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

//Añadir esto para imagen
/*
  <Image

                    source={{ uri: imgList }}
                    style={{ width: 150, height: 150 }}></Image>
*/

const DinamicGrid = (props) => {
    console.log(props)
    const [imgList, setData] = useState(props.imgData)
    console.log(imgList)


    return (
        <View style={styles.listItemContainer} >
            <View style={styles.avatarContainer}>
                <Text style={styles.nameText} >{imgList.ImageAsoc} </Text>
            </View>

            <View style={styles.callDetailsContainer} >

                <View style={styles.callDetailsContainerWrap}>

                    <View style={styles.iconContainer} >
                        <View >
                            <Text style={styles.nameText} >Nivel: {imgList.Danger}   </Text>
                        </View>
                        <Text style={styles.nameText} >{imgList.Type} </Text>
                    </View>

                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    avatarContainer: {
        flex: 0,
        padding: 3
    },
    iconContainer: {
        flex: 1,
        alignItems: "flex-end",
        fontSize: 12
    },
    callDetailsContainer: {
        flex: 4,
        borderBottomColor: "rgba(92,94,94,0.5)",
        borderBottomWidth: 0.25
    },
    callDetailsContainerWrap: {
        flex: 1,
        flexDirection: "row",
        padding: 5
    },
    nameContainer: {
        alignItems: "flex-start",
        flex: 1,
        padding: 2
    },
    nameText: {
        fontWeight: "bold",
        color: "#000"
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60
    }
});

export default DinamicGrid

