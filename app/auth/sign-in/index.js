import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import  { auth} from './../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

export default function SignIn() {
  const navigation=useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState();
  const [senha,setSenha]=useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const onSignIn=()=>{

    if(!email&&!senha)
    {
      ToastAndroid.show("Digite seu Email e senha!",ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorCode === 'auth/invalid-credential') {
          ToastAndroid.show("Credenciais inválidas!", ToastAndroid.LONG);
        } else if (errorCode === 'auth/invalid-email') {
          ToastAndroid.show("Formato de e-mail inválido!", ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Ocorreu um erro durante o login. Tente novamente.", ToastAndroid.LONG);
        }
      });
  }

  return (
    <View style={{
      padding: 25,
      marginTop:60,
      backgroundColor:Colors.WHITE,
      paddingTop:30,
      height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back-sharp" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop:30,
      }}>Vamos fazer seu login</Text>

      <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        marginTop:20,
        color: Colors.GRAY,
      }}>Bem vindo de volta</Text>

      <Text style={{
       fontFamily: 'outfit',
       fontSize: 30,
       marginTop:10,
       color: Colors.GRAY,
      }}>Você sentiu falta?</Text>

      {/* Email */}
      <View style={{
        marginTop:50,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Email</Text>
        <TextInput 
        style={styles.input}
        onChangeText={(value)=>setEmail(value)}
        placeholder='Digite Seu Email'></TextInput>
      </View>
      {/* Senha */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
          fontFamily: 'outfit',
        }}>Senha</Text>
        <TextInput 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value)=>setSenha(value)}
        placeholder='Digite Sua Senha'></TextInput>
      </View>
      {/* Botao de login */}
      <TouchableOpacity onPress={onSignIn} style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:Colors.WHITE,
          textAlign:'center'
        }}>Entrar</Text>

      </TouchableOpacity>

      {/* Botao de criar conta */}
      <TouchableOpacity 
        onPress={() => router.replace('auth/sign-up')}
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
        }}>Criar Conta</Text>

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