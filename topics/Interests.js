import React, { Component } from 'react'
import { Divider, Grid, Header, Image } from 'semantic-ui-react'

export default class Interests extends Component {
  render() {
    return (
      <div className='topic'>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Header as='h1' textAlign='left' inverted className="topics">Areas of Interest</Header>
        <Divider />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid stackable padded="vertically">
          <Grid.Row columns={3}>
            <Grid.Column className="interest">
              <Image src='/DataAnalysis.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Data Analysis</Header>
            </Grid.Column>
            <Grid.Column className="interest">
              <Image src='/DataVisualization.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Data Visualization</Header>
            </Grid.Column>
            <Grid.Column className="interest">
              <Image src='/MachineLearning.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Machine Learning</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column className="interest">
              <Image src='/NLP.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Natural Language Processing</Header>
            </Grid.Column>
            <Grid.Column className="interest">
              <Image src='/Restaurant.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Restauarant Analytics</Header>
            </Grid.Column>
            <Grid.Column className="interest">
              <Image src='/Recommendation.svg' size='tiny' centered />
              <Header as='h3' textAlign='center' inverted style={{ fontSize: '1.5em' }}>Recommender Systems</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}