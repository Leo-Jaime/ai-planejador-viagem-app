import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors} from './../../constants/Colors'
import PlaceCard from './PlaceCard';
export default function PlannedTrips({ details }) {
  // Log para garantir que os dados recebidos estão corretos
  console.log('======> Roteiro:', details);

  if (!details || details.length === 0) {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>
          Não há detalhes do roteiro disponíveis.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-bold' }}>🏕️ Roteiro de Viagem</Text>

      {details.map((dayDetail, index) => (
        <View key={`day-${index}`}>
          <Text
            style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {dayDetail?.dia}
          </Text>

          {/* Mapear os horários */}
          {dayDetail?.horarios?.map((lugares, lugaresIndex) => (
            <PlaceCard activity={lugares} index={lugaresIndex} key={lugaresIndex} />

 
          ))}
        </View>
      ))}
    </View>
  );
}
