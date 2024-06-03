import React, {Component} from 'react';
import { StyleSheet,  View } from "react-native";

class Header extends Component{

    render(){
        return(
            <View>
            <View style = {styles.body} /> 
            <View style = {styles.header}/>
            </View>

        );
    }
}

const styles = StyleSheet.create ({

    body: {
        backgroundColor: 'rgba(180, 7, 38, 1)',
        height: 60,
        
    },

    header:{
        backgroundColor: 'rgb(252,169,9)',
        height : 13,
    },

});

export default Header