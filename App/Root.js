import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewRegistration from './Screens/NewRegistration';
import Login from './Screens/Login';


const Stack = createNativeStackNavigator();

const App =() => {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'NewRegistration'
            screenOptions={{headerShown : false}} >
                <Stack.Screen name = "NewRegistration" component={ NewRegistration } 
                 />
                <Stack.Screen name = "Login" component={Login}/>
            </Stack.Navigator>

        </NavigationContainer>    
       
        )
    }

export default App;