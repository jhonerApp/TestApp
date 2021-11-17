import React, { Fragment } from 'react'

import {
    Divider, View, Text, Input, Image

} from 'native-base'
import pickupIcon from '../../../assets/iconTracker/icons8-bicycle-64.png'
import dropIcon from '../../../assets/iconTracker/icons8-pickup-point-128.png'


function CreateFirstPackage(props) {
    return (
        <Fragment>
            <Divider />
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
                <Image source={pickupIcon} height={7} width={7} alt='image' />
                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 5 }}>PICK UP DETAILS</Text>
            </View>
            <Divider />
            <View style={{ flexDirection: 'column', margin: 2 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Company name(Optional): </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 2 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Firstname: </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <Input variant="rounded" w="100%" />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Lastname: </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <Input variant="rounded" w="100%" />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Cellphone#: </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Pickup Address: </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" placeholder="Round" />
                </View>
            </View>
            <Divider />

            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
                <Image source={dropIcon} height={7} width={7} alt='image' />
                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 5 }}>DROP OFF DETAILS</Text>
            </View>
            <Divider />
            <View style={{ flexDirection: 'column', margin: 2 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Company name(Optional): </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 2 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Firstname: </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <Input variant="rounded" w="100%" />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Lastname: </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <Input variant="rounded" w="100%" />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Cellphone#: </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Dropoff Address: </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <Input variant="rounded" placeholder="Round" />
                </View>
            </View>

        </Fragment>
    )
}

export default CreateFirstPackage
