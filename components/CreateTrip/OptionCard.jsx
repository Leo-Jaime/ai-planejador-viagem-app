import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
export default function OptionCard({option}) {
  return (
    <View style={{
        padding: 30,
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    }}>
      <View>
        {/* titulo */}
      <Text
            style={{
                fontSize: 20,
                fontFamily:'outfit-bold',
            }}
        >{option?.title}</Text>
        {/* descricao */}
        <Text
            style={{
                fontSize: 17,
                fontFamily:'outfit',
                color: Colors.Gray,
            }}
        >
            {option?.description}
        </Text>
        </View>
        {/* icone */}
        <Text style={{
            fontSize: 30,
        }}>{option?.icon}</Text>
    </View>
  )
}