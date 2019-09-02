import React from 'react'
import {observer} from 'mobx-react'

import {fileUploadStore} from "../stores/mainStore";
import {dataForWordFrequency, dataForPhonemeFrequency, dataForSummaryStatistic} from "../stores/dataForChartStore";

import AnalyzeSection from '../components/AnalyzeSection'


let data = dataForWordFrequency.data;

data = typeof data === 'object' && data.length > 0 ? data: [[],[]]

const AnalyzeSectionContainer = () => {

	return (<AnalyzeSection dataPhonemeFrequency={dataForPhonemeFrequency.data}
							dataWordsFrequency={dataForWordFrequency.data}
							dataSummaryStatistics={dataForSummaryStatistic.data}
							isShow={fileUploadStore.secondSectionIsShow}

	/>)


}

export default observer(AnalyzeSectionContainer);