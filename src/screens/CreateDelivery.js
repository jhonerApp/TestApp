import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup";
import {
    FontAwesome,
    MaterialIcons,
    AntDesign,
    MaterialCommunityIcons,
    FontAwesome5
} from '@expo/vector-icons';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { TouchableOpacity, Button, Platform } from 'react-native';
import {
    FormControl,
    WarningOutlineIcon,
    Stack,
    Icon,
    Text,
    Input,
    Flex,
    ScrollView,
    Divider,
    Image,
    Radio,
    TextArea



} from 'native-base';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import BackButton from '../components/BackButton'
import HeaderProvider from '../components/HeaderProvider'
import BaseProvider from '../components/BaseProvider'
import DatePicker from '../utils/DatePicker';
import Timepicker from '../utils/Timepicker';
import FormikInput from '../utils/FormikInput';
import FormikRadio from '../utils/FormikRadio';

import CreateFirstPackage from '../components/Delivery/CreateFirstPackage';

import CarIcon from '../../assets/iconTracker/icons8-car-64.png'
import TruckIcon from '../../assets/iconTracker/icons8-delivery-truck-64.png'
import VanIcon from '../../assets/iconTracker/icons8-van-64.png'
import BikeIcon from '../../assets/iconTracker/icons8-bicycle-64.png'
import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../assets/iconTracker/icons8-pickup-point-128.png'
import parcelIcon from '../../assets/iconTracker/icons8-big-parcel-64.png'


