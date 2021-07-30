import React, { Component } from 'react'
import { Progress, Checkbox, Radio, Grid, GridColumn, List, Accordion, Icon } from 'semantic-ui-react'

export default class AccordionPython extends Component {
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
				<Accordion exclusive={false} fluid styled className="schooling" style={{backgroundColor:'#f2f7f9'}}>
					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}><b>Pandas</b> </GridColumn>
							<GridColumn width={6}> <Progress8 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Numpy</b> </GridColumn>
							<GridColumn width={6}> <Progress8 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}><b>Scikit-Learn</b> </GridColumn>
							<GridColumn width={6}> <Progress7 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Django</b> </GridColumn>
							<GridColumn width={6}> <Progress7 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>NetworkX</b> </GridColumn>
							<GridColumn width={6}> <Progress6 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Matplotlib</b> </GridColumn>
							<GridColumn width={6}> <Progress6 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>TensorFlow</b> </GridColumn>
							<GridColumn width={6}> <Progress6 /> </GridColumn>
						</Grid>
					</Accordion.Title>


					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Seaborn</b> </GridColumn>
							<GridColumn width={6}> <Progress6 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Plotly</b> </GridColumn>
							<GridColumn width={6}> <Progress5 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>Geopandas</b> </GridColumn>
							<GridColumn width={6}> <Progress5 /> </GridColumn>
						</Grid>
					</Accordion.Title>

					<Accordion.Title style={{ cursor:'auto'}}>
						<Grid>
							<GridColumn width={10}> <b>PyTorch</b> </GridColumn>
							<GridColumn width={6}> <Progress5 /> </GridColumn>
						</Grid>
					</Accordion.Title>
				</Accordion>
			</div>


		)
	}
}