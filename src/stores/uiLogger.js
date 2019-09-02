import {observable, decorate, computed, action} from 'mobx'



class LoggerAnalyze{

	isBarShow = false;


	currentText = 'Загрузка словарей...';


	maxStep = 4;


	get isShow(){
		return this.isBarShow;
	}

	get currentStepDescription(){
		return this.currentText;
	}


	setStep(text){
		console.log(text)
		this.currentText = text;
	}
	showBar(){
		this.isBarShow = true;
	}

	hideBar(){
		this.isBarShow = false;
	}



}

decorate(LoggerAnalyze, {
	isBarShow: observable,
	currentText: observable,
	currentStepDescription: computed,
	isShow: computed,
	showBar: action,
	hideBar: action,
	setStep: action
})

const loggerAnalyze = new LoggerAnalyze();
export default loggerAnalyze;