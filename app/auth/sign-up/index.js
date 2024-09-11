import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import  { auth} from './../../../configs/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

export default function SignUp() {
  const navigation=useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState();
  const [senha,setSenha]=useState();
  const [nomeCompleto,setNomeCompleto]=useState();

  useEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    })
  },[]);
  const OnCreateAccount=()=>{

    if(!email&&!senha&&!nomeCompleto)
    {
      ToastAndroid.show("Preencha todos os campos",ToastAndroid.BOTTOM);
      return;
    }
  
    // Funacao para criar usuarios
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      router.replace('/mytrip')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log("--",errorMessage, errorCode);
      // ..
    })
  };


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
          placeholder='Digite seu nome completo'
          onChangeText={(value)=>setNomeCompleto(value)}
        />
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
          placeholder='Digite Seu Email'
          onChangeText={(value)=>setEmail(value)}
        />
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
          placeholder='Digite Sua Senha'
          onChangeText={(value)=>setSenha(value)}
        />
      </View>
      
      {/* Botao de criar conta */}
      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center'
        }}>Criar conta</Text>

      </TouchableOpacity>
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