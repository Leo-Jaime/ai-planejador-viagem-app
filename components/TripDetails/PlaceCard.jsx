import { View, Text ,Image, TouchableOpacity} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { GetGooglePhoto as fetchGooglePhoto } from '../../services/GooglePhoto';
export default function PlaceCard({activity, index}) {

    const [photoRef, setPhotoRef] = useState(null);

    useEffect(() => {
        const getGooglePhoto = async () => {
            try {
                const result = await fetchGooglePhoto(activity?.local);
                setPhotoRef(result);
            } catch (error) {
                console.error('Error fetching Google photo:', error);
            }
        };

        if (activity?.local) {
            getGooglePhoto();
        }
    }, [activity?.local]);
  return (
    <View key={index}
    style={{
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        borderColor: Colors.GRAY,
        backgroundColor:Colors.LIGHT_GRAY
    }}
>
    <Image 
        source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
        }}
        style={{
            width: '100%', 
            height: 180,
            borderRadius: 15,
            objectFit: 'cover',
            marginTop: 10,
        }}
    />
    <View
        style={{
            marginTop: 5,
        }}
    >
    <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 17,
            
        }}
    >{activity?.local}</Text>

    <Text 
        style={{
            fontFamily: 'outfit-medium',
            fontSize: 16,
            textAlign:'justify',
            color: Colors.GRAY
            
        }}
    >{activity?.detalhes} 
    </Text>
    <View
        style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 5,
        marginBottom: 5,
    }}
    >
        
    <View>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            
        }}
    >🎫 Entrada: 
    <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 16,
        }}
    >{activity?.preco_ingresso}</Text>
    
    </Text>
    <Text
        style={{
            fontFamily: 'outfit',
            fontSize: 16,
            marginTop: 5,
        }}
    >⏱️  Horários: {activity?.horario}</Text>


    </View>
    </View>
        <TouchableOpacity
            style={{
                backgroundColor: Colors.PRIMARY,
                padding: 5,
                marginTop: 10,
                borderRadius: 10,
                
            }}
        >
            <Text style={{
                color:Colors.WHITE,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
            }}>Ir agora</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}