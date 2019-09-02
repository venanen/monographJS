import React from 'react'


import {gramemeTitle} from "../core/config";

import Chart from 'react-apexcharts'


const PhonemeFrequencyRadar = ({dataForPF})=>{
	let [phonemes, count] = dataForPF
	let russianPhoneme = typeof phonemes === 'object' && phonemes.length!== 0 ? phonemes.map((current)=>{
		console.log(current)
		if(gramemeTitle[current] !== undefined)
			return gramemeTitle[current];
		else
			return current;
	}) : [];
	console.log(russianPhoneme)
	const option = {
		labels: russianPhoneme,
		title: {
			text: ''
		}
	}
	const series =  [{
		name: 'Series 1',
		data: count,
	}]


	return 	<Chart height={450} options={option} series={series} type={'radar'}/>

}


export default PhonemeFrequencyRadar;