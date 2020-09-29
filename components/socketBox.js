import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import SocketContext from '../context/socketContext';
import { CheckBox, ThemeProvider } from 'react-native-elements'


const SocketBox = () => {
  const context = useContext(SocketContext)

  return (
    <Button
      title="Botoia"
      color ={context.theme} />

  )


}
export default SocketBox;

