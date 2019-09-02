import React  from 'react'

import MainSectionAbout from './MainSectionAbout'
import UplodContainer from '../containers/UploadContainer'

import './MainSection.css'



const MainSection = ()=>(
	<div className={'mainSection'}>

		<MainSectionAbout/>
		<UplodContainer/>
	</div>
	)

export default MainSection;

