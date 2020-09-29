import React, { Component, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import ImageView from 'react-native-image-view';
import firebaseImg from '../components/firebaseImg';
import Spinner from 'react-native-loading-spinner-overlay';
import LinearGradient from 'react-native-linear-gradient';






export default class Imagecarrusel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: [require('../img/black.jpg'),require('../img/black.jpg'),require('../img/black.jpg')],
            PhotoNum: 0,
            viewimageArr: [],
            ImageVisible: false,
            loading: false
        };
        this.Camara = this.Camara.bind(this);
        this.Viewimage = this.Viewimage.bind(this)
        this.CloseView = this.CloseView.bind(this)
        this.IconSinal = this.IconSinal.bind(this)
        this.ClearImage = this.ClearImage.bind(this)
    }
    Camara() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                let arr = this.state.image
                let potho = this.state.PhotoNum + 1
                arr.splice(this.state.PhotoNum,1,source)
                this.setState({
                    image: arr,
                    PhotoNum: potho
                })

            }
        });
    }


    async Viewimage() {
        let arr = []
        let num = 0
        await this.state.image.forEach((dat) => {
            var json = {
                source: {
                    uri: dat.uri
                },
                title: num++
            }
            arr.push(json)
        })
        this.setState({
            viewimageArr: arr,
            ImageVisible: true
        })
    }

    IconSinal() {
        console.log(this.state.PhotoNum)
        if (this.state.PhotoNum <= 2) {
            return (
                <View>
                    <Icon
                        raised
                        name='camera'
                        type='font-awesome'
                        color='#f50'
                        onPress={this.Camara} />
                </View>
            )
        } else {
            return (
                <View style={{ flex: 0, flexDirection: 'row' }}>
                    <Icon
                        raised
                        name='check-circle'
                        type='font-awesome'
                        color='#f50'
                        onPress={async () => {
                            this.setState({
                                loading: true
                            })
                            const fireUrl = await firebaseImg(this.state.image)
                            this.props.jsonImg(fireUrl)
                            this.setState({
                                loading: false,
                                PhotoNum: 0
                            })
                        }} />
                    <Icon
                        raised
                        name='times-circle'
                        type='font-awesome'
                        color='#f50'
                        onPress={this.ClearImage} />
                </View>
            )
        }
    }

    ClearImage() {
        this.setState({
            PhotoNum: 0
        })
    }


    CloseView() {
        this.setState({
            ImageVisible: false
        })
    }


    render() {
        return (
            <LinearGradient 
                    colors={['#abebc6','#1d8348','#186a3b']}
                    start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                    style={styles.container}
                    >
                <this.IconSinal></this.IconSinal>
                <TouchableOpacity style={{ height: 100 }} onPress={this.Viewimage}>
                    <View style={{ flex: 0, flexDirection: 'row' }}>
                        <Image source={this.state.image[0]} style={{ width: 100, height: 100 }}></Image>
                        <Image source={this.state.image[1]} style={{ width: 100, height: 100 }}></Image>
                        <Image source={this.state.image[2]} style={{ width: 100, height: 100 }}></Image>
                    </View>
                </TouchableOpacity>
                <ImageView
                    images={this.state.viewimageArr}
                    imageIndex={0}
                    onClose={this.CloseView}
                    isVisible={this.state.ImageVisible}
                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                />
                <Spinner
                    visible={this.state.loading}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'27%',
        width:'100%',
        alignItems: 'center',
        marginTop:'5%',
        backgroundColor:'#abeef5',
        borderBottomWidth:2,
        borderTopWidth:1,
        borderTopColor:'white',
        borderBottomColor:'white'
    },

});
