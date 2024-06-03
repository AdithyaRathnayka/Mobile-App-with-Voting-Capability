import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRegistration from '../Screens/NewRegistration';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack =() => {
        return (

            <Stack.Navigator initialRouteName = 'NewRegistration'
            screenOptions={{headerShown : false}}

            >
                <Stack.Screen name = "Registration" component={ NewRegistration }/>
                <Stack.Screen name = "Login" component={Login}/>
              
                
                
                
    
            </Stack.Navigator>
  
    
        );
    };

export default AuthStack;