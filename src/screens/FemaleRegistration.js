import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import load from 'lodash';

const FemaleRegistration = () => {
  const [femaleName, setFemaleName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [husbandName, setHusbandName] = useState('');
  const [religion, setReligion] = useState('');
  const [cast, setCast] = useState('');
  const [value, setvalue] = useState([]);
 // const [valueUpdate, setUpdate] = useState([]);
  const storeData = () => {
    let random = Math.floor(Math.random() * 10000000000);     
    let object = {id : random + Date.now(), femaleName: femaleName, aadharNumber: aadharNumber, mobileNumber: mobileNumber ,address: address, meetingDate: meetingDate, husbandName: husbandName,religion: religion, cast: cast };
    let arr = [...value];
    arr.push(object);
    AsyncStorage.setItem('femaleRegistration', JSON.stringify(arr));
    setvalue(arr);
    alert("Registration Successful")
  };


  const getData = () => {
    AsyncStorage.getItem('femaleRegistration', (err, result) => {
      console.log('get result---', result);
      alert(result);
    });
  };



  const updatedata = async  () => {
   
//      AsyncStorage.getItem('femaleRegistration',  (err, result) => {
     
//       let input = ["1679046257664"];
//       let [abc] = result
//     //  const exists = checkAdminRecord({ id: input });
//      const record =  abc.findOne({id:input})
//      console.log(record)
//     //   console.log('get result---', result);
//       alert(result);
 
// });
    // const updateData = {};
    // for (var attributename in object) {
    //   if (object[attributename] != null) {
    //     updateData[attributename] = object[attributename];
    //   }
    // }

  //   let user =  AsyncStorage.getItem('femaleRegistration');  
  //   let parsed = JSON.parse(AsyncStorage.getItem('femaleRegistration'));  
  //   alert(parsed.id);  
  //  }catch(err){
  //   console.error("error") 
  //  }
  // };
  // AsyncStorage.getItem('femaleRegistration', (err, result) => {
  //   // console.log('get result---', result.id[0]);
  //   const abc = JSON.parse(result);
  //   // const found = load.find(abc, item => item.id);
  //   // console.log(found)
  //  const xyz = []
  //  abc.forEach(element => {
  //   xyz.push(element.id)
    
  //  });
  //  console.log(xyz)
  //  let staticID = 1672447373798
  //  if(xyz.indexOf(staticID)>=0){

  //  }else(
  //   alert("User Not Found")
  //  )
  AsyncStorage.getItem('femaleRegistration', (err, result) => {
    // console.log('get result---', result.id[0]);
    const abc = JSON.parse(result);
  //  const found = load.find(abc, item => item.id);
  //  console.log("found",abc)
  //  const xyz = []
  //  abc.forEach(element => {
  //   console.log(element)
  //   xyz.push(element.id)
  
  // });
  // console.log("All Id's",xyz)
 
  const ID =1674273626504 ;
let updateObject = {id:ID, femaleName,aadharNumber,mobileNumber ,address,meetingDate,husbandName,religion,cast };
const fetchedDataWithId = load.find(abc, element => element.id === ID);
console.log(fetchedDataWithId)
let arr = {...fetchedDataWithId ,  updateObject};
// let namo = arr.push( updateObject);
AsyncStorage.setItem('femaleRegistration', JSON.stringify(arr));
setvalue(arr);
alert("Update Successful")


// AsyncStorage.mergeItem('femaleRegistration', (err) => {


// })

  //   for(let i = 0  ; i < abc[i].length ; i++){
  //     console.log(abc)
  //      console.log(abc[i])
  //      alert(abc[i])
  //   }

  //   for (var key in abc) {
  //     var arr = abc[key];
  //     for( var i = 0; i < arr.length; i++ ) {
  //         var obj = arr[ i ];
  //         console.log("obj",obj)
  //         for (var prop in obj) {
  //             if(obj.hasOwnProperty(prop)){
  //                 console.log(prop + " = " + obj[prop]);
  //             }
  //         }
  //     }
  //  }

    // for(let i = 0  ; i < abc[i] ; i++){
    //   console.log(abc)
    //    console.log(abc[i])
    //    alert(abc[i])
    // }
    // console.log('get abc ',abc );
    // console.log('get result---',abc[0] );
  //  alert(abc[0]);
  });
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>महिला पंजीकरण</Text>
      <TextInput
        placeholder="महिला का नाम"
        value={femaleName}
        onChangeText={data => {
          setFemaleName(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="आधार नंबर"
        value={aadharNumber}
        onChangeText={data => {
          setAadharNumber(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="मोबाइल"
        value={mobileNumber}
        onChangeText={data => {
          setMobileNumber(data);
        }}
        className="border-2 border-gray-200 p-2"
        />
        <TextInput
        placeholder="पता"
        value={address}
        onChangeText={data => {
          setAddress(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="भेंट की तिथि"
        value={meetingDate}
        onChangeText={data => {
          setMeetingDate(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="पति का नाम"
        value={husbandName}
        onChangeText={data => {
          setHusbandName(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
       <TextInput
        placeholder="धर्म"
        value={religion}
        onChangeText={data => {
          setReligion(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TextInput
        placeholder="जाती"
        value={cast}
        onChangeText={data => {
          setCast(data);
        }}
        className="border-2 border-gray-200 p-2"
      />
      <TouchableOpacity className="bg-black p-3" onPress={storeData}>
        <Text className="text-white text-center font-bold">रजिस्टर करें
</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-black p-3" onPress={updatedata}>
        <Text className="text-white text-center font-bold">Update करें
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

export default FemaleRegistration;