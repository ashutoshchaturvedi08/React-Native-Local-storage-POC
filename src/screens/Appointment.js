import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';

const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [pregnancyInspectionDate, setPregnancyInspectionDate] = useState('');
  const [pregnancyInspectionInstitude, setPregnancyInspectionInstitude] = useState('');
  const [countOfpregnancyWeeks, setCountOfpregnancyWeeks] = useState('');
  const [bP, setBP] = useState('');
  const [systolicDiastolic, setSystolicDiastolic] = useState('');
  const [hP, setHP] = useState('');
  const [sugarTest, setSugarTest] = useState('');
  const [bloodSugarTest, setBloodSugarTest] = useState('');
  const [tetanusDate, setTetanusDate] = useState('');
  const [folicAcidTabletCount, setFolicAcidTabletCount] = useState('');
  const [value, setvalue] = useState([]);
  const storeData = () => {
    let random = Math.floor(Math.random() * 10000000000);     
    let object = {id : random + Date.now(), appointmentDate: appointmentDate, pregnancyInspectionDate: pregnancyInspectionDate, countOfpregnancyWeeks: countOfpregnancyWeeks ,bP: bP, systolicDiastolic: systolicDiastolic, hP: hP,sugarTest: sugarTest, bloodSugarTest: bloodSugarTest , tetanusDate: tetanusDate, folicAcidTabletCount: folicAcidTabletCount };
    let arr = [...value];
    arr.push(object);
    AsyncStorage.setItem('appointments', JSON.stringify(arr));
    setvalue(arr);
    alert("Registration Successful")
  };


  const getData = () => {
    AsyncStorage.getItem('appointments', (err, result) => {
      console.log('get result---', result);
      alert(result);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>भेंट दर्ज करें तिथि</Text>
      <TextInput
        placeholder="भेंट की तिथि"
        value={appointmentDate}
        onChangeText={data => {
          setAppointmentDate(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="गर्भावस्ता जांच तिथि"
        value={pregnancyInspectionDate}
        onChangeText={data => {
          setPregnancyInspectionDate(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
        <TextInput
        placeholder="गर्भावस्ता जांच संस्थान"
        value={pregnancyInspectionInstitude}
        onChangeText={data => {
          setPregnancyInspectionInstitude(data);
        }}
        className="border-2 border-gray-200 p-2"
        />
      <TextInput
        placeholder="गर्भावस्ता के हफ्ते की संख्या"
        value={countOfpregnancyWeeks}
        onChangeText={data => {
          setCountOfpregnancyWeeks(data);
        }}
        className="border-2 border-gray-200 p-2"
        />
        <TextInput
        placeholder="बीपी"
        value={bP}
        onChangeText={data => {
          setBP(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="सिस्टोलिक डिजस्टरोलिक"
        value={systolicDiastolic}
        onChangeText={data => {
          setSystolicDiastolic(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="एच पी"
        value={hP}
        onChangeText={data => {
          setHP(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
       <TextInput
        placeholder="शुगर जांच"
        value={sugarTest}
        onChangeText={data => {
          setSugarTest(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="रक्त शुगर जांच"
        value={bloodSugarTest}
        onChangeText={data => {
          setBloodSugarTest(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="टीटी का टिका दिनांक"
        value={tetanusDate}
        onChangeText={data => {
          setTetanusDate(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="फोलिक एसिड गोलियों की संख्या"
        value={folicAcidTabletCount}
        onChangeText={data => {
          setFolicAcidTabletCount(data);
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

export default Appointment;