import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'
import { TextInput } from 'react-native'

const CustomInput = ({control, name, placeholder, rules ,secureTextExtry}) => {
    
  return (
        <Controller
        control={control}
        name = {name}
        rules = {rules}
        render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => (
            <>
            <View style={[styles.container, {borderColor: error ? 'red': '#e8e8e8'}]}>
            <TextInput
            value={value}
            onChangeText={onChange}
            onBlur = {onBlur}
            placeholder={placeholder}
            style = {styles.input}
            secureTextEntry={secureTextExtry}
            />
            </View>
            {error && <Text style={styles.error}>{error.message || 'error'}</Text>}
            </>
        )}
        />
    
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e8e8e8',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 20,
    },
    input:{
        width: '100%',
        height: 30,
    },
    error:{
      color: 'red', 
      alignSelf: 'flex-start'
    }
})