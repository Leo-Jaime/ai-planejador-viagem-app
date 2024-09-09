import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
  const navigation=useNavigation();
  const router=useRouter();

  useEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <View
    style={{
      padding: 25,
      paddingTop:50,
      backgroundColor: Colors.WHITE,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-sharp" size={30} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30,
      }}
      >Criar nova conta</Text>
       {/* Nome completo */}
       <View style={{
        marginTop:50,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Nome completo</Text>
        <TextInput 
        style={styles.input}
        placeholder='Digite seu nome completo'></TextInput>
      </View>

      {/* Email */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Digite Seu Email'></TextInput>
      </View>
      {/* Senha */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>crie sua senha</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input}
        placeholder='Digite Sua Senha'></TextInput>
      </View>
      
      {/* Botao de criar conta */}
      <View style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center'
        }}>Criar conta</Text>

      </View>
      {/* botao de fazer login  */}
      <TouchableOpacity 
        onPress={() => router.replace('auth/sign-in')}
      style={{
        padding:20,
        borderWidth:1,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{
          color:Colors.PRIMARY,
          textAlign:'center'
        }}>Fazer Login</Text>

      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  input:{
    padding: 20, 
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit',

  }
})