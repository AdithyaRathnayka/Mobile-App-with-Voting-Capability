import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';
import ExBoard from '../Screens/ExBoard';
import Gallery from '../Screens/Gallery';
import ExpandImage from '../Screens/ExpandImage';
import Event from '../Screens/Event';
import Webinar from '../Screens/Webinar';
import Meetup from '../Screens/Meetup';
import Webinar1 from '../Screens/Webinar1';
import Webinar2 from '../Screens/Webinar2';
import CSR from '../Screens/CSR';
import CSR1 from '../Screens/CSR1';
import Calender from '../Screens/Calender';
import MainVote from '../Screens/MainVote';

const Stack = createNativeStackNavigator();

const AppStack =() => {
        return (
             <Stack.Navigator initialRouteName = 'NewRegistration'
             screenOptions={{headerShown : false}}
             >
               
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "ExBoard" component={ExBoard}/>
                <Stack.Screen name = "Gallery" component={Gallery}/>
                <Stack.Screen name = "ExpandImage" component={ExpandImage}/>
                <Stack.Screen name = "Event" component={Event}/>
                <Stack.Screen name = "Webinar" component={Webinar}/>
                <Stack.Screen name = "Meetup" component={Meetup}/>
                <Stack.Screen name = "Webinar1" component={Webinar1}/>
                <Stack.Screen name = "Webinar2" component={Webinar2}/>
                <Stack.Screen name = "CSR" component={CSR}/>
                <Stack.Screen name = "CSR1" component={CSR1}/>
                <Stack.Screen name = "Calender" component={Calender}/>
                <Stack.Screen name = "MainVote" component={MainVote}/>

           </Stack.Navigator>
    
        )
    }

export default AppStack;
