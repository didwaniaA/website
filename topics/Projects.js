import React, { Component } from 'react'
import { Card, Divider, Grid, Header, Image } from 'semantic-ui-react'

export default class Projects extends Component {
  render() {
    return (
      <div className='topic'>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Header as='h1' textAlign='left' inverted className="topics">Independent Projects</Header>
        <Divider />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid columns={3} stackable>
          <Grid.Row style={{ paddingBottom: 0 }}>
            <Grid.Column>
              <Card fluid style={{ backgroundColor: '#d8e7ec' }} href='https://aneeshdidwania.com'>
                <Image src='images/WebDesign.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>My Website</Card.Header>
                  <Card.Meta>August 2020</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  This was a project to create my first website using React, Next.Js, and Semantic UI.
              </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid style={{ backgroundColor: '#d8e7ec' }} href='https://github.com/didwaniaA/NBAPlayerSalaryBins'>
                <Image src='images/Basketball.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>NBA Players' Salary</Card.Header>
                  <Card.Meta>May 2020</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  This project attempts to predict an NBA player's salary bin through Random Forest Classification.
              </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card fluid style={{ backgroundColor: '#d8e7ec' }} href='https://github.com/didwaniaA/NYCSubwaySystem'>
                <Image src='images/Subway.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>NYC Subway System</Card.Header>
                  <Card.Meta>April 2020</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  This project estimates NYC's population through centrality measures performed on the Subway.
              </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}