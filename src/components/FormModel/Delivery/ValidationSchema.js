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
        parcelInstruction,
        deliveryOption
    }

} = CreatePackageModel
export default [
    Yup.object().shape({
        [pickFName.name]: Yup.string().required(`${pickFName.requiredMsg}`),
        [pickLName.name]: Yup.string().required(`${pickFName.requiredMsg}`),
        [pickCPnumber.name]: Yup.string().required(`${pickFName.requiredMsg}`),
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
    Yup.object().shape({
        [parcelDetails.name]: Yup.string().required(`${parcelDetails.requiredMsg}`),
        [parcelHeight.name]: Yup.number()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelHeight.requiredMsg}`),
        [parcelWitdh.name]: Yup.string()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelWitdh.requiredMsg}`),
        [parcelLength.name]: Yup.string()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelLength.requiredMsg}`),
        [parcelWeigth.name]: Yup.string()
            .positive("Must be more than 0")
            .integer("Must be more than 0")
            .required(`${parcelWeigth.requiredMsg}`),
        [deliveryDate.name]: Yup.date()
            .required(`${deliveryDate.requiredMsg}`),
        [deliveryTime.name]: Yup.date
            .required(`${deliveryTime.requiredMsg}`),
        [deliveryOption.name]: Yup.string().required(`${deliveryOption.requiredMsg}`),
    }),
]