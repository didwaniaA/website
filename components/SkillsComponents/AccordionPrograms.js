import React, { Component } from 'react'
import { Progress, Checkbox, Radio, Grid, GridColumn, List, Accordion, Icon } from 'semantic-ui-react'

export default class AccordionPrograms extends Component {
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
			.ui.indicating.progress[data-percent^="4"] .bar, .ui.indicating.progress[data-percent^="5"] .bar,
			.ui.indicating.progress[data-percent^="6"] .bar, .ui.indicating.progress[data-percent^="7"] .bar,
			.ui.indicating.progress[data-percent^="8"] .bar, .ui.indicating.progress[data-percent^="9"] .bar{
				background-color: #89b7cb;
			}
      `}</style>
			
				<Accordion exclusive={false} fluid styled className="schooling" style={{backgroundColor:'#d8e7ec'}}>
				<Accordion.Title
						active={activeIndex === 1}
						index={1}
						onClick={this.handleClick}>
						<Grid>
							<GridColumn width={10}>  <Icon name='dropdown' /> <b>Databases</b> </GridColumn>
							<GridColumn width={6}> <Progress7 /> </GridColumn>
						</Grid>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 1} style={{ paddingLeft: '1.5em' }}>
						<Accordion style={{backgroundColor:'#f2f7f9'}}>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>Mongo DB/Compass</b> </GridColumn>
									<GridColumn width={6}> <Progress7 /> </GridColumn>
								</Grid>
							</Accordion.Title>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>MS SQL Server</b> </GridColumn>
									<GridColumn width={6}> <Progress7 /> </GridColumn>
								</Grid>
							</Accordion.Title>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>PgAdmin</b> </GridColumn>
									<GridColumn width={6}> <Progress5 /> </GridColumn>
								</Grid>
							</Accordion.Title>
						</Accordion>
					</Accordion.Content>

					


					<Accordion.Title
						active={activeIndex === 2}
						index={2}
						onClick={this.handleClick}>
						<Grid>
							<GridColumn width={10}>  <Icon name='dropdown' /> <b>Visualization</b> </GridColumn>
							<GridColumn width={6}> <Progress7 /> </GridColumn>
						</Grid>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 2} style={{ paddingLeft: '1.5em' }}>
						<Accordion style={{backgroundColor:'#f2f7f9'}}>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>MS Excel</b> </GridColumn>
									<GridColumn width={6}> <Progress8 /> </GridColumn>
								</Grid>
							</Accordion.Title>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>MS PowerPoint</b> </GridColumn>
									<GridColumn width={6}> <Progress7 /> </GridColumn>
								</Grid>
							</Accordion.Title>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>Tableau</b> </GridColumn>
									<GridColumn width={6}> <Progress6 /> </GridColumn>
								</Grid>
							</Accordion.Title>
						</Accordion>
					</Accordion.Content>

					<Accordion.Title
						active={activeIndex === 0}
						index={0}
						onClick={this.handleClick}>
						<Grid>
							<GridColumn width={10}>  <Icon name='dropdown' /> <b>AWS</b> </GridColumn>
							<GridColumn width={6}> <Progress6 /> </GridColumn>
						</Grid>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 0} style={{ paddingLeft: '1.5em' }}>
						<Accordion style={{backgroundColor:'#f2f7f9'}}>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}><b>AWS Personalize</b> </GridColumn>
									<GridColumn width={6}> <Progress8 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>AWS Sagemaker</b> </GridColumn>
									<GridColumn width={6}> <Progress7 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}><b>AWS Connect/Lex</b> </GridColumn>
									<GridColumn width={6}> <Progress7 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}><b>AWS Other</b> </GridColumn>
									<GridColumn width={6}> <Progress5 /> </GridColumn>
								</Grid>
							</Accordion.Title>
						</Accordion>
					</Accordion.Content>


					<Accordion.Title
						active={activeIndex === 3}
						index={3}
						onClick={this.handleClick}>
						<Grid  style={{paddingBottom:'1rem'}}>
							<GridColumn width={10}>  <Icon name='dropdown' /> <b>Other</b> </GridColumn>
							<GridColumn width={6}></GridColumn>
						</Grid>
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 3} style={{ paddingLeft: '1.5em' }}>
						<Accordion style={{backgroundColor:'#f2f7f9'}}>
							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>Jupyter</b> </GridColumn>
									<GridColumn width={6}> <Progress8 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title  style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>JSON/XML</b> </GridColumn>
									<GridColumn width={6}> <Progress6 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>Postman</b> </GridColumn>
									<GridColumn width={6}> <Progress5 /> </GridColumn>
								</Grid>
							</Accordion.Title>

							<Accordion.Title style={{ cursor:'auto'}}>
								<Grid>
									<GridColumn width={10}> <b>Linux</b> </GridColumn>
									<GridColumn width={6}> <Progress5 /> </GridColumn>
								</Grid>
							</Accordion.Title>



						</Accordion>
					</Accordion.Content>



					<Accordion.Title  style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Git</b> </GridColumn>
							<GridColumn width={6}> <Progress5 /> </GridColumn>
						</Grid>
					</Accordion.Title>



				</Accordion>
			</div>


		)
	}
}