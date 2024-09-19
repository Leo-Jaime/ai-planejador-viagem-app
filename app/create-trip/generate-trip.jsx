import { View, Text, Image } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors';
export default function GenerateTrip() {
  return (
    <View style={{
        padding:25,
        marginTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
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
        Estamos preparando a viagem do seus sonhos
      </Text>
      <Image  source={require('./../../assets/images/tela-carregamento.gif')}
      style={{
        alignContent: 'center',
      }} />
    </View>
  )
}