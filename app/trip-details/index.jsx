import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from './../../constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/Flightinfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrips from '../../components/TripDetails/PlannedTrips'
export default function TripDetails() {
    console.log('=---==========================Tela TripDetails=---==========================')



    const navigation=useNavigation();
    const {trip}=useLocalSearchParams();
    const [tripDetails, setTripDetails] = useState([]);
    const formatData = (data) => {
        try {
            return JSON.parse(data);
        } catch (error) {
            // console.error('Invalid JSON format:', error);
            return {};
        }
    };

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        });

        try {
            setTripDetails(JSON.parse(trip));
        } catch (error) {
            // console.error('Invalid JSON format:', error);
        }
    }, [trip]);
    // console.log(tripDetails?.tripPlan?.acomodacoes)
  return tripDetails&&(
        
    <ScrollView>
        {/* Foto da capa  */}
      <Image 
        source={{
            uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                + formatData(tripDetails?.tripData)?.locationInfo?.photoRef +
                '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
        }}
        style={{
            width: '100%', 
            height: 330,
            
        }}
        />
        {/* Nome do destino  */}
        <View style={{
            padding: 15,
            backgroundColor:Colors.WHITE,
            height:'100%',
            marginTop: -30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
        }}>
            <Text style={{
                fontSize:25,
                fontFamily:'outfit-bold',

            }}>{tripDetails?.tripPlan?.destino}</Text>

            {/* Datas */}
            <View style={{
                display: 'flex',
                flexDirection:'row',
                gap:5,
                marginTop:5
            }}> 
            <Text style={{
                fontSize:14,
                fontFamily:'outfit',
                color:Colors.GRAY
            }}>{moment(formatData(trip?.tripData)?.startDate).format('DD MMM yyyy')}</Text>
            <Text style={{
                fontSize:14,
                fontFamily:'outfit',
                color:Colors.GRAY
            }}> - {moment(formatData(trip?.tripData)?.endDate).format('DD MMM yyyy')}</Text>
            </View>
            <Text style={{
                fontFamily:'outfit',
                fontSize:17,
                color:Colors.GRAY,
              }}
              >🚀 {formatData(tripDetails?.tripData)?.travelerCount?.title}</Text>

              
        {/* informações de voo */}
        <FlightInfo flightData={tripDetails?.tripPlan?.voo}/>
        {/* Lista de hoteis  */}
        <HotelList hotelList={tripDetails?.tripPlan?.acomodacoes}/>
        {/* informações do planejador do dia da viagem */}
        <PlannedTrips details={tripDetails?.triPlan?.roteiro}/>
        </View>


    </ScrollView>
  )
}