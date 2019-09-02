import React from 'react'
import './AnalyzeSection.css'
import 'react-tabs/style/react-tabs.css';

import WordFrequencyChart from '../charts/WordsFrequence'
import PhonemeFrequency from '../charts/PhonemeFrequencyRadar'
import SummaryStatistic from '../charts/SummaryStatistic'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";




const AnalyzeSection = ({isShow, dataWordsFrequency, dataPhonemeFrequency, dataSummaryStatistics})=>{
	let classes = (isShow === true)?"show":"";
	classes = classes+' analyzeSectionWrapper'
	return (
			<div className={classes}>
				<div className={'analyzeSectionBackground'}>

				</div>
				<div className={'analyzeSectionMainContainer'}>
					<Tabs>
						<TabList>
							<Tab>Суммарная статистика</Tab>
							<Tab>Частота слов</Tab>
							<Tab>Частота частей речи</Tab>
						</TabList>

						<TabPanel>
							<SummaryStatistic dataSS={dataSummaryStatistics}/>

						</TabPanel>

						<TabPanel>
							<WordFrequencyChart dataWF={dataWordsFrequency}/>
						</TabPanel>
						<TabPanel>
							<PhonemeFrequency dataForPF={dataPhonemeFrequency}/>
						</TabPanel>
					</Tabs>

				</div>
			</div>




	)
}

export default AnalyzeSection;