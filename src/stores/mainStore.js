import {observable, decorate, computed, action} from 'mobx'


import {fileProcess} from "../core/fileProcess";
import analyzeProcess from '../core/analyzeProcess'

class FileUploadStore{
	text = "";
	isUploadedFile = false;
	isInsertedText = false;
	error = ""
	secondSectionIsShow = false;




	get readyToProcess(){

		return !(this.isUploadedFile || this.isInsertedText)

	}

	enterFile(file){
		fileProcess.validateFile(file)
			.then(result=>{
				this.text = result;
				return analyzeProcess.startAnalyze(result)

			}, error=>{
				this.error = error
			})
			.then(resolve=>{
				this.secondSectionIsShow = true;
			})
		this.isUploadedFile = true;
	}

	clearError() {
		this.error = '';
	}
}

decorate(FileUploadStore, {
	error: observable,
	text: observable,
	isInsertedText: observable,
	isUploadedFile: observable,
	secondSectionIsShow: observable,
	readyToProcess: computed,
	enterFile: action,
	clearError: action,
})

const fileUploadStore =  new FileUploadStore();

export {fileUploadStore};

