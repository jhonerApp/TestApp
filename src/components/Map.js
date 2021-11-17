import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

import MapView from 'react-native-maps';
function Map(props) {

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})
export default Map
