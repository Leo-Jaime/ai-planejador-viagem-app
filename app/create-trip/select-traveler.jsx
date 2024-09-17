import { View, Text ,FlatList} from 'react-native'
import React, { useEffect,useState ,useContext} from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { SelectTravelerList } from '../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import { TouchableOpacity } from 'react-native'
import { CreateTripContext } from '@/context/CreateTripContext'
import { useRouter } from 'expo-router'
export default function SelectTraveler() {
    const [selectedTraveler, setSelectedTraveler] = useState('')
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }
    , [])
    useEffect(()=>{
        setTripData({...tripData,
            travelerCount: selectedTraveler
        })
    },[selectedTraveler])
    useEffect(() => {
        console.log(tripData)
    }, [tripData])
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        height: '100%',
        backgroundColor: Colors.White,
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily:'outfit-bold',
          marginTop:-20,
        }}
      >Quem está viajando</Text>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily:'outfit-bold',
          }}
        >Escolha o tipo de viagem</Text>
        <FlatList 
          data={SelectTravelerList}
          renderItem={({item,index})=>(
            <TouchableOpacity
              onPress={()=>setSelectedTraveler(item)}
              style={{
                marginVertical:10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler}/>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={()=>router.push('/create-trip/select-dates')}
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 30,
            marginTop: 20,
            paddingHorizontal: 45,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: 'outfit-bold',
            }}
          >Continue</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}