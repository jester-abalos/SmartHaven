import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './assets/screens/LoginScreen.js';
import HomeScreen from './assets/screens/HomeScreen.js';

  // Fixed typo
import AboutScreen from './assets/screens/AboutScreen.js';
import SignupScreen from './assets/screens/SignupScreen.js';
import IndexScreen from './assets/screens/IndexScreen.js';
import SettingsScreen from './assets/screens/SettingsScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        

        <Stack.Screen name="Index" component={IndexScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
        
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
