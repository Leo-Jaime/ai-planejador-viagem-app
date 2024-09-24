import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from './../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import UserTripCard from './UserTripCard';
export default function UserTripList({userTrips}) {
  const latestTrip=JSON.parse(userTrips[0]?.tripData)
  const router = useRouter()

  const trip = JSON.stringify(userTrips[0])



    // userTrips.userTrips[0].tripPlan.destino para acessar o json que a ia me gerou
    // const latestTrip=JSON.parse(userTrips.userTrips[0].tripData)
    // const trip = JSON.stringify(userTrips.userTrips[0].tripPlan.destino);
    // const endDate = JSON.stringify(userTrips.userTrips[0]?.tripData.destinoDate);
    console.log('=---==========================Tela UserTripList=---==========================')
    // console.log('trippppppppppppppppppppp'+ latestTrip)
    // console.log('===aatrip2>' + JSON.stringify(latestTrip)) // arrumar essa porra
    //  console.log(JSON.stringify(userTrips[0]?.tripPlan?.destino)) // arrumar essa porra

  return (
    <View>
      <View style={{
        marginTop:20,
        marginBottom:80
      }}>
        {latestTrip?.locationInfo?.photoRef?
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+latestTrip.locationInfo.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} 
        style={{
            width: '100%', 
            height: 250,
            borderRadius: 15,
            objectFit: 'cover'
            }}
        />
        :
        <Image source={require('./../../assets/images/placeholder.jpg')} 
        style={{
            width: '100%', 
            height: 250,
            borderRadius: 15,
            objectFit: 'cover'
            }} />
        }
        <View style={{
            marginTop:10,
        }}>

            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:20,
            }}>{userTrips[0]?.tripPlan?.destino}</Text>

            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop:5
            }}>
              <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY,
              }}>{moment(latestTrip.startDate).format('DD MMM yyyy')}</Text>
              <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY,
              }}
              >🚀 {latestTrip?.travelerCount.title}</Text>
            </View>
            <TouchableOpacity 
            onPress={()=> router.push({pathname:'/trip-details',params:{
              trip:JSON.stringify(userTrips[0])
            }})}
            style={{
              
              backgroundColor:Colors.PRIMARY,
              padding:15,
              marginTop:10,
              borderRadius:15,
            }}>
              <Text style={{
                fontFamily:'outfit-medium',
                color:Colors.WHITE,
                textAlign: 'center',
                fontSize:15
              }}>Veja seu plano</Text>
            </TouchableOpacity>
        </View>
      
        {userTrips.map((trip, index) => (
           <UserTripCard key={index} trip={trip} />
        ))}
      </View>
    </View>
  )
}