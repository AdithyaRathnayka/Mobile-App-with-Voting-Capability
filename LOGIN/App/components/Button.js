import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text } from "react-native";


export default class Button extends Component{
  render(){
   return(
    <TouchableOpacity style = {styles.ButtonContainer}>
        <Text style ={styles.buttontext}>{this.props.buttontext}Log in</Text>
       
    </TouchableOpacity>
   );
}
}

const styles = StyleSheet.create ({
    ButtonContainer:{
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

    buttontext:{
        color: 'white',
        fontSize: 18,
        
    }
});




