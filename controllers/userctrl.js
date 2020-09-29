import React, { useContext } from 'react';
import userContext from '../context/userContext';

const logItem = () => {

    const context = useContext(userContext);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: context.state.userInfo.user.photo }}
                style={styles.imageStyle}
            />
            <Text style={styles.text}>
                Name: {context.state.userInfo.user.name}{' '}
            </Text>
            <Text style={styles.text}>
                Email: {context.state.userInfo.user.email}
            </Text>
            <TouchableOpacity style={styles.button} onPress={this._signOut}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <Button
                onPress={() => {
                    this.props.navigation.navigate('Home');
                }} title='Home'>
            </Button>
        </View>
    );
}



export default logItem;