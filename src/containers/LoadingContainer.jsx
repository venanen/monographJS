import React from 'react'
import {observer} from 'mobx-react'

import Loading from '../components/Loading'


import loggerAnalyze from '../stores/uiLogger'

const LoadingContainer = () => {

	return (
		<Loading isShow={loggerAnalyze.isShow} currentStep={loggerAnalyze.currentStepDescription}/>
	)

}

export default observer(LoadingContainer);