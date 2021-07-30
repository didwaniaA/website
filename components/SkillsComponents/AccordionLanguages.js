import React, { Component } from 'react'
import { Progress, Checkbox, Radio, Grid, GridColumn, List, Accordion, Icon } from 'semantic-ui-react'
import AccordionPython from './AccordionPython'
import AccordionR from './AccordionR'
import AccordionJS from './AccordionJS'


export default class AccordionLanguages extends Component {
	state = { activeIndex: -1 }

	handleClick = (e, titleProps) => {
		const { index } = titleProps
		const { activeIndex } = this.state
		const newIndex = activeIndex === index ? -1 : index
		this.setState({ activeIndex: newIndex })
	}

	render() {
		const { activeIndex } = this.state

		const Progress4 = () => <Progress percent={40} progress='percent' indicating size='small' />
		const Progress5 = () => <Progress percent={50} progress='percent' indicating size='small' />
		const Progress6 = () => <Progress percent={60} progress='percent' indicating size='small' />
		const Progress7 = () => <Progress percent={70} progress='percent' indicating size='small' />
		const Progress8 = () => <Progress percent={80} progress='percent' indicating size='small' />
		const Progress9 = () => <Progress percent={90} progress='percent' indicating size='small' />
		return (
			<div>
			<style>{`
			.ui.grid>.column:not(.row) {
				padding-bottom: 0rem
			}
			.ui.styled.accordion .accordion .content, .ui.styled.accordion .content{
				padding-top: 0rem
			}

      `}</style>
			<Accordion exclusive={false} fluid styled className="schooling" style={{backgroundColor:'#d8e7ec'}}>
				<Accordion.Title
					active={activeIndex === 0}
					index={0}
					onClick={this.handleClick}>
					<Grid>
						<GridColumn width={10}> <Icon name='dropdown' /> <b>Python</b> </GridColumn>
						<GridColumn width={6}> <Progress8/> </GridColumn>
					</Grid>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 0} style={{ paddingLeft: '1.5em' }}>
					<AccordionPython/>
				</Accordion.Content>

				<Accordion.Title
					active={activeIndex === 1}
					index={1}
					onClick={this.handleClick}>
					<Grid>
						<GridColumn width={10}> <Icon name='dropdown' /> <b>R</b> </GridColumn>
						<GridColumn width={6}> <Progress7/> </GridColumn>
					</Grid>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 1} style={{ paddingLeft: '1.5em' }}>
				<AccordionR/>
				</Accordion.Content>

				<Accordion.Title
					active={activeIndex === 2}
					index={2}
					onClick={this.handleClick}>
					<Grid>
						<GridColumn width={10}> <Icon name='dropdown' /> <b>JavaScript</b> </GridColumn>
						<GridColumn width={6}> <Progress6/> </GridColumn>
					</Grid>
				</Accordion.Title>
				<Accordion.Content active={activeIndex === 2} style={{ paddingLeft: '1.5em' }}>
				<AccordionJS/>
				</Accordion.Content>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>Excel VBA</b> </GridColumn>
						<GridColumn width={6}> <Progress7/> </GridColumn>
					</Grid>
				</Accordion.Title>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>PostgreSQL, MySQL, SQLite</b> </GridColumn>
						<GridColumn width={6}> <Progress7/> </GridColumn>
					</Grid>
				</Accordion.Title>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>SAS</b> </GridColumn>
						<GridColumn width={6}> <Progress6/> </GridColumn>
					</Grid>
				</Accordion.Title>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>HTML & CSS</b> </GridColumn>
						<GridColumn width={6}> <Progress6/> </GridColumn>
					</Grid>
				</Accordion.Title>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>Java</b> </GridColumn>
						<GridColumn width={6}> <Progress6/> </GridColumn>
					</Grid>
				</Accordion.Title>

				<Accordion.Title style={{ cursor:'auto'}}>
					<Grid>
						<GridColumn width={10}> <b>C#</b> </GridColumn>
						<GridColumn width={6}> <Progress6/> </GridColumn>
					</Grid>
				</Accordion.Title>
			</Accordion>
			</div>


		)
	}
}