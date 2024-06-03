import React, { useState, useEffect } from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const TreasurerNames =() => {

  const [name, setName] = useState([
    {
      id: '1', 
      label: 'Anjalee Dilma',
      value: 'Anjalee Dilma',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '2', 
      label: 'Yenushka Shrimal',
      value: 'Yenushka Shrimal',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '3', 
      label: 'Jayani Muthuhari',
      value: 'Jayani Muthuhari',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '4', 
      label: 'Pamod Lakshan',
      value: 'Pamod Lakshan',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '5', 
      label: 'Amalka Nanayakkara',
      value: 'Amalka Nanayakkara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '6', 
      label: 'Iruki Dananjana',
      value: 'Iruki Dananjana',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '7', 
      label: ' Sakuni Hansika',
      value: 'Sakuni Hansika',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '8', 
      label: 'Maheeka Guruge',
      value: 'Maheeka Guruge',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '9', 
      label: 'Amavi Tharushika',
      value: 'Amavi Tharushika',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '10', 
      label: 'Vidun Pathirage',
      value: 'Vidun Pathirage',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '11', 
      label: 'Tharushi Sithara',
      value: 'Tharushi Sithara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '12', 
      label: 'Gayashi Salwathura',
      value: 'Gayashi Salwathura',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '13', 
      label: 'Hansi Upeshala',
      value: 'Hansi Upeshala',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '14', 
      label: 'Mirasha Sammani',
      value: 'Mirasha Sammani',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '15', 
      label: 'Malaka Gamage',
      value: 'Malaka Gamage',
      boderColor: '#191970',
      color: '#191970',
      
      description: 'Treasurer Names',
      
      
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

export default TreasurerNames;