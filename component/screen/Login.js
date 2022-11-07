import { StyleSheet, Text, View,FlatList, Image, Button } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form';
import CustomInput from '../CustomInput';

const Login = ({navigation}) => {
    const {control, handleSubmit} = useForm()
      const onSubmit = (data) => {
        console.log(data);
      }
      const goToRegister = () => {
        navigation.navigate('Register')
      }
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 20}}>
      <Image source={require('../../image/icons8-sign-in-64.png')}/>
      <Text>Đăng nhập</Text>
      </View>
      <View style={{width: '100%'}}>
      <CustomInput
      control={control}
      name = 'userName'
      placeholder= 'User Name'
      rules={{required: 'Bạn chưa nhập User Name'}}
      />
      <CustomInput
      control={control}
      name = 'password'
      placeholder= 'Password'
      rules = {{
        required: 'Bạn chưa nhập password', 
        minLength:{value: 6, message: 'Mật khẩu phải lớn hơn 6 ký tự'}}}
      secureTextExtry
      />
      </View>
      <View style={{marginTop: 20}}>
      <Button title='Đăng nhập' onPress={handleSubmit(onSubmit)}/>
      <Text style={{marginVertical: 20}}>Tạo tài khoản tại đây</Text>
      <Button title='Đăng ký' onPress={goToRegister}/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center'
      },
      input:{
        width: '100%',
        height: 30,
      }
})
