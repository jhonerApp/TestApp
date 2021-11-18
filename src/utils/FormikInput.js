import React, { useEffect, useState } from 'react'
import {
    Input,
    FormControl,
    WarningOutlineIcon,
    Text

} from "native-base"




function FormikInput(props) {
    const { error, touched, val, ...rest } = props;
    const chkValid = (error != undefined && touched) ? true : false;

    const [values, setValues] = useState()

    useEffect(() => {
        setValues(val)
    }, [])

    return (
        <FormControl
            isInvalid={chkValid}
        >
            <Input variant="rounded" values={values} textAlign='right' style={{ fontFamily: 'Montserrat-Bold' }}   {...rest} />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />} _text={{ fontFamily: 'Montserrat-Bold' }} >
                {(error != undefined && touched) ? error : null}
            </FormControl.ErrorMessage>
        </FormControl >

    )
}

export default FormikInput
