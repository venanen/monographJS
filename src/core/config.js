export const aboutText = {
	"ru": `<span class="mainAbout_title">Что это такое?</span>
	Monograph - сервис, позволяющий проанализировать текст, в том числе провести частотный анализ слов и букв. Все что нужно - это загрузить текст в формате .txt в поле ниже. Это полностью бесплатно, регистрация не требуется :)
	Также мы не используем куки, не храним Ваш IP-адрес, и другие данные.
	
	Внимание: текст перед анализом будет приведен в безличный вид (удалены окончания различных родов). Поддерживается только русский язык.`,
	'en': `
	What it is?
	Monograph is a service that allows you to analyze text, including frequency analysis of words and letters. All that is needed is to upload the text in .txt format in the field below. It is completely free, registration is not required :)
	We also do not use cookies, do not store your IP address, and other data.
	
	Attention: the text before analysis will be reduced to an impersonal form (endings of various genera have been deleted). Only Russian language is supported.
	`
} // TODO: make location with aboutText




export const excludeGramems = ["PREP", "CONJ", "COMP", "NPRO", "PRCL"]; // Endpoint: ./analyzeProcess@AnalyzeProcess

export const gramemeTitle = {
	"NOUN": "Существительное",
	"ADJF": "Полное прилагательное",
	"ADJS": "Краткое прилагательное",
	"COMP": "Компоратив",
	"VERB": "Глагол (личная форма)",
	"INFN": "Инфинитив",
	"PRTF": "Причастие полное",
	"PRTS": "Причастие краткое",
	"GRND": "Деепричастие",
	"NUMR": "Числительное",
	"ADVB": "Наречие",
	"NPRO": "Местоимение",
	"PRED": "Предикатив",
	"PREP": "Предлог",
	"CONJ": "Союз",
	"PRCL": "Частица",
	"INTJ": "Междометие",
	"LATN": "Латиница"


}


export const maxWordsFrequencyIteration = 500;