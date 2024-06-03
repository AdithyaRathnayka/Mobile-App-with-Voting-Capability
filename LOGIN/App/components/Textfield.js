import React, {Component} from 'react';
import { StyleSheet, TextInput } from "react-native";


export default class Textfield extends Component{
render(){
   return(
    <TextInput style ={styles.input}></TextInput>
   );
}
}

const styles = StyleSheet.create ({
    input:{
        height: 40,
        width: 300,
        borderColor: 'rgba(180, 7, 38, 1)',
        borderWidth: 1.5,
        borderRadius:12,
        justifyContent: 'space-around',
        alignSelf: 'center'
      

        
    },
}
);


