import React, {Fragment} from 'react';

import MainSection from './components/MainSection';
import Background from './components/Background.jsx'
import AnalyzeSectionContainer from "./containers/AnalyzeSectionContainer";
import LoadingContainer from './containers/LoadingContainer'


const App = ()=>(
	<Fragment>
		<MainSection/>
		<AnalyzeSectionContainer/>
		<LoadingContainer currentStep={'словарей'}/>
		<Background/>
	</Fragment>


)


export default App;