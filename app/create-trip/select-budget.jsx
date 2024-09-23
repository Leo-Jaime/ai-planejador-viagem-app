import { View, Text ,FlatList,TouchableOpacity, Alert, ToastAndroid} from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import { useNavigation ,useRouter} from 'expo-router'
import {Colors} from './../../constants/Colors'
import { selectBudget } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import {CreateTripContext} from "./../../context/CreateTripContext";


export default function SelectBudget() {
    const [selectedBudget,setSelectedBudget] = useState()
    const navigation=useNavigation();
    const [selectedOption,setSelectedOtpion]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext)
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[]);

    const onSelectedBudget = ()=>{
        if(!selectedBudget){
            ToastAndroid.show('Selecione o orçamento',ToastAndroid.LONG)
            return;
        }
        setTripData({
            ...tripData,
            budget:selectedBudget
        })
        router.push('/create-trip/review-trip')
    }

    useEffect(()=>{
        console.log(tripData)
    },[tripData])


  return (
    <View style={{
        paddingTop:75,
        padding:25
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Orçamento</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize:20,
        }}
        >Escolha hábitos de gasto para sua viagem</Text>
        <FlatList 
          data={selectBudget}
          renderItem={({item,index})=>(
            <TouchableOpacity
              onPress={()=>setSelectedBudget(item)}
              style={{
                marginVertical:10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedBudget}/>
            </TouchableOpacity>
          )}
        />
        {/* botao continue */}
        <TouchableOpacity
          onPress={onSelectedBudget}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            marginTop: 20,
            paddingHorizontal: 30,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: 'outfit-medium',
            }}
          >Continue</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}