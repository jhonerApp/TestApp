import React, { Fragment } from 'react'

import {
    Divider, View, Text, Input, Image

} from 'native-base'
import pickupIcon from '../../../assets/iconTracker/icons8-map-point-64.png'
import FormikInput from '../../utils/FormikInput';

function CreatePickUp(props) {
    const {
        formField: {
            pickCompanyName,
            pickFName,
            pickLName,
            pickCPnumber,
            pickAddress,
        },
        formik
    } = props
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
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{pickCompanyName.label} </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${pickCompanyName.name}`)}
                        onBlur={formik.handleBlur(`${pickCompanyName.name}`)}
                        error={formik.errors.pickCompanyName}
                        val={formik.values.pickCompanyName}
                        touched={formik.touched.pickCompanyName} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 2 }}>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{pickFName.label} </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <FormikInput
                            onChangeText={formik.handleChange(`${pickFName.name}`)}
                            onBlur={formik.handleBlur(`${pickFName.name}`)}
                            error={formik.errors.pickFName}
                            val={formik.values.pickFName}
                            touched={formik.touched.pickFName} />
                    </View>
                </View>
                <View style={{ margin: 2, flexDirection: 'column', flex: 1 }}>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{pickLName.label} </Text>
                    </View>
                    <View style={{ margin: 2 }}>
                        <FormikInput
                            onChangeText={formik.handleChange(`${pickLName.name}`)}
                            onBlur={formik.handleBlur(`${pickLName.name}`)}
                            error={formik.errors.pickLName}
                            val={formik.values.pickLName}
                            touched={formik.touched.pickLName} />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{pickCPnumber.label}</Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${pickCPnumber.name}`)}
                        onBlur={formik.handleBlur(`${pickCPnumber.name}`)}
                        error={formik.errors.pickCPnumber}
                        val={formik.values.pickCPnumber}
                        touched={formik.touched.pickCPnumber} />
                </View>
            </View>
            <View style={{ flexDirection: 'column', margin: 2, paddingBottom: 10 }}>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold', paddingTop: 2 }}>{pickAddress.label} </Text>
                </View>
                <View style={{ margin: 2 }}>
                    <FormikInput
                        onChangeText={formik.handleChange(`${pickAddress.name}`)}
                        onBlur={formik.handleBlur(`${pickAddress.name}`)}
                        error={formik.errors.pickAddress}
                        val={formik.values.pickAddress}
                        touched={formik.touched.pickAddress} />
                </View>
            </View>
            <Divider />
        </Fragment>
    )
}

export default CreatePickUp
