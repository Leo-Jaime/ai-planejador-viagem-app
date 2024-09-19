import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors} from './../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import {CreateTripContext} from "./../../context/CreateTripContext";
import moment from 'moment';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
export default function ReviewTrip() {

  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext)
  
  const router=useRouter();
  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
  },[])
  


  return (
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Revisar viagem</Text>

      <View style={{
        marginTop:20,
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20,
          
        }}>Antes de gerar sua viagem, revise sua seleção</Text>

          {/* Informacoes de destino  */}
        <View style={{
          marginTop:'10%',
          display: 'felx',
          flexDirection: 'row',
          gap:20,
        }}>
          <Ionicons name="location-sharp" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily:'outfit',
              fontSize:20,
              color:Colors.GRAY,
            }}>Destino</Text>

            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              }}>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>
          {/* Informacoes de datas  */}
        <View style={{
          marginTop:'10%',
          display: 'felx',
          flexDirection: 'row',
          gap:20,
        }}>
          <Ionicons name="calendar-sharp" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily:'outfit',
              fontSize:20,
              color:Colors.GRAY,
            }}>Data da viagem</Text>

            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              }}>{moment(tripData?.startDate).format('DD MMM.')+' a '+moment(tripData?.endDate).format('DD MMM.')+'    '}({tripData.totalNoOfDays} Dias)</Text>
          </View>
        </View>

        {/* Informacoes da viagem  */}
        <View style={{
          marginTop:'10%',
          display: 'felx',
          flexDirection: 'row',
          gap:20,
        }}>
          <Ionicons name="people" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily:'outfit',
              fontSize:20,
              color:Colors.GRAY,
            }}>Quem está viajando</Text>

            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              }}>{tripData?.travelerCount?.title}
              </Text>
          </View>
        </View>


        {/* Informacoes do orcamento  */}
        <View style={{
          marginTop:'10%',
          display: 'felx',
          flexDirection: 'row',
          gap:20,
        }}>
          <FontAwesome5 name="money-check" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily:'outfit',
              fontSize:20,
              color:Colors.GRAY,
            }}>Orçamento</Text>

            <Text style={{
              fontFamily:'outfit-medium',
              fontSize:20,
              }}>{tripData?.budget?.title}
              </Text>
          </View>
        </View>

        {/* botao monte sua viagem */}
        <TouchableOpacity
          onPress={() =>router.replace('/create-trip/generate-trip')}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            marginTop: '30%',
            paddingHorizontal: 30,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: 'outfit-medium',
            }}
          >Monte minha viagem</Text>
        </TouchableOpacity>                    
      </View>

    </View>
  )
}