import React, {Component} from 'react';
import { StyleSheet, View } from "react-native";

class Footer extends Component{

    render(){
        return(
            <View>
            <View style = {styles.header}/>
            <View style = {styles.body} />
            </View>

        );
    }
}

const styles = StyleSheet.create ({

    header:{
        backgroundColor: 'rgb(252,169,9)',
        height : 13,
        bottom: 0, 
        
    },

    body: {
        backgroundColor: 'rgba(180, 7, 38, 1)',
        height: 60,
        bottom: 0,  
    },

});

export default Footer