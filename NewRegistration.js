import React, {useContext, useState}from 'react';
import {View, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';
import { AuthContext } from '../Navigation/AuthProvider';


const NewRegistration = ({navigation}) => {
 

    const [firstName, setFirstname] = useState();
    const [lastName, setLastname] = useState();
    const [facultyMail, setFacultymail] = useState();
    const [arNumber, setArnumber] = useState();
    const [passWord, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext);

    const loginR = () =>{
        navigation.navigate('Login');
    }

    const submitClick = () => {
        if (firstName == null ||
            firstName === '' ||
            lastName == null ||
            lastName === ''||
            facultyMail == null ||
            facultyMail === ''||
            arNumber == null ||
            arNumber === ''||
            passWord == null|| 
            passWord === ''||
            confirmPassword == null ||
            confirmPassword === ''
            ) {
          alert("Empty Fields Cannot Be Kept !!!")
    
        } else {
            {() => register(firstName,lastName, facultyMail, passWord, arNumber)}
        
        }
      }

        return (
            <View style = {styles.contain}>
                <Text style = {styles.topic}> Register</Text>
 
 
                <Text style = {styles.subtopic}>Create a new account</Text>

                <View style = {styles.bg2}>

                <Textfield placeholder = "First Name" 
                value = {firstName}
                onChangeText = {(name)=> setFirstname(name)}
                autoCorrect = {false}/>

                <Textfield placeholder = "Last Name" 
                value = {lastName}
                onChangeText = {(surname)=> setLastname(surname)}/>

                <Textfield placeholder = "Faculty mail" 
                keyboardType = {"email-address"} 
                value ={facultyMail}
                onChangeText = {(mail)=> setFacultymail(mail)}/>

                <Textfield 
                placeholder = "AR Number" 
                value ={arNumber} 
                onChangeText = {(regnumber)=> setArnumber(regnumber)}/>

                <Textfield placeholder = "Password" 
                secureTextEntry = {true} 
                value ={passWord}
                onChangeText = {(pwd)=> setPassword(pwd)}/>

                <Textfield placeholder = "Confirm Password" 
                secureTextEntry = {true} 
                value = {confirmPassword}
                onChangeText = {(conpwd)=> setConfirmPassword(conpwd)}/>
               
                <Button textColor= 'white' 
                  bgColor='rgb(0,0,100)'
                  buttontext = "Submit"
                  onPress= {submitClick}
                  
                 />

        < View style = {styles.viewstyle}>
           <Text style = {styles.lastText}> Already Have An Account?
           <TouchableOpacity
           onPress={loginR}
           ><Text style = {styles.loginText}>Login </Text></TouchableOpacity> </Text>
        
           </View>
                </View>
        </View>
        )
}


const styles = StyleSheet.create ({
    contain: {
        flex:1,
        backgroundColor: 'rgba(25, 33, 100, 1)',
       
    },

    topic:{
        color: 'white',
        fontSize: 64,
        alignSelf: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
    },

    subtopic: {
        color: 'white',
        fontSize: 19,
        alignSelf: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    }, 

    bg2:{
        backgroundColor: 'white',
        height: 700, 
        width: 460,
        borderTopLeftRadius: 90,
        paddingTop: 35,
        paddingLeft: 14,
        paddingRight: 10,
    
    }, 

    btn: {
        marginBottom: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 15,
        

    },

    lastText:{
        color: 'black',
        paddingHorizontal: 30,
        marginTop: 25,
        fontSize: 18,
        alignItems: 'center',

    }, 
    loginText: {
        color: 'blue',
        
    }, 

    viewstyle:{
        flex: 1,
        flexDirection: 'row',
    }

  


});

export default NewRegistration;