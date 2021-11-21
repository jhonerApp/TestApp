import React, { Fragment } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import DeliveryScreen from '../screens/DeliveryScreen'

import { Feather, Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();



function ButtonM(props) {
    return (
        <Fragment>
            <View style={styles.buttonDesign}>
                <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryScreen', props.navigate)}
                    style={{ backgroundColor: '#2C3E50', borderRadius: 40, width: 45, height: 45, paddingHorizontal: 10, paddingTop: 10 }}>
                    <Feather
                        name="bell"
                        size={24}
                        color="#FDFEFE"
                        style={{ width: 50 }}

                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
}


function Home(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerRight: () => <ButtonM {...props} />,
                headerTitle: '',
                headerTransparent: true,
            }}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    buttonDesign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingTop: 7
    },
})
export default Home
