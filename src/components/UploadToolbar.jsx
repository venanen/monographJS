import React from 'react'
import {Button} from "rsuite";

import './UploadToolbar.css'

const UploadToolbar = ({refs}) => {

	const handleClickFileUpload = ()=>{ //костыль :(
		refs.current.click()
	}

	return (
				<Button block onClick={handleClickFileUpload} appearance={'primary'}>Зарузить файл</Button>
	)
}

export default UploadToolbar;