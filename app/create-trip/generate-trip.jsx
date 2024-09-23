import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Colors} from './../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import {auth, db} from './../../configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function GenerateTrip() {

  const {tripData,setTripData}=useContext(CreateTripContext);
  const [loading,setLoading]=useState(false);
  const router=useRouter();
  const user=auth.currentUser;
  
  useEffect(() => {
    tripData&&GenerateAirTrip()
  },[]);

  const GenerateAirTrip=async()=>{
    setLoading(true);
    const FINAL_PROMPT=AI_PROMPT
    .replace('{location}',tripData?.locationInfo?.name)
    .replace('{totalDays}',tripData?.totalNoOfDays)
    .replace('{totalNight}',tripData?.totalNoOfDays-1)
    .replace('{traveler}',tripData?.travelerCount?.title)
    .replace('{budget}',tripData?.budget?.title)
    .replace('{totalDays}',tripData?.totalNoOfDays)
    .replace('{totalNight}',tripData?.totalNoOfDays-1)
    
    console.log(FINAL_PROMPT);

    // Verificar respota do gemini
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    setLoading(false)
    
     
    const tripResp=JSON.parse(result.response.text());
    const docId=(Date.now()).toString();
    
    const result_=await setDoc(doc(db, "UserTrips",docId), {
      userEmail:user.email, 
      tripPlan:tripResp, // resultados da IA
      tripData:JSON.stringify(tripData), // dados de selecao do usuario
      docId:docId
    
  });
    router.push('(tabs)/mytrip');

  
  }

  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%',
        alignItems: 'center'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign: 'center'
      }}>
        Por favor Aguarde...
      </Text>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20,
        textAlign: 'center',
        marginTop:40,
      }}>
        Estamos preparando a viagem dos seus sonhos
      </Text>
      <Image  source={require('./../../assets/images/tela-carregamento.gif')}
      style={{
        alignContent: 'center',
        objectFit: 'center',
      }} />
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'Center',

      }}>Os dados estão viajando rápido!</Text>

      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'Center',

      }}>Aguarde a chegada.</Text>

    </View>
  )
}