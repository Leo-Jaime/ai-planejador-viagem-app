import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors} from './../../constants/Colors'
export default function HotelList({hotelList}) {
  const RepetirEmoji = ({ emoji, quantidade }) => {
    return (
      <Text>
        {Array.from({ length: quantidade }).map((_, index) => (
          <Text style={{fontSize:15}} key={index}>{emoji}</Text>
        ))}
      </Text>
    );
  };


  return (
    <View style={{
        marginTop:20
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:20,

      }}>🏨Recomendação de hotéis</Text>
      <FlatList data={hotelList}
       style={{
        marginTop:10
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item, index}) =>(
       
        <View style={{
            marginRight:20,
            width: 180,
            borderWidth:1,
            borderRadius:15,
            borderColor: Colors.LIGHT_GRAY,
            padding:5
        }}>
            <Image source={require('./../../assets/images/placeholder.jpg')}
            style={{
                width: 170,
                height: 120,
                borderRadius:15
            }}/>
            {/* Cards do Hotel */}
            <View style={{}}>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize:15,
                    
                }}>{item.nome}</Text>
                {/* Preco e avaliacao */}
                <View style={{
                    // display:'flex',
                    // flexDirection:'row',
                    // justifyContent: 'space-between'
                }}>
                  <RepetirEmoji emoji="⭐" quantidade={item.classificacao[0]} />
                    {/* <Text style={{
                        fontFamily:'outfit'
                    }}>⭐{item.classificacao[0] }</Text> */}
                    <Text style={{
                        fontFamily:'outfit'
                    }}>💰{item.preco}</Text>
                </View>
            </View>
        </View>
      )}
      />
    </View>
  )
}