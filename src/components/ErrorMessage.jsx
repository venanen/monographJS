import React, {Fragment} from 'react'

import {Alert} from 'rsuite'



const ErrorMessage = ({message,onCloseAlert})=>{
	return (
		<Fragment>
			{Alert.error(message, 3000, ()=>{onCloseAlert()})}
		</Fragment>
	)
}

export default ErrorMessage