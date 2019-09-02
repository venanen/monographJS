import React from 'react'

import { Loader } from 'rsuite';


import './Loading.css'


const Loading = ({currentStep, isShow})=>{

	let classes = (isShow === true)?"show":"";
	classes = classes+' loadingWrapper'

	return (
		<div className={classes}>

			<Loader inverse center size="lg" content={currentStep} />



		</div>
	)


}

export default Loading;