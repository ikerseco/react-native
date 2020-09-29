import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const loginItem = () => {
    return (
        <Text>PantallaLogeado</Text>
    )
    /*const UContext = React.useContext(UserContext);
        return (
            <Container>
                <Content>
                
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: UContext.img}} />
                                <Body>
                                <Text>{ UContext.name }</Text>
                                <Text note>{ UContext.email }</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );*/
}
export default loginItem;