import React, { Fragment } from 'react'
import { TouchableOpacity, View } from 'react-native';
import {
    Ionicons,
} from '@expo/vector-icons';

function BackButton(props) {
    return (
        <Fragment>
            <View {...props}>
                <TouchableOpacity onPress={() => props.navigate.navigation.goBack()}>
                    <Ionicons
                        name="caret-back-outline"
                        size={24}
                        color="#FBFCFC"
                        style={{ width: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    )
}

export default BackButton
