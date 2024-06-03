import React, { useState, useEffect } from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const VicePresidentNames =() => {

  const [name, setName] = useState([
    {
      id: '1', 
      label: 'Nuhansi Sankalani',
      value: 'Nuhansi Sankalani',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '2', 
      label: 'Amali Sewwandi',
      value: 'Amali Sewwandi',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '3', 
      label: 'Nadun Chamathka',
      value: 'Nadun Chamathka',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '4', 
      label: 'Ayesha Madhuwanthi',
      value: 'Ayesha Madhuwanthi',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '5', 
      label: 'Iresha Kariyawasam',
      value: 'Iresha Kariyawasam',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '6', 
      label: 'Dilki Navoda',
      value: 'Dilki Navoda',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '7', 
      label: 'Daneesha Pawan',
      value: 'Daneesha Pawan',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '8', 
      label: 'Chanuli Nuhansa',
      value: 'Chanuli Nuhansa',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '9', 
      label: 'Thathsarani Senevirathna',
      value: 'Thathsarani Senevirathna',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '10', 
      label: 'Akila Malshan',
      value: 'Akila Malshan',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '11', 
      label: 'Nimni Sasanka',
      value: 'Nimni Sasanka',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '12', 
      label: 'Dinuki Pahasara',
      value: 'Dinuki Pahasara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '13', 
      label: 'Ahinsa Dinethmi',
      value: 'Ahinsa Dinethmi',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '14', 
      label: 'Manul Yashmina',
      value: 'Manul Yashmina',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '15', 
      label: 'Ruwini Madhushika',
      value: 'Ruwini Madhushika',
      boderColor: '#191970',
      color: '#191970',
      
      description: 'Vice President Names',
      
      
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

export default VicePresidentNames;