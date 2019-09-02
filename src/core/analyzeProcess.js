import Az from '../az/dist/az'
import {excludeGramems} from "./config";
import makeData from './makeDataForChart'
import makeDataForSummaryStatistic from './makeDataForSummaryStatistic'

import loggerAnalyze from '../stores/uiLogger'
import {dataForWordFrequency, dataForPhonemeFrequency,  dataForSummaryStatistic} from "../stores/dataForChartStore";


class AnalyzeProcess{
	tokensObject;
	morphemsObject;
	filterTags = ['PUNCT', 'LINK', 'EMAIL', 'MARKUP', 'TAG', 'OTHER', 'CONTENT', 'SPACE', 'NUMBER']
	text = "";
	words = {};
	phonemes = {};
	tokens = [];
	countTokens = 0;


	morphemsInit(){
		return new Promise((resolve)=>{
			Az.Morph.init('/dicts/', ()=>{

				resolve(true)
			})
		})



	}

	startAnalyze(text){
		this.text = text;
		loggerAnalyze.showBar()
		loggerAnalyze.setStep("Загрузка словарей...")
		return this.morphemsInit()
			.then(resolve=>{
				loggerAnalyze.setStep("Токенизация текста...")
				return this.makeTokens()
			})
			.then(resolve=>{
				loggerAnalyze.setStep("Вычисление частоты слов и частей речи...")
				this.getWordsFrequency(resolve)
			})
			.then(resolve=>{

				loggerAnalyze.setStep("Подготовка данных...")
				dataForSummaryStatistic.setData(makeDataForSummaryStatistic.makeData(this.text, this.words))
				dataForWordFrequency.setData(makeData.createDataToChart(makeData.sortObject(this.words)))
				dataForPhonemeFrequency.setData(makeData.createDataToChart(makeData.sortObject(this.phonemes)))


				loggerAnalyze.setStep("Готово!")

				loggerAnalyze.hideBar();
				console.log('End Analyze')
			})



	}


	makeTokens(){
		return new Promise(resolve=>{
			this.tokensObject = Az.Tokens(this.text)
			this.tokens = this.tokensObject.done(this.filterTags, true);
			this.countTokens = this.tokensObject.count(this.filterTags, true)
			resolve(this.tokens)
		})


	}


	getWordsFrequency(tokens){

		return new Promise((resolve, reject)=>{

			if(typeof tokens !== 'object')
				reject(new Error('Массив токенов не является строкой'))

			tokens.map((elem)=>{
				let word = this.getTextFromToken(elem)

				if(word === ""){
					return;
				}

				if(this.words[word] !== undefined){
					this.words[word]++;
					return '1' // Increment count
				}else{

					this.words[word] = 1;
					return '0'; // Added Word;
				}



			})

			resolve(true)
		})





	}

	getTextFromToken(token){

		//console.log((token.source.substr(token.st,token.length).toLocaleLowerCase()))
		return this.normalizeWord(token.source.substr(token.st,token.length).toLocaleLowerCase())
	}



	normalizeWord(word){
		try{
			let tempWord = Az.Morph(word, {"forceParse": true})[0].normalize();
			this.collectPhonems(tempWord.tag.POST);
			return excludeGramems.includes(tempWord.tag.POST)?"":tempWord.word;

		}catch (e) {
			return word;

		}
	}


	collectPhonems(phoneme){
		if(this.phonemes[phoneme] === undefined)
			this.phonemes[phoneme] = 1;
		else
			this.phonemes[phoneme]++;
	}



}


const analyzeProcess = new AnalyzeProcess();

export default analyzeProcess;