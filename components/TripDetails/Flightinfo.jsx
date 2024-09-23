import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors} from './../../constants/Colors'
export default function FlightInfo({flightData}) {
    //{flightData?.preco}
  return (
    <View style={{
        marginTop:20,
        backgroundColor:Colors.LIGHT_GRAY,
        borderWidth:1,
        borderColor:Colors.GRAY,
        padding:10,
        borderRadius:15
    }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}> 
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 20
      }}>🛸 Voos</Text>
      {/* Colocar algum link para direcionar o usuario para comprar a passagem */}
      <TouchableOpacity style={{
        backgroundColor:Colors.PRIMARY,
        padding:5,
        width:100,
        borderRadius:7,
        marginTop:7
      }}>
        <Text style={{
            textAlign: 'center',
            color: Colors.WHITE,
            fontFamily: 'outfit',

        }}>reserve aqui</Text>
      </TouchableOpacity>
      </View>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 17
      }}>Companhia Aérea</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 17
      }}>Preço:{flightData?.preco}</Text>

    </View>
  )
}