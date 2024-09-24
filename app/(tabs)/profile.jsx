import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
      <Image source={require('./../../assets/images/nave.gif')}
      style={{
        width:'100%',
        height:800,
      }}/>
    
    </View>
  )
}