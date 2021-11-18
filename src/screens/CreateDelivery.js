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



import CreatePickUp from '../components/FormDelivery/CreatePickUp';
import CreateDropOff from '../components/FormDelivery/CreateDropOff';
import CreateParcel from '../components/FormDelivery/CreateParcel';

import ValidationSchema from '../components/FormModel/Delivery/ValidationSchema'
import FormInitialValues from '../components/FormModel/Delivery/FormInitialValues';
import CreatePackageModel from '../components/FormModel/Delivery/CreatePackageModel';



import CarIcon from '../../assets/iconTracker/icons8-car-64.png'
import TruckIcon from '../../assets/iconTracker/icons8-delivery-truck-64.png'
import VanIcon from '../../assets/iconTracker/icons8-van-64.png'
import BikeIcon from '../../assets/iconTracker/icons8-bicycle-64.png'


import pickupIcon from '../../assets/iconTracker/icons8-map-point-64.png'
import dropIcon from '../../assets/iconTracker/icons8-pickup-point-128.png'
import parcelIcon from '../../assets/iconTracker/icons8-big-parcel-64.png'
import { Fragment } from 'react';




function CreateDelivery(props) {

    const page = 3;
    const [currentActivePage, setActivePage] = useState(0);
    const currentValidationSchema = ValidationSchema[currentActivePage]
    const lastActivePage = currentActivePage === page - 1;
    const { formField } = CreatePackageModel;

    const [groupValue, setGroupValue] = useState('')
    //https://github.com/nphivu414/react-multi-step-form/blob/master/src/components/CheckoutPage/Forms/AddressForm.jsx
    //https://medium.com/@nphivu414/build-a-multi-step-form-with-react-hooks-formik-yup-and-materialui-fa4f73545598


    const formik = useFormik({
        validationSchema: currentValidationSchema,
        initialValues: FormInitialValues,
        onSubmit: (values, actions) => {
            // alert(JSON.stringify(values, null, 2))
            alert(JSON.stringify(values))

            if (lastActivePage) {
                submitForm(values, actions)
                console.log('if', lastActivePage)
            } else {
                actions.setTouched({})
                actions.setSubmitting(false)
                nextPage();
                console.log('else', lastActivePage)

            }


        }
    })


    const nextPage = () => {
        setActivePage(currentActivePage + 1)
        console.log('currentActivePage', currentActivePage)
    }
    const submitForm = async (values, actions) => {
        await _sleep(1000)
        actions.setSubmitting(false);
        setActivePage(currentActivePage + 1)
        console.log('submitForm', currentActivePage)
    }

    function _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const renderPage = (step) => {

        switch (step) {
            case 2:
                return <CreatePickUp formField={formField} formik={formik} />
            case 1:
                return <CreateDropOff formField={formField} formik={formik} />
            case 0:
                return <CreateParcel formField={formField} formik={formik} />
            default:
                return null

        }
    }



    // const validationSchema = Yup.object({
    //     parcelHeight: Yup.string().required("Required!"),
    //     parcelWitdh: Yup.string().required("Required!"),
    //     deliverOption: Yup.string().required("Delivery Option Required!"),
    // })

   







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
                                            {renderPage(currentActivePage)}
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
                                                    <Text style={{ fontFamily: 'Montserrat-Medium', color: 'white', fontSize: 15 }}>
                                                        {lastActivePage ? 'BOOK' : 'NEXT'}
                                                    </Text>
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
