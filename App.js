import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import User from './screens/User'
import Profile from './screens/Profile'
import { AdMobInterstitial } from "expo-ads-admob";
//import Settings from './screens/User'

const Stack = createNativeStackNavigator();

export default function App() {
  const interstitialID = "ca-app-pub-1308691032911883/7181862196"

  useEffect(async () => {
  
    try{
    AdMobInterstitial.setAdUnitID(interstitialID);
    await AdMobInterstitial.requestAdAsync({servePersonalizedAds:false})
    await AdMobInterstitial.showAdAsync()
    }catch(e){
      console.log({e})
    }
    

  }, [])

  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User}/>
      <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
     </NavigationContainer>
     
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
