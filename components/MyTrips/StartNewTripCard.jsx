import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from './../../constants/Colors';
export default function StartNewTripCard() {
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display: 'flex',
        alignItems:'center',
    }}>
        <Ionicons name="location-sharp" size={30} color='black' />
      <Text style={{
        marginTop:20,
        fontSize:25,
        fontFamily:'outfit-medium',
      }}
      >Nenhuma viagem planejada</Text>

      <Text style={{
        marginTop:20,
        fontSize:20,
        fontFamily:'outfit',
        textAlign: 'center',
        color:Colors.GRAY,
      }}
      >Parece que é hora de planejar uma nova experiência de viagem! Comece agora</Text>
      <TouchableOpacity
      style={{
        marginTop:25,
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        paddingHorizontal:30,
      }}>
        <Text style={{
            fontFamily:'outfit-medium',
            color:Colors.WHITE,
            fontSize:25,
        }}>Comece uma viagem</Text>
      </TouchableOpacity>
    

    </View>
  )
}