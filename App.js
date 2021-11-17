import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


import TabMenu from './src/navigation/Tabmenu'
import DeliveryScreen from './src/screens/DeliveryScreen'
import DeliveryStatusScreen from './src/screens/DeliveryStatusScreen'
import HistoryDetailsScreen from './src/screens/HistoryDetailsScreen'
import CreateDelivery from './src/screens/CreateDelivery'

import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


const Stacks = createStackNavigator();





//initialRouteName='DeliveryScreen' 
export default function App() {

  let [loadFonts] = useFonts({
    'Montserrat-Black': require('./assets/Montserrat/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-ExtraLight': require('./assets/Montserrat/Montserrat-ExtraLight.ttf'),
    'Montserrat-Italic': require('./assets/Montserrat/Montserrat-Italic.ttf'),
    'Montserrat-Light': require('./assets/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/Montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('./assets/Montserrat/Montserrat-Thin.ttf'),
  });

  if (!loadFonts) {
    return null
  }

  return (
    //initialRouteName='HistoryDetailsScreen'
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} initialRouteName='CreateDeliveryScreen'>
        <Stacks.Screen name="TabMenu" component={TabMenu} options={{ headerShown: false }} />
        <Stacks.Group screenOptions={{ presentation: 'modal' }}>
          <Stacks.Screen name="DeliveryScreen" component={DeliveryScreen} options={{
            headerShown: false,
          }}
          />
          <Stacks.Screen name="DeliveryStatusScreen" component={DeliveryStatusScreen} options={{
            headerShown: false,
          }}
          />
          <Stacks.Screen name="HistoryDetailsScreen" component={HistoryDetailsScreen} options={{
            headerShown: false,
          }}
          />
          <Stacks.Screen name="CreateDeliveryScreen" component={CreateDelivery} options={{
            headerShown: false,
          }}
          />
        </Stacks.Group>
      </Stacks.Navigator>
    </NavigationContainer>

  );
}

