import React, { Fragment } from 'react';
import {
    MaterialIcons,
    Ionicons,
    FontAwesome
} from '@expo/vector-icons';
import { TouchableOpacity, Dimensions, Image } from 'react-native';
import {
    Stack,
    Icon,
    Text,
    Input,
    Flex,
    View,
    ScrollView,
    Divider,
    IconButton
} from 'native-base';
import BaseProvider from '../components/BaseProvider';

import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../assets/iconTracker/icons8-pickup-point-128.png'
import deliveryIcon from '../../assets/iconTracker/imageedit_9_3739506774.png'


import BackButton from '../components/BackButton'
import HeaderProvider from '../components/HeaderProvider'
import { height, width } from 'styled-system';

// function ButtonM(props) {
//     return (
//         <Fragment>
//             <View {...props}>
//                 <TouchableOpacity onPress={() => props.navigate.navigation.goBack()}>
//                     <Ionicons
//                         name="caret-back-outline"
//                         size={24}
//                         color="#FBFCFC"
//                         style={{ width: 50 }}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </Fragment>
//     );
// }

function DeliveryScreen(props) {

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width;

    return (
        <BaseProvider>
            <View style={{
                width: '100%',
                height: '43%',
                //position: 'absolute',
                backgroundColor: "#212F3D",
                //paddingTop: 50,
                flexDirection: 'column',
                paddingTop: 30,
            }}>
                <View style={{ paddingBottom: 5, flexDirection: 'column' }}>
                    <View style={{ paddingLeft: 5, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20, paddingTop: 20 }}>
                        <BackButton style={{ paddingLeft: 30 }} navigate={props} />
                        <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryScreen', props.navigate)}
                            style={{ backgroundColor: '#2E86C1', borderRadius: 40, width: 40, height: 40, paddingHorizontal: 10, paddingTop: 10 }}>
                            <MaterialIcons
                                name="my-library-add"
                                size={20}
                                color="#FDFEFE"
                                style={{ width: 50 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', }}>
                  
                        <View style={{ margin: 20, alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white' }}>Track your delivery</Text>
                            <Text style={{ fontFamily: 'Montserrat-Light', color: 'white' }}>Enter your track number</Text>
                            <Text style={{ fontFamily: 'Montserrat-Light', color: 'white' }}> to search your parcel</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingRight: 30,
                        paddingLeft: 30,
                        paddingBottom: 15
                    }}
                >
                    <Input
                        placeholder="Search for delivery"
                        fontSize="14"
                        width="100%"
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome name="search" />}
                                size={5}
                                ml="2"
                                color="muted.400"
                            />
                        }
                    />

                </View>
            </View>

            <View style={{
                flex: 1,
                position: 'relative',
                height: '100%',
                width: '100%',
                top: 10
                //top: 170,


            }}>

                <ScrollView>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}
                    >
                        <View
                            bg="info.50"
                            style={{
                                width: '95%',
                                height: '100%',
                                paddingBottom: 160,
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
                                    flex: 1,

                                }}
                            >
                                <View>
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
                                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>


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



                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, margin: 10 }}>

                                            <View style={{ flexDirection: 'column' }}>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Status: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'red' }}>Pending</Text></Text>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Price: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>1200</Text></Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                                <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>Accept</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Stack>
                            <View style={{
                                paddingBottom: 20,
                                flexDirection: 'row'
                            }}></View>


                        </View>
                    </View>
                </ScrollView>
            </View>


        </BaseProvider >
    );
}
export default DeliveryScreen;