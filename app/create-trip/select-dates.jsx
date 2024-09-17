import { View, Text, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from './../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from 'react-native';
import {CreateTripContext} from "./../../context/CreateTripContext";
import moment from 'moment';
export default function selectDates() {
    
    const navigation=useNavigation();
    const[startDate,setStartDate]=useState();
    const[endDate,setEndDate]=useState();
    const {tripData,setTripData} = useContext(CreateTripContext);
    const router=useRouter();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: ''
        })
    },[])

    const onDateChange=(date,type)=>{
        console.log(date,type)
        if(type=='START_DATE')
        {
            setStartDate(moment(date))
        }
        else{
            setEndDate(moment(date))
        }
    };
    const OnDateSelectionContinue=()=>{
        if(!startDate&&!endDate)
            {
            ToastAndroid.show('Selecione a data de início e término',ToastAndroid.LONG)
            return;

        }
        const totalNoOfDays=endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1)
        setTripData({...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1,
        });

        router.push('/create-trip/select-budget');

    };

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize:35,
        marginTop:20,
      }}>Datas de viagens</Text>
      {/* Calendario  */}
        <View style={{
            marginTop:30,
        }}>
        <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={new Date()}
        weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
        months={[
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]}
        previousTitle="Anterior"
        nextTitle="Próximo"
        selectedRangeStyle={{backgroundColor:Colors.PRIMARY}}
        scaleFactor={375}
        textStyle={{
            fontFamily: "outfit",
            color: "#000000",
      }}
      selectedDayTextStyle={{color:Colors.WHITE}}
        onDateChange={onDateChange} />
        </View>
        {/* botao continue */}
        <TouchableOpacity 
        onPress={OnDateSelectionContinue}
            style={{
            padding:15,
            backgroundColor:Colors.PRIMARY,
            borderRadius:15,
            marginTop:35
        }}>

            <Text style={{
                textAlign: "center",
                color:Colors.WHITE,
                fontFamily: "outfit-bold",
                fontSize:20,
            }}>Continue</Text>

        </TouchableOpacity>
    </View>
  )
}