import React from 'react'
import { Grid, Row, Col, PanelGroup, Panel,Progress, Tag} from 'rsuite';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import './SummaryStatistics.css'

let {Line} = Progress




const SummaryStatistic = ({dataSS})=>{

		let progressWords = ((dataSS.edited.countWords/dataSS.input.countWords).toFixed(2))*100,
			progressLetters = ((dataSS.edited.countLetters/dataSS.input.countLetters).toFixed(2))*100


		return (

			<Grid fluid>
				<Row className="show-grid">
					<Col xs={10} >
						<PanelGroup  bordered>
							<Panel header="Исходный текст" >
								Количество слов: <Tag color={'cyan'}>{dataSS.input.countWords}</Tag>
								<br/><br/>
								Количество букв: <Tag color={'cyan'}>{dataSS.input.countLetters}</Tag>
							</Panel>
							<Panel header="Обработанный текст">
								Количество слов: <Tag color={'cyan'}>{dataSS.edited.countWords}</Tag>
								<br/><br/>
								Количество букв: <Tag color={'cyan'}>{dataSS.edited.countLetters}</Tag>
							</Panel>
							<Panel header={'Статистика'}>
								<p>Количество слов в исходном/обработанном тексте: </p>
								<Line percent={progressWords} strokeColor={"#00bb00"} trailColor={'red'}/>
								<p>Количество букв в исходном/обработанном тексте: </p>
								<Line percent={progressLetters} strokeColor={"#00bb00"} trailColor={'red'} />

							</Panel>
						</PanelGroup>


					</Col>
					<Col xs={14}>
						<Tabs>
							<TabList>
								<Tab>Исходный текст</Tab>
								<Tab>Обработанный текст</Tab>
							</TabList>

							<TabPanel>
								<textarea value={dataSS.input.rawText} readOnly={true} rows={24} className={'textareaRawText'}/>
							</TabPanel>
							<TabPanel>
								<textarea value={dataSS.edited.rawText} readOnly={true} rows={24} className={'textareaRawText'}/>
							</TabPanel>
						</Tabs>


					</Col>
				</Row>
			</Grid>

		)




}

export default SummaryStatistic