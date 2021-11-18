import * as Yup from 'yup';
import CreatePackageModel from './CreatePackageModel'

const {
    formField: {
        pickFName,
        pickLName,
        pickCPnumber,
        pickAddress,
        //DROPOFF
        dropFName,
        dropLName,
        dropCPnumber,
        dropAddress,
        //PARCEL DETAILS
        parcelDetails,
        parcelHeight,
        parcelWitdh,
        parcelLength,
        parcelWeigth,
        deliveryDate,
        deliveryTime,
        deliveryOption
    }

} = CreatePackageModel
export default [

    Yup.object().shape({
        [parcelDetails.name]: Yup.string().required(`${parcelDetails.requiredMsg}`),
        [parcelHeight.name]: Yup.number()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelHeight.requiredMsg}`),
        [parcelWitdh.name]: Yup.number()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelWitdh.requiredMsg}`),
        [parcelLength.name]: Yup.number()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelLength.requiredMsg}`),
        [parcelWeigth.name]: Yup.number()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelWeigth.requiredMsg}`),
        [deliveryDate.name]: Yup.string()
            .required('Date is required'),
        [deliveryTime.name]: Yup.string()
            .required('Date is required'),
        [deliveryOption.name]: Yup.string().required(`${deliveryOption.requiredMsg}`),
    }),
    Yup.object().shape({
        [pickFName.name]: Yup.string().required(`${pickFName.requiredMsg}`),
        [pickLName.name]: Yup.string().required(`${pickLName.requiredMsg}`),
        [pickCPnumber.name]: Yup.string().required(`${pickCPnumber.requiredMsg}`),
        [pickAddress.name]: Yup.string()
            .nullable()
            .required(`${pickAddress.requiredMsg}`),
    }),
    Yup.object().shape({
        [dropFName.name]: Yup.string().required(`${dropFName.requiredMsg}`),
        [dropLName.name]: Yup.string().required(`${dropLName.requiredMsg}`),
        [dropCPnumber.name]: Yup.string().required(`${dropCPnumber.requiredMsg}`),
        [dropAddress.name]: Yup.string()
            .nullable()
            .required(`${dropAddress.requiredMsg}`),
    }),
]