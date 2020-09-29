import {	
	Alert
} from 'react-native';

export default showAlert = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false },
    );
}
