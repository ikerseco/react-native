import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, Image, Alert } from 'react-native';
import socket from '../context/socketContext'
const ControlItem = () => {
   
    const socketContext = React.useContext(socket);
    console.log(socketContext)
    pressInOut = (data) => {
        console.log(data)
        socketContext.emit('move', data);
    }
    onAuto = () => {
        this.pressInOut('Auto')
        Alert.alert(
            'You are runnig in auto mode',
            'Press exit to return manual mode',
            [

                { text: 'Exit', onPress: this.offAuto },
            ],
        );

    }
    offAuto = () => {
        this.pressInOut('Stop')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Button
                    title="Auto-mode"
                    onPress={this.onAuto}>

                </Button>
            </View>
            <View style={styles.centerContainer}>
                <View style={styles.buttonOne}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPressIn={() => { this.pressInOut('Adelante') }}
                        onPressOut={() => { this.pressInOut('Stop') }}
                        style={styles.TouchableOpacityStyle}>
                        <Image style={styles.icon}
                            source={require('../img/flechaArr.jpg')} />
                        <Text style={styles.info}>Adelante</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonTwo}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPressIn={() => { this.pressInOut('Izquierda') }}
                        onPressOut={() => { this.pressInOut('Stop') }}
                        style={styles.TouchableOpacityStyle}>
                        <Image style={styles.icon}
                            source={require('../img/flechaIzq.jpg')} />
                        <Text style={styles.info}>Izquierda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPressIn={() => { this.pressInOut('Derecha') }}
                        onPressOut={() => { this.pressInOut('Stop') }}
                        style={styles.TouchableOpacityStyle}>
                        <Image style={styles.icon}
                            source={require('../img/flecha.jpg')} />
                        <Text style={styles.info}>Derecha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonTree} >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPressIn={() => { this.pressInOut('Atras') }}
                        onPressOut={() => { this.pressInOut('Stop') }}
                        style={styles.TouchableOpacityStyle}>
                        <Image style={styles.icon}
                            source={require('../img/flechaAb.jpg')} />
                        <Text style={styles.info}>Atras</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    topContainer: {
        flex: 1,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        height: '20%',
    },
    centerContainer: {
        //flex: 1,
        //alignItems: 'center',
        marginBottom: '30%',
        height: 300
    },
    AxisPad: {
        width: 200,
        height: 300,
        justifyContent: 'center',
    },
    arrow: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    arrowCenter: {
        flex: 0,
        justifyContent: 'center',
        width: 200
    },
    buttonOne: {
        flex: 1,
        alignItems: 'center',
        marginBottom: '15%'
    },
    buttonTwo: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    buttonTree: {
        flex: 1,
        alignItems: 'center',
        marginTop: '15%',
    },
    icon: {
        width: 60,
        height: 60,
    }
});
export default ControlItem;