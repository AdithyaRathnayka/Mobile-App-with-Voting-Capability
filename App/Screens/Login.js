import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';


const Login  = (props) => {

return(
    <View style={{backgroundColor: 'rgb(0,0,100)',alignItems: 'center'}}>
        <Text style={{color: 'white', 
        fontSize: 64,
        fontWeight: 'bold',
        marginVertical: 10}}>Login</Text>

        <View style = {{backgroundColor:'white', 
        width:360
        ,borderTopLeftRadius:130, 
        paddingTop: 100, 
        alignItems: 'center'}}>

            <Text style ={{ fontSize: 40, 
            color:'rgb(0,0,100)',
            fontWeight: 'bold'}}>Welcome Back</Text>

            <Text style ={{color: "grey", 
            fontSize: 19, 
            fontweight: 'bold', 
            marginBottom: 20}}>Login to your account</Text>

            <Textfield placeholder='Email /User Name' keyboardType={"email-address"}></Textfield>

            <Textfield placeholder='Password' securityTextEntry={true}></Textfield>

            <View style={{ alignItems: 'flex-end', 
            width: '80%', 
            paddingRight: 16,
             marginBottom: 60}}>

            <TouchableOpacity Press={() => props.navigation.navigate("Forgot password") }>
            <Text style={{color:'rgb(0,0,100)',
            fontWeight:'bold', 
            fontSize: 16, 
            padding:5}}>forgot password?</Text>
            </TouchableOpacity>
                
            </View>
            <Button textColor= 'white' 
            bgColor='rgb(0,0,100)'
             btnLable= 'Login' Press={() => alert ("Logged In")}
             buttonClick = {clickMe}/>

            <View style={{ display: 'flex',
            flexDirection: 'row', 
            justifyContent:'center'}}>

                <Text style={{color: 'rgb(0,0,100)',
                fontWeight: 'bold', 
                fontSize: 16,
                padding:5}}>Don't you have an account?</Text>

                <TouchableOpacity Press={() => this.props.navigation.navigate("Signup")}>

                <Text style={{color: 'rgb(0,0,100)',
                fontWeight: 'bold', 
                fontSize: 16,
                padding:5}}>Signup</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        </View>
    
    
)
}

  
export default Login;