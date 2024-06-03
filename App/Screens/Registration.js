import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Registration extends Component{
    render(){
        return (
            <View style = {styles.contain}>
            <Header> 
                <Text style = {styles.textstyles}> Registration</Text>
            </Header>
            <Text style = {styles.textstyles}>First Name</Text>
            <Textfield/>
            <Text style = {styles.textstyles}>Last Name</Text>
            <Textfield/>
            <Text style = {styles.textstyles}>AR Number</Text>
            <Textfield/>
            <Text style = {styles.textstyles}>Faculty email</Text>
            <Textfield/>
            <Text style = {styles.textstyles}>Password</Text>
            <Textfield/>
            <Text style = {styles.textstyles}>Confirm Password</Text>
            <Textfield/>
            <Button buttontext = "Submit"/>
            <Footer/>
            
        <View> 
        </View>
        </View>
        )
    }

}

const styles = StyleSheet.create ({
    contain: {
        flex:2,
        backgroundColor: 'white',
         
        
    },

    body: {
        backgroundColor: 'rgba(180, 7, 38, 1)',
        height: 60,
        
    },


    header:{
        backgroundColor: 'rgb(252,169,9)',
        height : 13,
    },


    textstyles:{
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent:'space-around',
        
        
    },


});

export default Registration