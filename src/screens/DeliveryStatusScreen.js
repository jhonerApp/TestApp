import React, { Fragment, useState, useRef } from 'react';
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5,
    FontAwesome,
    MaterialIcons
} from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native';
import {
    Stack,
    Container,
    Button,
    HStack,
    IconButton,
    NativeBaseProvider,
    Text,
    Input,
    Flex,
    Center,
    View,
    ScrollView,
    Divider,
    Avatar,
    Image,
    Box,
    VStack
} from 'native-base';
import BaseProvider from '../components/BaseProvider';
import StepIndicator from 'react-native-step-indicator';
import { borderRadius, paddingTop } from 'styled-system';


import boxIconCurrent from '../../assets/iconTracker/icons8-trolley-50.png'
import boxIconFinish from '../../assets/iconTracker/icons8-trolleycomplete-50.png'

import wayIconCurrent from '../../assets/iconTracker/icons8-tracking-50.png'
import wayIconFinish from '../../assets/iconTracker/icons8-trackingcomplete-50.png'

import truckIconCurrent from '../../assets/iconTracker/icons8-truck-50.png'
import truckIconFinish from '../../assets/iconTracker/icons8-shipped-50.png'

import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../assets/iconTracker/icons8-pickup-point-128.png'


//icons8-delivered-64
function ButtonM(props) {
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
    );
}


const iconData = [
    { id: 0, label: 'Package received', type: MaterialCommunityIcons, current: boxIconCurrent, finished: boxIconFinish }, //current: 'package-variant', finished: 'package-variant-closed' },
    { id: 1, label: 'On the way', type: MaterialCommunityIcons, current: wayIconCurrent, finished: wayIconFinish }, //current: 'truck-fast-outline', finished: 'truck-fast' },
    { id: 2, label: 'Delivered', type: MaterialCommunityIcons, current: truckIconCurrent, finished: truckIconFinish }, //current: 'truck-check-outline', finished: 'truck-check' },

];
// package
// truck-fast
// truck-check
const labels = ["Package received", "On the way", "Delivered"];
const dummyData = {
    data: [
        {
            name: 'Package received',
            date: 'June 1  10:40 AM'
        },
        {
            name: 'On the way',
            date: 'June 2  10:40 AM'
        }, {
            name: 'Delivered',
            date: 'June 3  10:40 AM'
        },

    ]
}

const customStyles = {
    stepIndicatorSize: 42,
    currentStepIndicatorSize: 42,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#283747',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#283747',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#283747',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#283747',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#283747',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    labelAlign: 'stretch',
    currentStepLabelColor: '#283747'
}

