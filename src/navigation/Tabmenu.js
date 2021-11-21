import React, { useRef, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import Home from './Home'
import Auth from './Auth'
import History from '../screens/HistoryScreen'
import Profile from '../screens/ProfileScreen'

import { Fragment } from 'react';
import { width } from 'styled-system';
const Tab = createBottomTabNavigator();




const TabButton = (props) => {
    const { id, item, onPress, accessibilityState } = props
    const focused = accessibilityState.selected
    const viewRef = useRef(null)

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} >
            <item.type name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? '#1A5276' : '#D4E6F1'} size={24} />
            <Text style={{ color: focused ? '#1A5276' : '#D4E6F1', fontSize: 9, paddingTop: 5 }}>{item.label}</Text>
        </TouchableOpacity>
    )

}

const TabArr = [
    { id: 1, route: 'Home', label: 'HOME', type: Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Home },
    { id: 4, route: 'Accounts', label: 'PROFILE', type: FontAwesome, activeIcon: 'user-circle-o', inActiveIcon: 'user-circle', component: Profile },
    { id: 3, route: 'Delivery History', label: 'HISTORY', type: Ionicons, activeIcon: 'newspaper', inActiveIcon: 'newspaper-outline', component: History },

];




function TabMenu() {

    return (


        <Tab.Navigator

            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 10,
                    right: 5,
                    left: 5,
                    borderRadius: 20,
                    backgroundColor: '#F4F6F6',



                }


            }}

        >

            {TabArr.map((item, index) => {
                return (

                    <Tab.Screen name={item.route} component={item.component} key={item.id}
                        options={{

                            // tabBarIcon: ({ color, focused }) => (
                            //     <Fragment>
                            //         <item.type key={item.id} name={focused ? item.activeIcon : item.inActiveIcon} color={item.color} size={24} />

                            //     </Fragment>
                            // ),
                            tabBarButton: (props) => <TabButton {...props} item={item} />


                        }}
                    ></Tab.Screen>
                )
            })}

        </Tab.Navigator>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabMenu
