import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../constants/Colors'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/Flightinfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrips from '../../components/TripDetails/PlannedTrips'
import { TouchableOpacity } from 'react-native'
import { doc, deleteDoc } from 'firebase/firestore';
import {auth, db} from './../../configs/FirebaseConfig';
export default function TripDetails() {
    const deleteUserTrip = async (tripId) => {
        if (!tripId) {
            console.error("ID da viagem não está definido.");
            return;
        }
        try {
            await deleteDoc(doc(db, 'UserTrips', tripId));
            console.log("Viagem excluída com sucesso!");
        } catch (error) {
            console.error("Erro ao excluir a viagem: ", error);
        }
    };


    const router=useRouter();
    // console.log('=---==========================Tela TripDetails=---==========================')
    const handleCancel = () => {
        Alert.alert(
            "Confirmar Cancelamento",
            "Você tem certeza que deseja cancelar a viagem?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        console.log("Viagem cancelada");
                        const docID = tripDetails?.docId; // Obtenha o docId diretamente
                        deleteUserTrip(docID); // Passa o docID para deletar a viagem
                        router.push('(tabs)/mytrip');
                    }
                }
            ]
        );
    };



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
    console.log(tripPlan?.roteiro)

    const tripPlan = tripDetails?.tripPlan;
    const tripData = formatData(tripDetails?.tripData);
    const docID = formatData(tripDetails?.docId)
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
        <PlannedTrips details={tripPlan?.roteiro} />
        <TouchableOpacity 
            style={{
                marginTop: 30,
                marginBottom: 30,
                backgroundColor: '#FF4C4C',
                borderRadius: 10,
                padding: 5
            }}
            onPress={handleCancel}
        >
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                color: Colors.WHITE,
                textAlign: 'center'
            }}>
                Cancelar Viagem
            </Text>
        </TouchableOpacity>
        </View>

 
    </ScrollView>
  )
}