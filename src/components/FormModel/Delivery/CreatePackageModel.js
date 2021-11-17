
const errMsg = 'This is required!';
export default {
    formField: {

        //PICKUP
        pickCompanyName: {
            name: 'pick_company_name',
            label: 'Company name(optional)',
        },
        pickFName: {
            name: 'pick_fname',
            label: 'Firstname',
            requiredMsg: errMsg
        },
        pickLName: {
            name: 'pick_lname',
            label: 'Lastname',
            requiredMsg: errMsg
        },
        pickCPnumber: {
            name: 'pick_cpnumber',
            label: 'Cellphone#',
            requiredMsg: errMsg
        },
        pickAddress: {
            name: 'pick_address',
            label: 'Pickup Address',
            requiredMsg: errMsg
        },

        //DROPOFF
        dropCompanyName: {
            name: 'drop_company_name',
            label: 'Company name(optional)',
        },
        dropFName: {
            name: 'drop_fname',
            label: 'Firstname',
            requiredMsg: errMsg
        },
        dropLName: {
            name: 'drop_lname',
            label: 'Lastname',
            requiredMsg: errMsg
        },
        dropCPnumber: {
            name: 'drop_cpnumber',
            label: 'Cellphone#',
            requiredMsg: errMsg
        },
        dropAddress: {
            name: 'drop_address',
            label: 'Dropoff Address',
            requiredMsg: errMsg
        },

        //PARCEL DETAILS
        parcelDetails: {
            name: 'parcel_details',
            label: 'Item details(optional)',
        },
        parcelHeight: {
            name: 'parcel_height',
            label: 'Parcel Height(cm)',
            requiredMsg: errMsg
        },
        parcelWitdh: {
            name: 'parcel_witdh',
            label: 'Parcel Witdh(cm)',
            requiredMsg: errMsg
        },
        parcelLength: {
            name: 'parcel_length',
            label: 'Parcel Length(cm)',
            requiredMsg: errMsg
        },
        parcelWeigth: {
            name: 'parcel_weight',
            label: 'Parcel Weigth',
            requiredMsg: errMsg
        },
        deliveryDate: {
            name: 'delivery_date',
            label: 'Delivery Date',

        },
        deliveryTime: {
            name: 'delivery_time',
            label: 'Delivery Date',

        },
        parcelInstruction: {
            name: 'parcel_instructions',
            label: 'Instructions',

        }
    }
}
