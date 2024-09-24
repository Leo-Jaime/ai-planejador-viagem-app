import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors} from './../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
export default function UserTripCard({trip}) {
    const router=useRouter();
    const formatData=(data)=>{
        return JSON.parse(data)

    }
  return (
<TouchableOpacity 
    onPress={()=> router.push({pathname:'/trip-details',params:{
    trip:JSON.stringify(trip)
  }})}
        style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        }}
    >
      {/* <Image 
        source={require('../../assets/images/placeholder.png')} 
        style={{
            width: 100, 
            height: 100,trip.tripPlan.destino
            borderRadius: 15,
        }}
        /> */}
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip?.tripData).locationInfo.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}} 
        style={{
            width: 100, 
            height: 100,
            borderRadius: 15,
            objectFit: 'cover'
        }}
        />
        <View>
            <Text
                style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 18,
                }}
            >{trip.tripPlan.destino}</Text>
            <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color:Colors.GRAY,
                }}
            >{moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')}</Text>
            <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 14,
                    color:Colors.GRAY,
                }}
            >Vijantes: {formatData(trip.tripData).travelerCount.title}</Text>
        </View>
    </TouchableOpacity>
  )
}