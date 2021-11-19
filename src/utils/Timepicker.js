import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native'

import { Text, FormControl, WarningOutlineIcon } from 'native-base'
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

function Timepicker(props) {
    const { label, name, error, touched, ...rest } = props;
    const [date, setDate] = useState(new Date());
    const [isTimePickerVisible,setTimePickerVisibility] = useState(false);

    const [dateTimeValue, setDateTimeValue] = useState('')
    const chkValid = (dateTimeValue == '' && touched) ? true : false;


    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
        setDateTimeValue('')
    };

    const handleTimeConfirm = (date) => {
        hideTimePicker();
        setDate(date);
        setDateTimeValue(moment(date).format("HH:mm"))
    };



    return (
        <FormControl
            isInvalid={chkValid}
        >
            <TouchableOpacity onPress={showTimePicker} keyboardShouldPersistTaps="handled" activeOpacity={20} style={{
                justifyContent: 'center',
                padding: 8,
                borderRadius: 20,
                width: '100%',
                borderWidth: 1,
                borderColor: (dateTimeValue == '' && touched) ? ' rgb(220, 38, 38)' : 'rgb(229, 229, 229)',
            }}

            >
                <View>

                    <Text style={{ fontFamily: 'Montserrat-Bold', height: 20 }} textAlign='right' >{dateTimeValue}</Text>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                        date={date}
                        is24Hour={true}
                        locale="en_GB"
                        {...rest}
                    />
                </View>
            </TouchableOpacity>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{ fontFamily: 'Montserrat-Bold', textAlign: 'center' }} >
                {(dateTimeValue == '') ? error : null}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default Timepicker;
