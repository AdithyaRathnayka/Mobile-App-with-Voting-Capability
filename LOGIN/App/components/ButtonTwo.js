import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text } from "react-native";


export default class ButtonTwo extends Component{
  render(){
   return(
    <TouchableOpacity style = {styles.ButtonTwoContainer}>
        <Text style ={styles.buttontwotext}>{this.props.buttontwotext}Create New Account</Text>
       
    </TouchableOpacity>
   );
}
}

const styles = StyleSheet.create ({
    ButtonTwoContainer:{
        backgroundColor: 'maroon',
        width : 200,
        height: 50,
        padding : 10,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 21,
        
    },

    buttontwotext:{
        color: 'white',
        fontSize: 18,
        
    }
});
