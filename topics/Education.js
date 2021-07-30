import React, { Component } from 'react'
import { Container, Divider, Grid, GridColumn, Header } from 'semantic-ui-react'
import AccordionSchooling from '../components/EducationComponents/AccordionCourses'
import AccordionExtracurriculars from '../components/EducationComponents/AccordionExtracurriculars'

export default class Education extends Component {
  render() {
    return (
      <div className='topic'>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Header as='h1' textAlign='left' inverted className="topics">University of California - Berkeley</Header>
        <Divider />
        <Grid stackable divided>
          <Grid.Row>
            <GridColumn centered verticalAlign='middle'>
              <Container fluid text textAlign='center'>
                <Header as='h3' inverted> Data Science Major - Business Analytics, Economics, Human Behavior</Header>
                <Header as='h5' inverted style={{ marginTop: 0 }}>Senior (Graduating May 2022)</Header>
              </Container>
            </GridColumn>
          </Grid.Row>
          <Grid.Row style={{ paddingBottom: 0 }}>
            <Grid.Column width={8}>
              <Header as='h3' dividing style={{ color: "white" }}>Courses</Header>
              <AccordionSchooling />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h3' dividing style={{ color: "white" }}>Extracurriculars</Header>
              <AccordionExtracurriculars />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}