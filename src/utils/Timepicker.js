import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native'

import { Text } from 'native-base'
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';



function Timepicker(props) {

    const { label, name, ...rest } = props;
    const [date, setDate] = useState(new Date());
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (date) => {
        hideTimePicker();
        setDate(date);
    };
    return (
        <TouchableOpacity onPress={showTimePicker} keyboardShouldPersistTaps="handled" activeOpacity={20} style={{
            justifyContent: 'center',
            padding: 8,
            borderRadius: 20,
            width: '100%',
            borderWidth: 1,
            borderColor: 'rgb(229, 229, 229);',
        }} >
            <View>
                <Text style={{ fontFamily: 'Montserrat-Bold', height: 20 }} textAlign='right'>{moment(date).format('HH:mm')}</Text>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                    date={date}
                    is24Hour={true}
                    locale="en_GB"
                />
            </View>
        </TouchableOpacity>
    )
}

export default Timepicker
