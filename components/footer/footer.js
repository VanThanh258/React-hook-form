import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const Footer = (props) => {
  return (
    <View style={{paddingHorizontal: 30}}>
        <TouchableOpacity 
        onPress={props.onPress}
        style={
          {paddingVertical: 20,
          alignItems:'center',
          backgroundColor:props.color,
          width: '100%',
          marginTop: 5,
          borderRadius: 20}}>
      <Text style={{textAlign:'center',color:'white',fontSize:15,}}>{props.lable}</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default Footer;
