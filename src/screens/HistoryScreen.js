import React, { Fragment } from 'react';
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5
} from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
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
import BoxImage from '../../assets/iconTracker/icons8-package-96.png'




function HistoryScreen(props) {

    const pressButton = (e) => {
        const currentOffset = e.nativeEvent.contentOffset.y
        if (currentOffset <= 0) {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarShow })
        } else {
            props.navigation.setOptions({ tabBarStyle: styles.tabBarHide })
        }
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
                    flexDirection: 'column'
                }}
            >
                <View>
                    <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', textAlign: 'center', fontSize: 27, paddingTop: 40, paddingBottom: 12 }}>Package History</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: 25,
                        paddingLeft: 25,
                    }}
                >
                    <Input
                        placeholder="Search package history"
                        fontSize="14"
                        width="100%"
                        style={{
                            alignItems: 'center'
                        }}

                    />

                </View>
            </View>

            <View style={{
                flex: 1,
                position: 'relative',
                height: '100%',
                width: '100%',
                top: 140,


            }}>

                <ScrollView onScroll={(e) => pressButton(e)} scrollEventThrottle={16}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingTop: 10

                        }}
                    >
                        <View
                            bg="info.50"
                            style={{
                                width: '95%',
                                height: '100%',
                                paddingBottom: 180,
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
                                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 15, paddingBottom: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={BoxImage} height={10} width={10} alt='image' />
                                                <View style={{ paddingLeft: 20, alignContent: 'flex-start' }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Status: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>Completed</Text></Text>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Location: <Text style={{ fontFamily: 'Montserrat-Light', fontSize: 12 }}>Makati City - Taguig</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Divider />

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                            <View style={{ paddingTop: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Order id: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>#123456</Text></Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}
                                                onPress={() => props.navigation.navigate('HistoryDetailsScreen', props.navigate)}>
                                                <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Stack>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>


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
                                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 15, paddingBottom: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={BoxImage} height={10} width={10} alt='image' />
                                                <View style={{ paddingLeft: 20, alignContent: 'flex-start' }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Status: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>Completed</Text></Text>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Location: <Text style={{ fontFamily: 'Montserrat-Light', fontSize: 12 }}>Makati City - Taguig</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                            <View style={{ paddingTop: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Order id: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>#123456</Text></Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                                <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Stack>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>


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
                                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 15, paddingBottom: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={BoxImage} height={10} width={10} alt='image' />
                                                <View style={{ paddingLeft: 20, alignContent: 'flex-start' }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Status: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'red' }}>Cancelled</Text></Text>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Location: <Text style={{ fontFamily: 'Montserrat-Light', fontSize: 12 }}>Makati City - Taguig</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                            <View style={{ paddingTop: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Order id: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>#123456</Text></Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                                <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Stack>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>

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
                                    <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, paddingLeft: 15, paddingBottom: 10 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={BoxImage} height={10} width={10} alt='image' />
                                                <View style={{ paddingLeft: 20, alignContent: 'flex-start' }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Status: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>Completed</Text></Text>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Location: <Text style={{ fontFamily: 'Montserrat-Light', fontSize: 12 }}>Makati City - Taguig</Text></Text>
                                                </View>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                            <View style={{ paddingTop: 10 }}>
                                                <Text style={{ fontFamily: 'Montserrat-Bold' }}>Order id: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}>#123456</Text></Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: '#34495E', borderRadius: 8, width: 60, height: 35, alignItems: 'center', }}>
                                                <Text style={{ paddingTop: 8, fontFamily: 'Montserrat-Medium', color: 'white' }}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Flex>
                                </View>
                            </Stack>
                            <View style={{
                                paddingBottom: 10,
                                flexDirection: 'row'
                            }}></View>
                        </View >
                    </View >
                </ScrollView >
            </View >
        </BaseProvider >
    );
}


const styles = StyleSheet.create({
    tabBarShow: {
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 5,
        left: 5,
        borderRadius: 20,
        backgroundColor: '#F4F6F6',
        borderColor: '#2E4053',
    },
    tabBarHide: {
        display: 'none'
    }
})

export default HistoryScreen;