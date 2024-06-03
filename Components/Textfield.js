 import React from 'react';
import {TextInput } from "react-native";


const Textfield = (props) => {
    return (
        <TextInput {...props} style ={{ borderRadius: 100, color: 'blue',
        paddingHorizontal: 10, width: '80%', backgroundColor: 'rgb(220,220,220)', marginVertical: 10}}
        placeholderTextColor= 'gray' fontweight = 'bold' ></TextInput>
    );
};

export default Textfield;