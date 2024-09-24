import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Discover() {
  return (
    <View>
        <Image source={require('./../../assets/images/globo.gif')}
      style={{
        width:'100%',
        height:800,
      }}/>
    </View>
  )
}