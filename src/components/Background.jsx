import React from 'react'

import Particles from 'react-particles-js'

import './Background.css'

const canvasStyle = {
	"position": "absolute"
}

const particleParams = {
	"particles": {
		"number": {
			"value": /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)?40:150
		},
		"size": {
			"value": 3
		},
		"color": {
			"value": "#3f3a40"
		},
		"line_linked": {
			"enable_auto": "false",
			"opacity": "1",
			"color":"#3f3a40",
			"distance": "160"
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			}
		}
	}
}

const ParticlesBackground = () => (
	<div className={'backGround'}>
		<Particles
			params={particleParams}
			style={canvasStyle} />
	</div>);

export default ParticlesBackground;