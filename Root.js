import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRegistration from './Screens/NewRegistration';
import Login from './Screens/Login';
import Home from './Screens/Home';
import ExBoard from './Screens/ExBoard';
import Gallery from './Screens/Gallery';
import ExpandImage from './Screens/ExpandImage';
import Event from './Screens/Event';
import Webinar from './Screens/Webinar';
import Meetup from './Screens/Meetup';
import Webinar1 from './Screens/Webinar1';
import Webinar2 from './Screens/Webinar2';




const Stack = createNativeStackNavigator();

const App =() => {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'NewRegistration'
            screenOptions={{headerShown : false}}
            >
                <Stack.Screen name = "Registration" component={ NewRegistration }/>
                <Stack.Screen name = "Home" component={Home}/>
                <Stack.Screen name = "Login" component={Login}/>
                <Stack.Screen name = "ExBoard" component={ExBoard}/>
                <Stack.Screen name = "Gallery" component={Gallery}/>
                <Stack.Screen name = "ExpandImage" component={ExpandImage}/>
                <Stack.Screen name = "Event" component={Event}/>
                <Stack.Screen name = "Webinar" component={Webinar}/>
                <Stack.Screen name = "Meetup" component={Meetup}/>
                <Stack.Screen name = "Webinar1" component={Webinar1}/>
                <Stack.Screen name = "Webinar2" component={Webinar2}/>
            </Stack.Navigator>

        </NavigationContainer>    
    
        )
    }

export default App;