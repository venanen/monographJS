import {maxWordsFrequencyIteration} from "./config";

class MakeDataForChart{


	sortObject(obj){
		return Object.entries(obj).sort((a,b)=>b[1]-a[1]);
	}


	createDataToChart(words){ //struct pattern: [[label, value], [label1, value1] ...]
		if(typeof words !== 'object')
			throw new Error("Данные для графиков не являются массивом")

		let tempWords = [],
			tempKeys = [];
		let counter = 0;
		for(let [key, value] of words){
			if(++counter > maxWordsFrequencyIteration)
				break;
			tempKeys.push(key)
			tempWords.push(value)
		}

		return [tempKeys, tempWords]

	}



}

const makeDataForChart = new MakeDataForChart()

export default makeDataForChart