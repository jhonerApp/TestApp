import React, { useState } from 'react'
import {
    Input,
    FormControl,
    WarningOutlineIcon,
    Text,
    Radio,
    Image,
    View

} from "native-base"

function FormikRadio(props) {
    const { error, touched, options, isImage = false, imageH, imageW, title, ...rest } = props;
    const [groupValue, setGroupValue] = useState('')
    const chkValid = (error != undefined && touched) ? true : false;
    return (
        <FormControl
            isInvalid={chkValid}
        >
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Montserrat-Bold' }}>{title}
                </Text>
            </View>

            <Radio.Group
                style={{
                    flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: '100%', height: 50,
                    paddingRight: 10
                }}
                accessibilityLabel="select prize"
                defaultValue={groupValue}
                onChange={(value) => {
                    setGroupValue(value || "")
                }}
                {...rest}
            >
                {
                    options.map(option => {
                        return (

                            <Radio
                                _text={{
                                    mx: 2,
                                }}
                                colorScheme="green"
                                value={option.value}
                                my='1'
                                key={option.key}
                                size='lg'

                            >
                                {(isImage) ?
                                    <Image source={option.image} height={imageH} width={imageW} style={{ margin: 5 }} alt='image' />
                                    : null}
                            </Radio>

                        )
                    })
                }

            </Radio.Group>
            <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{ fontFamily: 'Montserrat-Bold', textAlign: 'center' }} >
                    {(error != undefined && touched) ? error : null}
                </FormControl.ErrorMessage>
            </View>
        </FormControl >

    )
}

export default FormikRadio
