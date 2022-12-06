import React ,{useState,useEffect} from 'react';
import{
    Button,
    TextInput,
    StyleSheet,
    Text,
    ScrollView,
    View,Image,Touchable
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

//const test = ({navigation})=>{
//     const[netinfo, setNetInfo]= userState('');
//     useEffect(()=>{
//         const unbscribe = NetInfo.addEventListener((state)=>{
//             setNetInfo(
//                 `Connction type: ${state.type}
//                 Is Connected?: ${state.isConnected}
//                 IP Address: ${state.details.ipAddress}`,
//             );
//         });
//         return()=>{
//             unbscribe();
//         };
//     },[])
// }


const Test = ({navigation}) => {
    const [netInfo, setNetInfo] = useState('');


    useEffect(()=>{
        const data = NetInfo.addEventListener((state)=>{
            setNetInfo();
        })
        return()=>{
            data();
        }
    },[])
    const handleGetNetInfo = () => {
    NetInfo.fetch().then((state) =>{
    console.log(state)
    alert(`connection Type:${state.type
    } IsConnected?: ${state.isConnected}`)
    })
    }; 
    return (
    <ScrollView>
    <View style={styles.container}>
    <Text>Net Information</Text>
    <Button title='Get Net Information' onPress={()=>{handleGetNetInfo()}}></Button>
    </View>
    </ScrollView>
    );
    };
    const styles = StyleSheet.create({
    container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
   
    }
    }); 
    export default Test
