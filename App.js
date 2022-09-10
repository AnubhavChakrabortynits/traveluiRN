import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Liked from './components/Liked';
import Details from './components/Details';
import Profile from './components/Profile';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function App() {

  const Stack=createNativeStackNavigator()
  const Tab=createBottomTabNavigator()

  const TabNavigator=()=>{
    return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:"orange",tabBarInactiveTintColor:"black",tabBarShowLabel:false,
        headerShown:false
      
      }
      }>

      <Tab.Screen  name="Home" component={Home} options={{
        tabBarIcon:({color})=><Entypo name="home" size={32} color={color}/>
      }} />
      <Tab.Screen name="Liked" component={Liked} options={{
        tabBarIcon:({color})=><Entypo name="heart" size={32} color={color}/>
      }}  />
      <Tab.Screen name="Profile" component={Profile} 
options={{
        tabBarIcon:({color})=><MaterialCommunityIcons name="account" size={32} color={color}/>}}

      />
      
            </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="TabNavigator" component={TabNavigator}/>
    <Stack.Screen name="Details" component={Details}/>
  </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:20,
    borderRadius:20

  },
});
