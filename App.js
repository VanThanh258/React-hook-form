import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './components/Header/header';
import Item from './components/Item/Item';
import Footer from './components/footer/footer';

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [retypePassword,setRetypePassword] = useState('');
  const [show,setShow] = useState(false);
  const data = [
    {
      lable: 'Name',
      title: 'John Doe',
      changeText: setName,
      value: name,
    },
    {
      lable: 'Email',
      title: 'johndoe@example.com',
      changeText: setEmail,
      value: email,
    },
    {
      lable: 'Password',
      title: '.........',
      changeText: setPassword,
      value: password,
    },
    {
      lable: 'Retype Password',
      title: '.........',
      changeText: setRetypePassword,
      value: retypePassword,
    },
  ]
  const signUp = () => {
    return alert('Chưa điền đủ thông tin')
  }
  const login = () => {
      return alert(`Xin chào ${name}`)   
  }
  const resetForm = () => {
     setName('')
     setEmail('')
     setPassword('')
     setRetypePassword('')
  }
  const showValue = () =>{
    setShow(!show);
  }
  return (
    <View style={styles.container}>
      <Header/>
        {
          data.map((item,index) => {
           return <Item showValue = {show}  value={item.value} changeText={ text => item.changeText(text)} key={index} lable={item.lable} title={item.title}/>
          })
        }
        <Footer lable = 'Sign Up' color = '#E52E04' onPress={signUp} />
        <Footer lable = 'Log in' color = '#F8B55C' onPress={login}/>
        <Footer lable = 'Reset Form' color = 'gray' onPress={resetForm}/>
        <Footer lable = 'ShowValue' color = 'green' onPress = {showValue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
