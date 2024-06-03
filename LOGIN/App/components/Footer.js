import React, {Component} from 'react';
import { StyleSheet,  View } from "react-native";

class Footer extends Component{

    render(){
        return(
            <View>
            <View style = {styles.body} /> 
            <View style = {styles.footer}/>
            </View>

        );
    }
}

const styles = StyleSheet.create ({
    contain: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },

    footer: {
        backgroundColor: 'maroon',
        height: 60,
        bottom: 0,
        
    },

    body:{
        backgroundColor: 'rgb(252,169,9)',
        height : 13,
        bottom: 0,
        
    },

});

export default Footer
