import React from 'react'

import './MainSectionAbout.css'

export default  () => (

	<div className={'mainAbout_container'}>
		<span className={"mainAbout_title mainAbout"}><b>Что это такое?</b></span><br/>
		<span className={"mainAbout_text mainAbout"}>Monograph - сервис, позволяющий проанализировать текст, в том числе провести частотный анализ слов и букв. Все что нужно - это загрузить текст в формате .txt в поле ниже. Это полностью бесплатно, регистрация не требуется :)
				Также мы не используем куки, не храним Ваш IP-адрес, и другие данные.</span><br/>

		<span className={"mainAbout_attention mainAbout"}><b>Внимание:</b> текст перед анализом будет приведен в безличный вид (удалены окончания различных родов).
			<br/><b><u>Поддерживается только русский язык.</u></b></span>
	</div>

)