import { View, Text,StyleSheet,Image,Button,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import CustomInput from '../CustomInput'
import {useForm} from 'react-hook-form'

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPhoneNumberVN = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const Register = ({navigation}) => {
  const {control, handleSubmit, watch} = useForm();
  const pass = watch('password');
  const onRegister = (data) => {
    navigation.goBack();
  }
  return (
      <View style={styles.container} >
      <View style={{marginBottom: 10}}>
      <Image source={require('../../image/icons8-register-64.png')}/>
      <Text>Đăng ký</Text>
      </View>
      <KeyboardAvoidingView style={{width: '100%'}} behavior = 'position' keyboardVerticalOffset={60}>
      <CustomInput
      control={control}
      name = 'userName'
      placeholder= 'User Name'
      rules={{
        required: 'Mời bạn nhập userName',
        minLength: {value: 3, message: 'userName lớn hơn 3 ký tự'},
        maxLength:{value: 20, message: 'không được vượt quá 20 ký tự'}
      }}
      />
      <CustomInput
      control={control}
      name = 'email'
      placeholder= 'Email'
      rules = {{
        required: 'Mời bạn nhập Email',
        pattern: {value: regexEmail, message: 'Không đúng định dạng email'}
      }}
      />
      <CustomInput
      control={control}
      name = 'password'
      placeholder= 'Password'
      rules = {{
        required: 'Mời bạn nhập mật khẩu', 
        minLength:{value: 6, message: 'Mật khẩu phải lớn hơn 6 ký tự'}
      }}
      secureTextExtry
      />
      <CustomInput
      control={control}
      name = 'confirmPassword'
      placeholder= 'Confirm Password'
      rules = {{
        required: 'Mời bạn xác nhận mật khẩu', 
        validate: value => value === pass || 'Mật khẩu không trùng khớp'
        }}
      secureTextExtry
      />
      <CustomInput
      control={control}
      name = 'phoneNumber'
      placeholder= 'Phone Number'
      rules = {{
        required: 'Mời bạn nhập số điện thoại', 
        pattern: {value: regexPhoneNumberVN, message: 'Mời bạn nhập lại số điện thoại'}
      }}
      />
      </KeyboardAvoidingView>
      <View style={{marginTop: 20}}>
      <Button title='Đăng ký' onPress={handleSubmit(onRegister)}/>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    input:{
      width: '100%',
      height: 30,
    }
})