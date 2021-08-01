import React, { Component } from 'react'
import { Divider, Grid, GridColumn, Header, Progress } from 'semantic-ui-react'
import AccordionLanguages from '../components/SkillsComponents/AccordionLanguages'
import AccordionPrograms from '../components/SkillsComponents/AccordionPrograms'

export default class Skills extends Component {
  render() {
    return (
      <div className='topic'>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Header as='h1' textAlign='left' inverted className="topics">Skills</Header>
        <Divider />
        <Grid stackable divided>
          <Grid.Row columns={5}>
            <GridColumn verticalAlign='middle'>
              <Progress percent={0} indicating size='small' progress='percent' label="Novice" style={{ color: "azure" }} />
            </GridColumn>
            <GridColumn verticalAlign='middle'>
              <Progress percent={25} indicating size='small' progress='percent' label="Beginner" style={{ color: "azure" }} />
            </GridColumn>
            <GridColumn verticalAlign='middle'>
              <Progress percent={50} indicating size='small' progress='percent' label="Competent" style={{ color: "azure" }} />
            </GridColumn>
            <GridColumn verticalAlign='middle'>
              <Progress percent={75} indicating size='small' progress='percent' label="Proficient" style={{ color: "azure" }} />
            </GridColumn>
            <GridColumn verticalAlign='middle'>
              <Progress percent={100} indicating size='small' progress='percent' label="Expert" style={{ color: "azure" }} />
            </GridColumn>
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: 0 }}>
            <Grid.Column width={8}>
              <Header as='h3' dividing style={{ color: "white" }}>Programming Languages</Header>
              <AccordionLanguages />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3' dividing style={{ color: "white" }}>Programs</Header>
              <AccordionPrograms />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
      </div>
    )
  }
}