import CreatePackageModel from './CreatePackageModel'

const {
    formField: {
        pickCompanyName,
        pickFName,
        pickLName,
        pickCPnumber,
        pickAddress,
        //DROPOFF
        dropCompanyName,
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

export default {
    [pickCompanyName.name]: '',
    [pickFName.name]: '',
    [pickLName.name]: '',
    [pickCPnumber.name]: '',
    [pickAddress.name]: '',
    //DROPOFF
    [dropCompanyName.name]: '',
    [dropFName.name]: '',
    [dropLName.name]: '',
    [dropCPnumber.name]: '',
    [dropAddress.name]: '',
    //PARCEL DETAILS
    [parcelDetails.name]: '',
    [parcelHeight.name]: '',
    [parcelWitdh.name]: '',
    [parcelLength.name]: '',
    [parcelWeigth.name]: '',
    [deliveryDate.name]: '',
    [deliveryTime.name]: '',
    [parcelInstruction.name]: '',
    [deliveryOption.name]: '',
}