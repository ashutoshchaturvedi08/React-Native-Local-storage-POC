import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

const Procreation = () => {
  const [boyDOB, setBoyDOB] = useState('');
  const [boyName, setBoyName] = useState('');
  const [boyGender, setBoyGender] = useState('');
  const [boyReligion, setBoyReligion] = useState('');
  const [boyCast, setBoyCast] = useState('');
  const [boyWeight, setBoyWeight] = useState('');
  const [boyBirthPlace, setBoyBirthPlace] = useState('');
  const [boyMomName, setBoyMomName] = useState('');
  const [value, setvalue] = useState([]);
  const storeData = () => {
    let object = {femaleName: femaleName, aadharNumber: aadharNumber, mobileNumber: mobileNumber ,address: address, meetingDate: meetingDate, husbandName: husbandName,religion: religion, cast: cast };
    let arr = [...value];
    arr.push(object);
    AsyncStorage.setItem('procreations', JSON.stringify(arr));
    setvalue(arr);
    alert("Registration Successful")
  };


  const getData = () => {
    AsyncStorage.getItem('procreations', (err, result) => {
      console.log('get result---', result);
      alert(result);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>प्रसव जानकारी फार्म </Text>
      <TextInput
        placeholder="प्रसव तारीख  / बच्चे की जन्म तिथि "
        value={boyDOB}
        onChangeText={data => {
          setBoyDOB(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="बच्चे का नाम"
        value={boyName}
        onChangeText={data => {
          setBoyName(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="बच्चे का लिंग"
        value={boyGender}
        onChangeText={data => {
          setBoyGender(data);
        }}
        className="border-2 border-gray-200 p-2"
        />
        <TextInput
        placeholder="बच्चे की जाती"
        value={boyReligion}
        onChangeText={data => {
          setBoyReligion(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="बच्चे का धर्म"
        value={boyCast}
        onChangeText={data => {
          setBoyCast(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="बच्चे का वजन"
        value={boyWeight}
        onChangeText={data => {
          setBoyWeight(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
       <TextInput
        placeholder="बच्चे का जन्म स्थान"
        value={boyBirthPlace}
        onChangeText={data => {
          setBoyBirthPlace(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="बच्चे की माँ का नाम"
        value={boyMomName}
        onChangeText={data => {
          setBoyMomName(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TouchableOpacity className="bg-black p-3" onPress={storeData}>
        <Text className="text-white text-center font-bold">दर्ज करें
</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-black p-3" onPress={getData}>
        <Text className="text-white text-center font-bold">
          Show All Females Details
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Procreation;