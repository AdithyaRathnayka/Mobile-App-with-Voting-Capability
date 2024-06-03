import React, { useState, useEffect } from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const PresidentNames =() => {

  const [name, setName] = useState([
    {
      id: '1', 
      label: 'Thashini Shenaya',
      value: 'Thashini Shenaya',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '2', 
      label: 'Senuri Ohansa',
      value: 'Senuri Ohansa',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '3', 
      label: 'Mithini Pabasara',
      value: 'Mithini Pabasara',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '4', 
      label: 'Tharushi Sithara',
      value: 'Tharushi Sithara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '5', 
      label: 'Sihini Lawanya',
      value: 'Sihini Lawanya',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '6', 
      label: 'Samithu Hansaka',
      value: 'Samithu Hansaka',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '7', 
      label: 'Kanishka Dewmini',
      value: 'Kanishka Dewmini',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '8', 
      label: 'Tharinda Theekshana',
      value: 'Tharinda Theekshana',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '9', 
      label: 'Hasani Kaushalya',
      value: 'Hasani Kaushalya',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '10', 
      label: 'Dimashi Uththara',
      value: 'Dimashi Uththara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '11', 
      label: 'Thilina Hansaka',
      value: 'Thilina Hansaka',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '12', 
      label: 'Oshadi Piyumini',
      value: 'Oshadi Piyumini',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '13', 
      label: 'Maleesha Hasalanka',
      value: 'Maleesha Hasalanka',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '14', 
      label: 'Kavini Deshika',
      value: 'Kavini Deshika',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '15', 
      label: 'Rithumi Amaya',
      value: 'Rithumi Amaya',
      boderColor: '#191970',
      color: '#191970',
      description: 'submit',
      description: 'President Names',
      
    },

  ]);

  function onPressRadioButton(radioArray) {
    console.log(radioArray);
    setName(radioArray);
}
  return(
    <View style = {{flex: 1}}>
    
    <RadioGroup
            containerStyle={{justifyContent: 'flex-start', 
            alignItems: 'flex-start',
            backgroundColor: '#e6e6fa',
            elevation: 2,
            paddingVertical: 10,
            marginHorizontal: 20,
            marginTop: 40,
            borderRadius: 10,
            }} 
            containerStyle2={{justifyContent: 'flex-start,'}}
            radioButtons={name} 
            onPress={onPressRadioButton} />

    
    </View>

  ); 
}

export default PresidentNames;