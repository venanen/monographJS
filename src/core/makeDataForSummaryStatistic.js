class MakeDataForSummaryStatistic{


	outputData = {
		edited: {},
		input: {},
	};

	editedWords = [];

	makeData(text,words){

		this.editedWords = typeof words === 'object' ? Object.keys(words) : [];

		this.outputData.edited.countWords = typeof words === 'object' ? Object.keys(words).length : 0; //words.toString();
		this.outputData.edited.rawText = this.editedWords.join(' ');
		this.outputData.edited.countLetters = this.outputData.edited.rawText.split('').length;

		this.outputData.input.countWords = text.split(' ').length;
		this.outputData.input.rawText = text;
		this.outputData.input.countLetters = text.split('').length

		return this.outputData;


	}


}

const makeDataForSummaryStatistic = new MakeDataForSummaryStatistic();

export default makeDataForSummaryStatistic;