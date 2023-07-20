import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

// Screens
import HomeScreen from "./Screens/HomeScreen"
import Pokemon from "./Screens/Pokemon"

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Pokemon" component={Pokemon}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