function CreateDelivery(props) {

    const validationSchema = Yup.object({
        parcelHeight: Yup.string().required("Required!"),
        parcelWitdh: Yup.string().required("Required!"),
        deliverOption: Yup.string().required("Delivery Option Required!"),
    })

    const itemsOption = [
        { key: '1', value: 'Bike', image: BikeIcon },
        { key: '2', value: 'Truck', image: TruckIcon },
        { key: '3', value: 'Van', image: VanIcon },
        { key: '4', value: 'Car', image: CarIcon }
    ]






    const [groupValue, setGroupValue] = useState('')
    //https://github.com/nphivu414/react-multi-step-form/blob/master/src/components/CheckoutPage/Forms/AddressForm.jsx
    //https://medium.com/@nphivu414/build-a-multi-step-form-with-react-hooks-formik-yup-and-materialui-fa4f73545598
    const formik = useFormik({
        validationSchema: validationSchema,
        enableReinitialize: true,
        initialValues: {
            parcelHeight: '',
            parcelWitdh: '',
            deliverOption: ''
        },
        onSubmit: (values, actions) => {
            // alert(JSON.stringify(values, null, 2))
            alert(JSON.stringify(values))
            actions.setTouched({})
            actions.setSubmitting(false)
        }
    })


    return (
        <BaseProvider>
            <KeyboardAwareScrollView>
                <HeaderProvider styles={styles.container}>
                    <View style={{ paddingBottom: 30, justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 15 }}>
                            <BackButton style={{ paddingLeft: 30 }} navigate={props} />
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: 'white', paddingRight: 35, fontSize: 18 }}>CREATE PACKAGE</Text>
                        </View>
                    </View>
                </HeaderProvider>




                <View style={{
                    flex: 1,
                    position: 'relative',
                    height: '100%',
                    width: '100%',
                    top: 105,


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

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            margin: 10,
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12 }}>Package ID: <Text style={{ fontFamily: 'Montserrat-Medium', color: 'green' }}> #00001</Text></Text>
                                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12 }}>Date Today: <Text style={{ fontFamily: 'Montserrat-Medium', color: '#2C3E50' }}>June 21,2021</Text></Text>
                                    </View>




                                    <Formik>
                                        <Flex style={{ flexDirection: 'column', justifyContent: 'space-between' }}>

                                            {/* <Divider />
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
                                            <Divider /> */}


                                            <CreateFirstPackage />



                                            <Divider />
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
                                                <Image source={parcelIcon} height={7} width={7} alt='image' />
                                                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 5 }}>PARCEL DETAILS</Text>
                                            </View>
                                            <Divider />

                                            <View style={{ flexDirection: 'column', margin: 2 }}>
                                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Item Details: </Text>
                                                </View>
                                                <View style={{ margin: 2 }}>
                                                    <TextArea h={20} />
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Parcel Height(cm)</Text>
                                                    </View>
                                                    <View>
                                                        <FormikInput
                                                            onChangeText={formik.handleChange('parcelHeight')}
                                                            onBlur={formik.handleBlur('parcelHeight')}
                                                            error={formik.errors.parcelHeight}
                                                            val={formik.values.parcelHeight}
                                                            touched={formik.touched.parcelHeight} />
                                                    </View>
                                                </View>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Parcel Witdh(cm) </Text>
                                                    </View>
                                                    <FormikInput
                                                        onChangeText={formik.handleChange('parcelWitdh')}
                                                        onBlur={formik.handleBlur('parcelWitdh')}
                                                        error={formik.errors.parcelWitdh}
                                                        val={formik.values.parcelWitdh}
                                                        touched={formik.touched.parcelWitdh} />
                                                </View>
                                            </View>


                                            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Parcel Length(cm)</Text>
                                                    </View>
                                                    <View>
                                                        <Input variant="rounded"
                                                            textAlign='right' style={{ fontFamily: 'Montserrat-Bold' }}
                                                            keyboardType='numeric'

                                                        />
                                                    </View>
                                                </View>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Parcel Weigth(cm) </Text>
                                                    </View>
                                                    <View>
                                                        <Input variant="rounded"
                                                            textAlign='right' style={{ fontFamily: 'Montserrat-Bold' }}
                                                            keyboardType='numeric'

                                                        />
                                                    </View>
                                                </View>
                                            </View>


                                            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Delivery Date: </Text>
                                                    </View>
                                                    <DatePicker />
                                                </View>
                                                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                                                    <View style={{ margin: 5 }}>
                                                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Delivery Time: </Text>
                                                    </View>
                                                    <Timepicker />
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column', margin: 2 }}>
                                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>Intructions: </Text>
                                                </View>
                                                <View style={{ margin: 2 }}>
                                                    <TextArea h={20} />
                                                </View>
                                            </View>
                                            <Divider />
                                            <View style={{ flexDirection: 'column', paddingLeft: 8, paddingTop: 10 }}>
                                                {/* <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>Delivery Option</Text>
                                                </View> */}
                                                <FormikRadio options={itemsOption} isImage={true} imageH={7} imageW={7}
                                                    onChange={formik.handleChange('deliverOption')}
                                                    onBlur={formik.handleBlur('deliverOption')}
                                                    error={formik.errors.deliverOption}
                                                    groupValue={formik.values.deliverOption}
                                                    touched={formik.touched.deliverOption}
                                                    title="Delivery Option"
                                                />
                                            </View>
                                            <Divider />
                                            <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 5, margin: 10 }}>
                                                <TouchableOpacity
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                        backgroundColor: '#2980B9',
                                                        padding: 12,
                                                        width: '100%',
                                                        borderRadius: 20,

                                                    }}
                                                    onPress={formik.handleSubmit}

                                                >
                                                    <AntDesign
                                                        name="addfile"
                                                        size={24}
                                                        color="#FDFEFE"
                                                        style={{ width: 40 }}
                                                    />
                                                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 15 }}>CREATE PACKAGE</Text>
                                                </TouchableOpacity>
                                            </View>


                                        </Flex>
                                    </Formik>



                                </Stack>
                                <View style={{
                                    paddingBottom: 20,
                                    flexDirection: 'row'
                                }}></View>


                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        </BaseProvider >

    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '25%',
        position: 'absolute',
        backgroundColor: "#212F3D",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        paddingTop: 50,
        flexDirection: 'column',
    },
})
export default CreateDelivery
