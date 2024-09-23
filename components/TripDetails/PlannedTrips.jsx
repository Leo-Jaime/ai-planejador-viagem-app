import { View, Text } from 'react-native'
import React from 'react'

export default function PlannedTrips({details}) {
  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontSize:20,
        fontFamily: 'outfit-bold',
      }}>🏕️ Roteiro de Viagem</Text>
      
    </View>
  )
}