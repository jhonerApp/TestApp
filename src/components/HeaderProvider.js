import React from 'react'
import { View, StyleSheet } from 'react-native';



function HeaderProvider(props) {
    return (
        <View
            style={(props.styles != null) ? (props.styles) : (styles.container)}>
            {props.children}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '35%',
        position: 'absolute',
        backgroundColor: "#212F3D",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        paddingTop: 50,
        flexDirection: 'column',
    },

})

export default HeaderProvider
