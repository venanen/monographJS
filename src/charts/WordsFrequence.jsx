
import React from 'react'

import Chart from 'react-apexcharts'

import './WordsFrequency.css'



const columnHeight = 16;

const WordFrequency = ({dataWF})=>{

	let [words, count] = dataWF
	const options ={
		//title: "Частота встречаемых в тексте слов",
		chart:{
			height: "2000",
			width: "50",
			zoom: {
				enabled: true,
				type: 'x'
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
			},
			barHeight:"100%",
		},
		dataLabels: {
			enabled: false
		},
		xaxis: {
			categories: words,
			position: 'bottom',
			label:{
				offsetY: -18,
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},

	}



	const serias = [{
		name: 'Количество слов',
		data: count
	}]
		let height = words !== undefined ? columnHeight*words.length : 150;


	console.log(height)
	return (
		<div className={'chartWFContainer'}>
			<Chart height={height} series={serias} width={'99%'} type={"bar"} options={options}/>
		</div>
	)
}

export default WordFrequency;
//
//
// class LineChart extends React.Component {
//
// 	constructor(props) {
// 		super(props);
//
// 		this.state = {
// 			options: {
// 				chart: {
// 					stacked: false,
// 					zoom: {
// 						type: 'x',
// 						enabled: true
// 					},
// 					toolbar: {
// 						autoSelected: 'zoom'
// 					}
// 				},
// 				plotOptions: {
// 					line: {
// 						curve: 'smooth',
// 					}
// 				},
// 				dataLabels: {
// 					enabled: false
// 				},
//
// 				markers: {
// 					size: 0,
// 					style: 'full',
// 				},
// 				//colors: ['#0165fc'],
// 				title: {
// 					text: 'Stock Price Movement',
// 					align: 'left'
// 				},
// 				fill: {
// 					type: 'gradient',
// 					gradient: {
// 						shadeIntensity: 1,
// 						inverseColors: false,
// 						opacityFrom: 0.5,
// 						opacityTo: 0,
// 						stops: [0, 90, 100]
// 					},
// 				},
// 				yaxis: {
// 					min: 20000000,
// 					max: 250000000,
// 					labels: {
// 						formatter: function (val) {
// 							return (val / 1000000).toFixed(0);
// 						},
// 					},
// 					title: {
// 						text: 'Price'
// 					},
// 				},
// 				xaxis: {
// 					type: 'datetime',
// 				},
//
// 				tooltip: {
// 					shared: false,
// 					y: {
// 						formatter: function (val) {
// 							return (val / 1).toFixed(0)
// 						}
// 					}
// 				}
// 			},
// 			series: [{
// 				name: 'XYZ MOTORS',
// 				data: [44, 55, 57, 56, 61, 58, 63, 60, 66,44, 55, 57, 56, 61, 58, 63, 60, 66,44, 55]
// 			}],
// 		}
// 	}
//
// 	render() {
//
// 		return (
//
//
// 			<div id="chart">
// 				<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350"/>
// 			</div>
// 		)
// 	}
// }
//
// export default LineChart;