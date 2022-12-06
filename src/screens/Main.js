import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Main = () => {
    const [name,setName] =useState('');
    const [uid,setUid] =useState('');
    const [password,pawd]= useState('');
    
    const register = (text)=>{
setName(text);
    }
  return (
    <View className='flex mx-4 my-2 space-y-4'>
      <Text>Form</Text>
      <TextInput placeholder='Name' value={name} onChange={text =>{setName(text)}} className='border-2 border-gray-200 p-2' />
      <TextInput placeholder='User Id' value={uid} onChange={text =>{setUid(text)}} className='border-2 border-gray-200 p-2' />
      <TextInput placeholder='Password' value={password} onChange={text =>{pawd(text)}} className='border-2 border-gray-200 p-2' />
      <TouchableOpacity className='bg-black p-3' onPress={register}>
        <Text className='text-white text-center font-bold'>Register</Text>
      </TouchableOpacity>
      <Text>{setName}</Text>
    </View>
  )
}

export default Main