import React, { useState, useEffect } from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const SecretaryNames =() => {

  const [name, setName] = useState([
    {
      id: '1', 
      label: 'Nimeshi Anuththara',
      value: 'Nimeshi Anuththara',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '2', 
      label: 'Tashini Shanaya',
      value: 'Tashini Shanaya',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '3', 
      label: 'Aveesha Induwara',
      value: 'Aveesha Induwara',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '4', 
      label: 'Madhusha Piyumal',
      value: 'Madhusha Piyumal',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '5', 
      label: 'Tharushi Sithara',
      value: 'Tharushi Sithara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '6', 
      label: 'Rithmi Udeshika',
      value: 'Rithmi Udeshika',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '7', 
      label: 'Thilina Mahesh',
      value: 'Thilina Mahesh',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '8', 
      label: 'Kavindi Apsara',
      value: 'Kavindi Apsara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '9', 
      label: 'Gayali Kaveesha',
      value: 'Gayali Kaveesha',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '10', 
      label: 'Prasadi Premila',
      value: 'Prasadi Premila',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '11', 
      label: 'Sahan Tharaka',
      value: 'Sahan Tharaka',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '12', 
      label: 'Oshini Vimesha',
      value: 'Oshini Vimesha',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '13', 
      label: 'Rashmika Pahasarani',
      value: 'Rashmika Pahasarani',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '14', 
      label: 'Isuri Dilhara',
      value: 'Isuri Dilhara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '15', 
      label: 'Dulakshi Malsha',
      value: 'Dulakshi Malsha',
      boderColor: '#191970',
      color: '#191970',
      
      description: 'Secretary Names',
      
      
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

export default SecretaryNames;