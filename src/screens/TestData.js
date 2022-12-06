import { View, Text,TextInput,TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const array =[]

const TestData = ()=>{
    const [name,setName] =useState('');
    const [surname,setSurname] =useState('');
    const [age,setAge] =useState('');
    const [value,setvalue] =useState('');
   // const array =[]

    const storeData = async  () => {
    try{
     //  object = []
       const object = {
            name: name,
            surname: surname ,
            age: age,
            id: Date.now()
            
          };

       
           // let nameString = name.stringify() ;
           if(object){
           
      
           //await AsyncStorage.setItem('users', JSON.stringify(object));
           array.push( await AsyncStorage.setItem('users', JSON.stringify(object)));
          
           await console.log("array" + array)
           console.log("array0" + array[0])
           console.log("array1" + array[1])
           console.log("array2" + array[2])
           const result = await AsyncStorage.getItem('users');
           if (result !== null) await setName(JSON.parse(result));
          
           
           
          //const b = await AsyncStorage.getItem('users', (err, result) => {
           // console.log(result);
            alert('data saved'+ result  )
           
        //    let b =  AsyncStorage.setItem('surname', surname); setSurname('');
        //    let c = AsyncStorage.setItem('age', age); setAge('');
         
           
           }else{
            alert('Please Fill the data')
           }
          }catch(e){
            console.error("error");

          }
           
       };
      const getData  = async () => {

      
          try {

   


            // const resultGet = await AsyncStorage.getItem('users').then(data =>{
            //   if(data !== null){
            //     setvalue(JSON.parse(data))
            //   }
            // })
            
            // .catch((error) => console.log(eror));
            // if (resultGet !== null) await setvalue(JSON.stringify(resultGet));
            // console.log("value",value);
            // for (let i = 0; i < resultGet.length; i++) {
            //   console.log("resultGet.length",resultGet.length);
            //   console.log("resultGet.length[]",resultGet.length[i])
            // }



            // const keys = await AsyncStorage.getAllKeys();
            // const result = await AsyncStorage.multiGet(keys);
            // const obj = Object.fromEntries(result);
            // Object.keys(obj).forEach(key => {
            //   obj[key] = JSON.parse(obj[key]);
            //  console.log (obj[key])
            // });


              // const keys = await AsyncStorage.getAllKeys('users')
              // const items = await AsyncStorage.multiGet('users')
              // console.log("items", items )
              // return items
          } catch (e) {
              console.log("problem")
          }
      
      


        // AsyncStorage.multiGet(['users'], (err, stores) => {
        //   stores.map((result, i, store) => {
        //     let key = store[i][0];
        //     let val = store[i][1];
        //     console.log(key, val);
        //   });
        // });


          }

        // AsyncStorage.multiGet('users', (err, result) => {
        //   console.log(result);
        //   alert(result);
        // })
        //    let abc =[]
        //   abc =  
        // const nameValue =  AsyncStorage.getItem('name')
        // const surnameValue =  AsyncStorage.getItem('surname')
        // const ageValue =  AsyncStorage.getItem('age')
        //   alert(abc);
        // const valuea = JSON.parse(value)
          // .then((nameValue,surnameValue,ageValue)=>{
          //   console.log(nameValue,surnameValue,ageValue)
          //  return value}
          //    alert( nameValue,surnameValue,ageValue);}
          //    )
          // }

        //   const value = await AsyncStorage.getItem('name')
        //   if(value !== null) {
        //     alert(`Data:${val     ue}`)
        //     }
            // value previously stored
          
       
      
      return (
        <SafeAreaView style = {{flex:1}}> 
       
          <Text>Form</Text>
          <TextInput placeholder='Name' value={name} onChangeText={data =>{setName(data )}} className='border-2 border-gray-200 p-2' />
          <TextInput placeholder='Surname' value={surname} onChangeText={data =>{setSurname(data )}} className='border-2 border-gray-200 p-2' />
          <TextInput placeholder='Age' value={age} onChangeText={data =>{setAge(data )}} className='border-2 border-gray-200 p-2' />
          <TouchableOpacity className='bg-black p-3' onPress={storeData}> 
            <Text className='text-white text-center font-bold'>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-black p-3' onPress={getData}>
            <Text className='text-white text-center font-bold'>Fetch saved Name</Text>
          </TouchableOpacity>
     
        </SafeAreaView>
      )

}
export default TestData