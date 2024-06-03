import { useContext, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity,} from 'react-native';
import Textfield from '../Components/Textfield';
import Button from '../Components/Button';
import { AuthContext } from '../Navigation/AuthProvider';

const Login = ({navigation}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const {login}= useContext(AuthContext); 

    const reg = () =>{
        navigation.navigate('NewRegistration');
    }

    const loginbtn = ()=> {
        if (username == null ||
            username === '' ||
            password == null ||
            password === '')
        alert('Empty Fields Cannot Be Kept !!!')

     else{
        {() => login(username, password)}
        alert('Login Successful')
     }   
    } 

        return (
            <View style = {styles.contain}>
                <Text style = {styles.topic}> Login</Text>
 
 
              
                <View style = {styles.bg2}>
                <Text style = {styles.subtopic}> Welcome Back</Text>
                <Text style = {styles.subtext}> Login to your account</Text>

               
                <Textfield placeholder = "Email or User name"
                keyboardType = {"email-address"}
                value = {username}
                onChangeText = {(user)=> setUsername(user)}/>

               
                
                <Textfield placeholder = "Password" 
                secureTextEntry = {true}
                value = {password}
                onChangeText = {(userPassword)=> setPassword(userPassword)}/>
               
            
                <Button textColor= 'white' 
                  bgColor='rgb(0,0,100)'
                  buttontext = "Login"
                  onPress = {loginbtn}/>


< View style = {styles.viewstyle}>
           <Text style = {styles.lastText}> Do You Have An Account?
           <TouchableOpacity
           onPress={reg}
           ><Text style = {styles.loginText}> Signup </Text></TouchableOpacity> </Text>
        
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
        color: 'rgba(25, 33, 100, 1)',
        fontSize: 40, 
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 30,
    }, 

    subtext: {
        fontSize: 20, 
        marginLeft: 80,
        marginBottom: 50,

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
        marginTop: 180,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingLeft: 10,
        paddingRight: 15,
        

    },

    lastText:{
        color: 'rgba(25, 33, 100, 1)',
        paddingHorizontal: 30,
        marginTop: 20,
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

export default Login;