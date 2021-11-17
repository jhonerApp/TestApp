import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native'

import { Text } from 'native-base'
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

function DatePicker(props) {
    const { label, name, ...rest } = props;
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        setDate(date);
    };



    return (
        <TouchableOpacity onPress={showDatePicker} keyboardShouldPersistTaps="handled" activeOpacity={20} style={{
            justifyContent: 'center',
            padding: 8,
            borderRadius: 20,
            width: '100%',
            borderWidth: 1,
            borderColor: 'rgb(229, 229, 229);',
        }} >
            <View>
                <Text {...rest} style={{ fontFamily: 'Montserrat-Bold', height: 20 }} textAlign='right' >{moment(date).format("MM/DD/YYYY")}</Text>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    date={date}
                />
            </View>
        </TouchableOpacity>
    );
}

export default DatePicker;
