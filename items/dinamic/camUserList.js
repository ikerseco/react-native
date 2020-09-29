import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image    
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DinamicUserList = (props) => {
    console.log(props)
    const [dataList, setData] = useState(props.dataList)
    console.log(dataList)
    console.log(dataList.imageUrl[0])
    
    return (
        <View style={styles.listItemContainer} >
            <View style={styles.avatarContainer}>
                <Image

                    source={{uri:dataList.imageUrl[0]}}
                    style={{ width: 60, height: 60,  borderRadius: 30 }}></Image>
            </View>
            <View style={styles.callDetailsContainer} >
                <View style={styles.nameContainer} >
                    <View >
                        <Text style={styles.nameText}>{dataList.name}   {dataList.surname}</Text>
                    </View>
                </View>
                <View style={styles.callDetailsContainerWrap}>
                    <View style={styles.iconContainer} >
                        <Icon name={dataList.allowed ? "check" : "not-interested"} size={20} color={dataList.allowed ? "#ed788b" : "#075e54"} />
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

export default DinamicUserList


