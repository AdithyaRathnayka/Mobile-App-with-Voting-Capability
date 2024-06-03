import React, { useState, useEffect } from 'react';
import {View, Text, requireNativeComponent} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const ViceSecretaryNames =() => {

  const [name, setName] = useState([
    {
      id: '1', 
      label: 'Sharadi Nishadya',
      value: 'Sharadi Nishadya',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '2', 
      label: 'Nisali Kavindya',
      value: 'Nisali Kavindya',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '3', 
      label: 'Apsara Pathraja',
      value: 'Apsara Pathraja',
      boderColor: '#191970',
      color: '#191970',
      
    },

    {
      id: '4', 
      label: 'Hashini Sandusha',
      value: 'Hashini Sandusha',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '5', 
      label: 'Gihan Udesha',
      value: 'Gihan Udesha',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '6', 
      label: 'Apna Supunsara',
      value: 'Apna Supunsara',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '7', 
      label: 'Imalsha Rasangi',
      value: 'Imalsha Rasangi',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '8', 
      label: 'Malsha Piyumini',
      value: 'Malsha Piyumini',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '9', 
      label: 'Chathumini Bhagya',
      value: 'Chathumini Bhagya',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '10', 
      label: 'Dilsha Thathsarani',
      value: 'Dilsha Thathsarani',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '11', 
      label: 'Duleesha Sandun',
      value: 'Duleesha Sandun',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '12', 
      label: 'Supuni Rasangika',
      value: 'Supuni Rasangika',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '13', 
      label: 'Niruni Suleshi',
      value: 'Niruni Suleshi',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '14', 
      label: 'Ranusha Gamage',
      value: 'Ranusha Gamage',
      boderColor: '#191970',
      color: '#191970',
    },

    {
      id: '15', 
      label: 'Chamil Thashmeera',
      value: 'Chamil Thashmeera',
      boderColor: '#191970',
      color: '#191970',
      
      description: 'Vice Secretary Names',
      
      
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

export default ViceSecretaryNames;