import React, { Fragment } from 'react';
import {
    Ionicons,
} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {
    Stack,
    Icon,
    Text,
    Input,
    Flex,
    View,
    ScrollView,
    Divider,
    Image,
} from 'native-base';
import BaseProvider from '../components/BaseProvider';

import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../assets/iconTracker/icons8-pickup-point-128.png'

import BackButton from '../components/BackButton'
import HeaderProvider from '../components/HeaderProvider'

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
    return (
        <BaseProvider>
            <HeaderProvider>
                <View style={{ paddingBottom: 30, justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>
                        <BackButton style={{ paddingLeft: 30 }} navigate={props} />
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', paddingRight: 35 }}>FOR DELIVERY</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingRight: 30,
                            paddingLeft: 30,
                        }}
                    >
                        <Input
                            placeholder="Search for delivery"
                            fontSize="14"
                            width="100%"
                            InputLeftElement={
                                <Icon
                                    as={<Ionicons name="search-circle" />}
                                    size={10}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                        />
                    </View>
                </View>
            </HeaderProvider>

            <View style={{
                flex: 1,
                position: 'relative',
                height: '100%',
                width: '100%',
                top: 170,


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