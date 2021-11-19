import React, { Fragment } from 'react'

import {
    Divider, View, Text, Input, Image, TextArea, FormControl, WarningOutlineIcon

} from 'native-base'
import parcelIcon from '../../../assets/iconTracker/icons8-big-parcel-64.png'
import FormikInput from '../../utils/FormikInput';
import DatePicker from '../../utils/DatePicker';
import Timepicker from '../../utils/Timepicker';
import FormikRadio from '../../utils/FormikRadio';
import FormikTextArea from '../../utils/FormikTextArea';


import CarIcon from '../../../assets/iconTracker/icons8-car-64.png'
import TruckIcon from '../../../assets/iconTracker/icons8-delivery-truck-64.png'
import VanIcon from '../../../assets/iconTracker/icons8-van-64.png'
import BikeIcon from '../../../assets/iconTracker/icons8-bicycle-64.png'


function CreateParcel(props) {

    const itemsOption = [
        { key: '1', value: 'Bike', image: BikeIcon },
        { key: '2', value: 'Truck', image: TruckIcon },
        { key: '3', value: 'Van', image: VanIcon },
        { key: '4', value: 'Car', image: CarIcon }
    ]


    const {
        formField: {
            parcelDetails,
            parcelHeight,
            parcelWitdh,
            parcelLength,
            parcelWeigth,
            deliveryDate,
            deliveryTime,
            parcelInstruction,
            deliveryOption
        },
        formik
    } = props
    return (
        <Fragment>
            <Divider />
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 15 }}>
                <Image source={parcelIcon} height={7} width={7} alt='image' />
                <Text style={{ fontFamily: 'Montserrat-Bold', paddingHorizontal: 10, paddingTop: 5 }}>PARCEL DETAILS</Text>
            </View>
            <Divider />
            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelHeight.label}</Text>
                    </View>
                    <View>
                        <FormikInput
                            keyboardType='numeric'
                            onChangeText={formik.handleChange(`${parcelHeight.name}`)}
                            onBlur={formik.handleBlur(`${parcelHeight.name}`)}
                            error={formik.errors.parcelHeight}
                            val={formik.values.parcelHeight}
                            touched={formik.touched.parcelHeight} />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelWitdh.label} </Text>
                    </View>
                    <View>
                        <FormikInput
                            keyboardType='numeric'
                            onChangeText={formik.handleChange(`${parcelWitdh.name}`)}
                            onBlur={formik.handleBlur(`${parcelWitdh.name}`)}
                            error={formik.errors.parcelWitdh}
                            val={formik.values.parcelWitdh}
                            touched={formik.touched.parcelWitdh} />
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelLength.label}</Text>
                    </View>
                    <View>
                        <FormikInput
                            keyboardType='numeric'
                            onChangeText={formik.handleChange(`${parcelLength.name}`)}
                            onBlur={formik.handleBlur(`${parcelLength.name}`)}
                            error={formik.errors.parcelLength}
                            val={formik.values.parcelLength}
                            touched={formik.touched.parcelLength} />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelWeigth.label} </Text>
                    </View>
                    <View>
                        <FormikInput
                            keyboardType='numeric'
                            onChangeText={formik.handleChange(`${parcelWeigth.name}`)}
                            onBlur={formik.handleBlur(`${parcelWeigth.name}`)}
                            error={formik.errors.parcelWeigth}
                            val={formik.values.parcelWeigth}
                            touched={formik.touched.parcelWeigth} />
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row', margin: 2, paddingTop: 10 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{deliveryDate.label} </Text>
                    </View>
                    <DatePicker
                        onChangeText={formik.handleChange(`${deliveryDate.name}`)}
                        onBlur={formik.handleBlur(`${deliveryDate.name}`)}
                        error={formik.errors.deliveryDate}
                        val={formik.values.deliveryDate}
                        touched={formik.touched.deliveryDate}
                    />


                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{deliveryTime.label} </Text>
                    </View>
                    <Timepicker
                        onChangeText={formik.handleChange(`${deliveryTime.name}`)}
                        onBlur={formik.handleBlur(`${deliveryTime.name}`)}
                        error={formik.errors.deliveryTime}
                        val={formik.values.deliveryTime}
                        touched={formik.touched.deliveryTime}
                    />
                </View>
            </View>


            <View style={{ flexDirection: 'column', margin: 2 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelInstruction.label}  </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <TextArea h={20} name={parcelInstruction.name} onBlur={formik.handleBlur(`${parcelInstruction.name}`)}
                        onChangeText={formik.handleChange(`${parcelInstruction.name}`)}
                        onBlur={formik.handleBlur(`${parcelInstruction.name}`)} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{parcelDetails.label}  </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikTextArea
                        onChangeText={formik.handleChange(`${parcelDetails.name}`)}
                        onBlur={formik.handleBlur(`${parcelDetails.name}`)}
                        error={formik.errors.parcelDetails}
                        val={formik.values.parcelDetails}
                        touched={formik.touched.parcelDetails} />
                </View>
            </View>
            <Divider />
            <View style={{ flexDirection: 'column', paddingLeft: 8, paddingTop: 10 }}>
                <FormikRadio options={itemsOption} isImage={true} imageH={7} imageW={7}
                    onChange={formik.handleChange(`${deliveryOption.name}`)}
                    onBlur={formik.handleBlur(`${deliveryOption.name}`)}
                    error={formik.errors.deliveryOption}
                    groupValue={formik.values.deliveryOption}
                    touched={formik.touched.deliveryOption}
                    title={deliveryOption.label}
                />
            </View>
            <Divider />
        </Fragment>
    )
}

export default CreateParcel
