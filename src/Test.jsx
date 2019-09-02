import React from 'react'
import {observer} from 'mobx-react'

const Test = (props)=>{

	const handleClick = ()=> props.store.addClick();

	return (
		<div>
			<button onClick={handleClick}>+</button>
			<span>{props.store.clicks}</span>
		</div>

	)
}

export default observer( Test);