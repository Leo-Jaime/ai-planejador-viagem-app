import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Colors} from './../../constants/Colors';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name="mytrip"
          options={{
            tabBarLabel:'Viagens',
            tabBarIcon:({color})=><Ionicons name="location-sharp" size={30} color={color} />
          }}
        />
        <Tabs.Screen name="discover"
        options={{
          tabBarLabel:'Descobrir',
          tabBarIcon:({color})=><FontAwesome name="globe" size={30} color={color} />
        }}/>
        <Tabs.Screen name="profile"
        options={{
          tabBarLabel:'Perfil',
          tabBarIcon:({color})=><MaterialCommunityIcons name="alien" size={24} color="black" />
        }}/>
    </Tabs>
  )
}