import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'


export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')} 
      style={{  
        width: '100',//Quando coloca como 100% a foto some do celular.
        height: 500,
      
      }}
      />

      <View style={styles.container}>
        <Text 
        style={{
            fontSize: 24,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop: 20
        }}
        >Planeje Sua Viagem com IA</Text>
        <Text 
        style={{
          fontFamily: 'outfit',
          fontSize: 17,
          marginTop: 10,
          textAlign: 'justify',
          color: Colors.GRAY,
        }}>Descubra sua próxima aventura sem esforço. Itinerários personalizados ao seu alcance. Viaje de maneira mais inteligente com insights orientados por IA</Text>

        <View style={styles.button}>
          <Text style={{
            fontFamily: 'outfit-bold',
            color: Colors.WHITE,
            textAlign: 'center',
            fontSize: 18,
          }}>Comece Agora</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: Colors.WHITE,
      marginTop: -20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: '100%',
      padding: 25
  },
  button:{
    marginTop: '10%',
    padding:15,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
  


  }

})