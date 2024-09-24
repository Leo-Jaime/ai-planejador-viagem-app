import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { GetGooglePhoto as fetchGooglePhoto } from '../../services/GooglePhoto';

export default function HotelCard({ item }) {
    const [photoRef, setPhotoRef] = useState(null);

    useEffect(() => {
        const getGooglePhoto = async () => {
            try {
                const result = await fetchGooglePhoto(item?.nome);
                setPhotoRef(result);
            } catch (error) {
                console.error('Error fetching Google photo:', error);
            }
        };

        if (item?.nome) {
            getGooglePhoto();
        }
    }, [item?.hotel_name]);
    const RepetirEmoji = ({ emoji, quantidade }) => {
        const total = 5;
        const faltando = total - quantidade;
        emoji="★"
        return (
          <Text style={{
            fontSize:20,
            fontFamily:'outfit'
          }}>
            
          {Array.from({ length: total }).map((_, index) => (
            <Text
              style={{
                fontSize: 25, // Tamanho da estrela
                color: index < quantidade ? "gold" : "gray" // "gold" para estrelas preenchidas, "gray" para as restantes
              }}
              key={index}
            >
              {emoji}
            </Text>
          ))}
        </Text>
      );
    };
    return (
        <View
            style={{
                marginRight: 20,
                width: 180,
                backgroundColor: Colors.LIGHT_GRAY,
                borderRadius: 15,
                borderColor: Colors.LIGHT_GRAY,
            }}
        >
            <Image
                source={{
                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
                }}
                style={{
                    width: 180,
                    height: 120,
                    borderRadius: 15,
                    objectFit: 'cover',
                }}
            />
            <View style={{padding:5}}>
            <View>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 15,
                    }}>{item?.nome}</Text>

                <View>
                    <RepetirEmoji quantidade={item.classificacao[0]} />
                    <Text style={{
                        fontFamily:'outfit'
                    }}>💰{item.preco}</Text>
                </View>
            </View>
            </View>
        </View>
    );
}