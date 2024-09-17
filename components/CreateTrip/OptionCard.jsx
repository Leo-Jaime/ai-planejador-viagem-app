import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
export default function OptionCard({option, selectedOption}) {
  return (
    <View style={[{
        padding: 25,
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    
    },selectedOption?.id==option?.id&&{borderWidth:3}]}>
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
                fontSize: 15,
                fontFamily:'outfit',
                color: Colors.GRAY,
            }}
        >
            {option?.desc}
        </Text>
        </View>
        {/* icone */}
        <Text style={{
            marginTop:15,
            fontSize: 25,
        }}>{option?.icon}</Text>
    </View>
  )
}