import {observable, decorate, action} from 'mobx'



class DataForWordFrequency{ //word Frequency

	data = [];

	setData(data){
		this.data = data;
	}
}
decorate(DataForWordFrequency, {
	data: observable,
	setData: action
})





class DataForPhonemeFrequency{
	data = [];
	setData(data){
		this.data = data;
	}
}
decorate(DataForPhonemeFrequency, {
	data: observable,
	setData: action
})



class DataForSummaryStatistic{

	data = {
		edited: {
			rawText: "",
			countWords: 0,
			countLetters: 0,
		},
		input: {
			rawText: "",
			countWords: 0,
			countLetters: 0,
		}
	};

	setData(data){
		this.data = data;
	}

}
decorate(DataForSummaryStatistic, {
	text: observable,
	formattedText: observable,
	setData: action
})






const dataForWordFrequency = new DataForWordFrequency()
const dataForPhonemeFrequency = new DataForPhonemeFrequency()
const dataForSummaryStatistic = new DataForSummaryStatistic();


export  {dataForWordFrequency, dataForPhonemeFrequency, dataForSummaryStatistic}