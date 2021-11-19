

const errMsg = 'This is required!';
export default {
    formField: {

        //PICKUP
        pickCompanyName: {
            name: 'pickCompanyName',
            label: 'Company name(optional)',
        },
        pickFName: {
            name: 'pickFName',
            label: 'Firstname',
            requiredMsg: errMsg
        },
        pickLName: {
            name: 'pickLName',
            label: 'Lastname',
            requiredMsg: errMsg
        },
        pickCPnumber: {
            name: 'pickCPnumber',
            label: 'Cellphone#',
            requiredMsg: errMsg
        },
        pickAddress: {
            name: 'pickAddress',
            label: 'Pickup Address',
            requiredMsg: errMsg
        },

        //DROPOFF
        dropCompanyName: {
            name: 'dropCompanyName',
            label: 'Company name(optional)',
        },
        dropFName: {
            name: 'dropFName',
            label: 'Firstname',
            requiredMsg: errMsg
        },
        dropLName: {
            name: 'dropLName',
            label: 'Lastname',
            requiredMsg: errMsg
        },
        dropCPnumber: {
            name: 'dropCPnumber',
            label: 'Cellphone#',
            requiredMsg: errMsg
        },
        dropAddress: {
            name: 'dropAddress',
            label: 'Dropoff Address',
            requiredMsg: errMsg
        },

        //PARCEL DETAILS
        parcelDetails: {
            name: 'parcelDetails',
            label: 'Item details(optional)',
            requiredMsg: errMsg
        },
        parcelHeight: {
            name: 'parcelHeight',
            label: 'Parcel Height(cm)',
            requiredMsg: errMsg
        },
        parcelWitdh: {
            name: 'parcelWitdh',
            label: 'Parcel Witdh(cm)',
            requiredMsg: errMsg
        },
        parcelLength: {
            name: 'parcelLength',
            label: 'Parcel Length(cm)',
            requiredMsg: errMsg
        },
        parcelWeigth: {
            name: 'parcelWeigth',
            label: 'Parcel Weigth',
            requiredMsg: errMsg
        },
        deliveryDate: {
            name: 'deliveryDate',
            label: 'Delivery Date',
            requiredMsg: errMsg

        },
        deliveryTime: {
            name: 'deliveryTime',
            label: 'Delivery Date',
            requiredMsg: errMsg

        },
        parcelInstruction: {
            name: 'parcelInstruction',
            label: 'Instructions',

        },
        deliveryOption: {
            name: 'deliveryOption',
            label: 'Delivery Options',
            requiredMsg: 'Delivery Option Required!'
        }
    }
}
