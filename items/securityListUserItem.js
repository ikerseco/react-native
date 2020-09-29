import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList, ActivityIndicator } from 'react-native';

import DinamicUserList from './dinamic/camUserList'
import { DATA } from '../data/data';
const SecurityListUserItem = () => {

    useEffect(() => {
        fetch(DATA)
            .then(res => res.json())
            .then(userList => setList(userList))
    }, [])


    const [listUser, setList] = useState()

    if (listUser) {
        console.log('entrar en load', listUser)
        return (
            <View>
                <Text>Mi lista de usuarios</Text>
                <FlatList
                    data={listUser.camUsers}
                    
                    renderItem={({ item, index }) => (
                        <DinamicUserList

                            dataList={item}
                        />
                    )}
                   
                />
                
            </View>
        );
    } else {
        return (
            <View>

                <Text>no tengo lista</Text>
                <ActivityIndicator size="large" />

            </View>
        )
    }

}

export default SecurityListUserItem;