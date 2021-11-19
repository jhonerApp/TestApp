import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native'

import { Text, FormControl, WarningOutlineIcon } from 'native-base'
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

function DatePicker(props) {
    const { label, name, error, touched, ...rest } = props;
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateValue, setDateValue] = useState('')
    const chkValid = (dateValue == '' && touched) ? true : false;

    console.log('dateValue', dateValue)
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setDateValue('')
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setDate(date);
        setDateValue(moment(date).format("MM/DD/YYYY"))

    };



    return (
        <FormControl
            isInvalid={chkValid}
        >
            <TouchableOpacity onPress={showDatePicker} keyboardShouldPersistTaps="handled" activeOpacity={20} style={{
                justifyContent: 'center',
                padding: 8,
                borderRadius: 20,
                width: '100%',
                borderWidth: 1,
                borderColor: (dateValue == '' && touched) ? ' rgb(220, 38, 38)' : 'rgb(229, 229, 229)',
            }}

            >
                <View>

                    <Text style={{ fontFamily: 'Montserrat-Bold', height: 20 }} textAlign='right' >{dateValue}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        date={date}
                        {...rest}
                    />
                </View>
            </TouchableOpacity>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{ fontFamily: 'Montserrat-Bold', textAlign: 'center' }} >
                {(dateValue == '') ? error : null}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default DatePicker;
