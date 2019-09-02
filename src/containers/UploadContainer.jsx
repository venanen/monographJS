import React, {Fragment} from 'react'
import {observer} from 'mobx-react'

import Upload from  '../components/Upload'
import {fileUploadStore} from '../stores/mainStore'
import ErrorMessage from "../components/ErrorMessage";


const handleFileChange = (e)=>{
	fileUploadStore.enterFile(e.files[0]);
}


const handleCloseAlert = ()=>{
	fileUploadStore.error = "";
}


const UploadContainer = ()=>{
	return (
		<Fragment>
			{fileUploadStore.error===""?"":<ErrorMessage onCloseAlert={ handleCloseAlert} message={fileUploadStore.error}/>}
			<Upload  run={fileUploadStore.run} error={fileUploadStore.error} onCloseAlert={handleCloseAlert} readyToProcess={fileUploadStore.readyToProcess} onFileChange={handleFileChange}/>
		</Fragment>

	)


}

export default observer(UploadContainer);