function DeliveryStatusScreen(props) {

    const [currentPage, setCurrentPage] = useState(0)

    const nextStep = () => {
        setCurrentPage(currentPage + 1);

    }
    return (
        <BaseProvider>
            <View
                style={{
                    width: '100%',
                    height: '35%',
                    position: 'absolute',
                    backgroundColor: "#212F3D",
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    paddingTop: 50,
                    flexDirection: 'column',


                }}
            >

                <View style={{ paddingBottom: 30, justifyContent: 'flex-start', flexDirection: 'column' }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>
                        <ButtonM style={{ paddingLeft: 20 }} navigate={props} />

                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', paddingRight: 20, fontSize: 20, }}>Delivery Today</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'column',
                            paddingTop: 10,

                        }}
                    >
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', alignSelf: 'center' }}>Estimated Delivery Time</Text>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', alignSelf: 'center' }}>2 Hrs</Text>
                        {/* <Input
                            placeholder="Search for delivery"
                            fontSize="14"
                            width="95%"

                        />
                        <View style={{ paddingLeft: 10 }}>
                            <IconButton
                                colorScheme="darkBlue"
                                variant="solid"
                                _icon={{
                                    as: AntDesign,
                                    name: 'search1',
                                }}
                            />
                        </View> */}
                    </View>
                </View>
            </View>

            <View style={{
                flex: 1,
                position: 'relative',
                width: '100%',
                top: 165,


            }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingBottom: '10%'

                        }}
                    >
                        <View
                            bg="info.50"
                            style={{
                                width: '95%',
                                height: '100%',
                                paddingBottom: 170,
                                borderRadius: 10,

                            }}
                        >

                            <Stack
                                bg="#FBFCFC"
                                shadow={6}
                                rounded='md'
                                w="100%"
                                style={{
                                    paddingTop: 10,
                                    justifyContent: 'space-between',

                                }}
                            >

                                <View style={{ flexDirection: 'column', flex: 1 }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            margin: 10,
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={{ fontFamily: 'Montserrat-Black' }}>
                                            #123456
                                        </Text>
                                        <Text style={{ fontFamily: 'Montserrat-Light' }}>
                                            June 21,2021
                                        </Text>
                                    </View>
                                    <Divider />
                                    <Flex style={{ flexDirection: 'column', flex: 1 }}>
                                        <View style={{ flexDirection: 'column', paddingLeft: 15, paddingTop: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={pickupIcon} height={7} width={7} alt='image' />
                                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 2 }}>Pickup Point: </Text>
                                            </View>
                                            <View style={{ paddingHorizontal: 30, margin: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Light' }}> 23 F E jacinto St west
                                                    rembo makati city,philippine 1215 District 2 zdfdfsfs
                                                    sdfsdfsdf sfdsfsdfsdf</Text>
                                            </View>
                                        </View>

                                        <Divider />
                                        <View style={{ flexDirection: 'column', paddingTop: 10, paddingLeft: 15 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={dropIcon} height={7} width={7} alt='image' />
                                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 2 }}>Drop Point: </Text>
                                            </View>
                                            <View style={{ paddingHorizontal: 30, margin: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Light' }}> 23 F E jacinto St west
                                                    rembo makati city,philippine 1215 District 2 zdfdfsfs
                                                    sdfsdfsdf sfdsfsdfsdf</Text>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ height: 320, paddingHorizontal: 40 }}>
                                            <Text style={{ fontFamily: 'Montserrat-Bold', color: '#212F3D', alignSelf: 'center', paddingBottom: 15, paddingTop: 20 }}>TRACKER</Text>
                                            <StepIndicator
                                                customStyles={customStyles}
                                                stepCount={3}
                                                currentPosition={currentPage}
                                                direction='vertical'
                                                labels={dummyData.data.map(item => {
                                                    return (
                                                        <View style={{ paddingLeft: 40, paddingTop: 5 }}>
                                                            <Text style={{ fontFamily: 'Montserrat-Medium' }}>{item.name}</Text>
                                                            <Text style={{ fontFamily: 'Montserrat-Light' }}>{item.date}</Text>
                                                            <Text style={{ fontFamily: 'Montserrat-Light' }}>Status: <Text style={{ color: 'green' }}>(Completed) </Text></Text>
                                                        </View>
                                                    )
                                                })}

                                                //StepProcess

                                                // renderStepIndicator={(props => {
                                                //     console.log(props.position)
                                                //     console.log(iconData[props.position].type)

                                                //     let IconType = iconData[0].type;
                                                //     iconData.map(item => {

                                                //         return (
                                                //             <iconData.type name='package-variant' size={20} color='black' />
                                                //         )
                                                //     })
                                                // })}

                                                //stepStatus
                                                renderStepIndicator={(props) => {

                                                    let current = iconData[props.position].current;
                                                    let finished = iconData[props.position].finished;
                                                    let imagesrc = (props.stepStatus == 'current') ? current : finished
                                                    console.log('props stepStatus', props.stepStatus);
                                                    return (
                                                        <Image key={imagesrc} source={(props.stepStatus) == 'finished' ? finished : current} height={7} width={7} alt='image' />
                                                    )

                                                }}
                                            />
                                        </View>

                                        <View
                                            style={{
                                                margin: 10,
                                                paddingBottom: '5%',
                                                flexDirection: 'column'
                                            }}
                                        >
                                            <View style={{ alignItems: 'center', paddingBottom: 5 }} >
                                                <TouchableOpacity
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        backgroundColor: '#2980B9',
                                                        padding: 12,
                                                        width: '100%'
                                                    }}

                                                >
                                                    <FontAwesome
                                                        name="edit"
                                                        size={24}
                                                        color="#FDFEFE"
                                                        style={{ width: 40 }}
                                                    />
                                                    <Text style={{ color: 'white' }}>UPDATE STATUS</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ alignItems: 'center' }} >
                                                <TouchableOpacity
                                                    onPress={nextStep}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        backgroundColor: '#A93226',
                                                        padding: 12,
                                                        width: '100%'
                                                    }}

                                                >
                                                    <MaterialIcons
                                                        name="cancel"
                                                        size={24}
                                                        color="#FDFEFE"
                                                        style={{ width: 40 }}
                                                    />
                                                    <Text style={{ color: 'white' }}>CANCEL</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>



                                    </Flex>

                                </View>
                            </Stack>


                        </View>
                    </View>


                </ScrollView>

            </View>



        </BaseProvider >
    )
}




export default DeliveryStatusScreen
