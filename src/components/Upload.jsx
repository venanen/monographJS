import React, {useRef} from 'react'

import {Tag} from 'rsuite'

import UploadToolbar from './UploadToolbar'
import './Upload.css'
const UploadWrapper = ({error, onFileChange, readyToProcess }) => {


	let file = useRef(null)








	const fileChangeLocal = ()=>{
		onFileChange(file.current)
	}

	return (
		<div className={'uploadWrapper'}>



					<UploadToolbar refs={file}/>



					Загрузите текстовый файл в любом формате (<Tag>.txt</Tag>, <Tag>.ini</Tag>, <Tag>.log</Tag> и другие). Из файла будут удалены знаки препинания, окончания слов и элементы разметки.

			<input onChange={ fileChangeLocal }  type={'file'} ref={file}/>
	</div>)
}
export default UploadWrapper