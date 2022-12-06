import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChildImmunizationForm = () => {
  const [vaccineName, setVaccineName] = useState('');
  const [vaccinetiondate, setVaccinetiondate] = useState('');
  const [haveAllThePKsDueIn12MonthsBeenCompleted, setHaveAllThePKsDueIn12MonthsBeenCompleted] = useState('');
  const [haveAllThePKsDueIn24MonthsBeenCompleted, setHaveAllThePKsDueIn24MonthsBeenCompleted] = useState('');
  const [value, setvalue] = useState([]);
  const storeData = () => {
    let random = Math.floor(Math.random() * 10000000000);     
    let object = {id : random + Date.now(),  vaccineName: vaccineName, vaccinetiondate: vaccinetiondate,haveAllThePKsDueIn12MonthsBeenCompleted: haveAllThePKsDueIn12MonthsBeenCompleted,haveAllThePKsDueIn24MonthsBeenCompleted:haveAllThePKsDueIn24MonthsBeenCompleted  };
    let arr = [...value];
    arr.push(object);
    AsyncStorage.setItem('childImmunizationForm', JSON.stringify(arr));
    setvalue(arr);
    alert("Registration Successful")
  };


  const getData = () => {
    AsyncStorage.getItem('childImmunizationForm', (err, result) => {
      console.log('get result---', result);
      alert(result);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>बच्चे के टीकाकरण की जानकारी फार्म </Text>
      <TextInput
        placeholder="टीका का नाम"
        value={vaccineName}
        onChangeText={data => {
          setVaccineName(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="टीकाकरण की तिथि"
        value={vaccinetiondate}
        onChangeText={data => {
          setVaccinetiondate(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="12 माह में पड़ने वाले सभी पीके पूर्ण हो गए ?"
        value={haveAllThePKsDueIn12MonthsBeenCompleted}
        onChangeText={data => {
          setHaveAllThePKsDueIn12MonthsBeenCompleted(data);
        }}
        className="border-2 border-gray-200 p-2"
        />
        <TextInput
        placeholder="24 माह में पड़ने वाले सभी पीके पूर्ण हो गए ?"
        value={haveAllThePKsDueIn24MonthsBeenCompleted}
        onChangeText={data => {
          setHaveAllThePKsDueIn24MonthsBeenCompleted(data);
        }}
        className="border-2 border-gray-200 p-2"
      />



      <TouchableOpacity className="bg-black p-3" onPress={storeData}>
        <Text className="text-white text-center font-bold">दर्ज करें
</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-black p-3" onPress={getData}>
        <Text className="text-white text-center font-bold">
          Show All Appointment Details
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChildImmunizationForm;