import React, {Component} from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity,} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import ButtonTwo from '../components/ButtonTwo';

class login extends Component{
    render() {
        return(<View style = {styles.contain}>
        <Header></Header>
       
        <Text  style = { styles.Textstyle}>Already have an account?</Text>
        <Text  style = { styles.Nextstyle}>User Name</Text>
         <Textfield/>  
         <Text  style = { styles.Nextstyle}>Password</Text>
         <Textfield/> 
          
         <Button style = { styles.button}></Button>

         <View>
         <TouchableOpacity>
         <Text  style = { styles.Newstyle}>Fogget your user name or password?</Text>
         </TouchableOpacity>
         </View>
         
         <Text  style = { styles.Textstyle}>Is this your first time here?</Text>
         <ButtonTwo style = { styles.button}></ButtonTwo>
        <Footer></Footer>
        
           </View> )
    }
}

const styles = StyleSheet.create({
    contain: {
        flex: 2,
        backgroundColor: 'white',
    },
    
    Textstyle: {
        fontSize: 24,
        justifyContent: 'space-around',
        alignSelf: 'center',
        paddingBottom: 15,
        paddingTop: 15, 
       fontWeight: 'bold',
       color: 'black',
    },

    Nextstyle: {
        fontSize: 20,
        justifyContent: 'space-around',
        alignSelf: 'center',
        paddingBottom: 15,
        paddingTop: 15,  
        color: 'black',
    },

    Newstyle:{
       fontSize: 18,  
       paddingTop: 15,
       alignSelf: 'baseline',
       color: 'blue',
       
    },
        
    
    
});

export default login
