import {View, StyleSheet, Text,} from 'react-native';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';

const NewRegistration = ({navigation}) => {
 
    const clickMe = () => {
        navigation.navigate('Login');
    }
    
        return (
            <View style = {styles.contain}>
                <Text style = {styles.topic}> Register</Text>
 
 
                <Text style = {styles.subtopic}> Create a new account</Text>

                <View style = {styles.bg2}>

                <Textfield placeholder = "First Name"/>
                <Textfield placeholder = "Last Name"/>
                <Textfield placeholder = "Faculty mail" keyboardType = {"email-address"}/>
                <Textfield placeholder = "AR Number"/>
                <Textfield placeholder = "Password" secureTextEntry = {true}/>
                <Textfield placeholder = "Confirm Password" secureTextEntry = {true}/>
                <Button textColor= 'white' 
                  bgColor='rgb(0,0,100)'
                  buttontext = "Login"
                  buttonClick = {clickMe}/>

           <Text style = {styles.lastText}> Already Have An Account? <Text style = {styles.loginText}>Login</Text></Text>
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
        marginTop: 20,
        fontSize: 18,
        alignItems: 'center',

    }, 
    loginText: {
        color: 'blue',
        
    }

  


});

export default NewRegistration;