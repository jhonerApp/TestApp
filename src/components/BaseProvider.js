import React from 'react'
import { StyleSheet } from 'react-native'
import { NativeBaseProvider, View, Flex } from 'native-base'
function BaseProvider(props) {
    return (
        <NativeBaseProvider>
            <Flex
                bg="info.50"
                style={styles.container}>
                {props.children}
            </Flex>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',

    }
})

export default BaseProvider
