import { View, Text,Image,StyleSheet,TextInput,Dimensions } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Item = (props) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={{color:'#DB310B',fontWeight:'bold'}}>{props.lable}</Text>
        </View>
        <TextInput value = {props.value} style={styles.input} placeholder={props.title} onChangeText={props.changeText} />
        {props.lable === 'Email'  && <Text style={styles.bot}>or,Register with a phone number</Text>}
        {props.lable === 'Password' && <Text style={{textAlign:'right',color:'gray'}}>Password must be at least 6 character</Text>}
        <Text>{props.lable}  {props.showValue && props.value}</Text>
    </View>
  )
}

export default Item;

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 30,
    },
    lable:{
        color: '#DB310B',
    },
    input:{
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        paddingVertical: 10,
    },
    bot:{
        color: '#DB310B',
        textDecorationLine:'underline',
        textAlign:'right',
    }
})