import React, { Component } from 'react'
import { Card, Divider, Grid, Header, Label, List } from 'semantic-ui-react'

export default class Work extends Component {
  render() {
    return (
      <div className='topic'>
        <style>{`
          @media all and (max-width: 768px) {
            .line {
              display:none;
            }
          }
        `}</style>

        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Header as='h1' textAlign='left' inverted className="topics">Work Experience</Header>
        <Divider />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid stackable>
          <Grid.Row style={{ paddingBottom: 0 }}>
            <Grid.Column width={1} />
            <Grid.Column width={7}>
              <Card fluid raised style={{ background: "#d8e7ec" }}>
                <Card.Content>
                  <Label pointing='right' attached='top' size='small' className="labelone"
                    style={{ marginRight: 0, backgroundColor: "#a3c7d3" }}>
                    May 2021 - July 2021</Label>
                  <Card.Header >Financial Operations Intern</Card.Header>
                  <Card.Header style={{ fontSize: '1em', paddingTop: "0.25em" }}>
                    <a href="https://www.statefarm.com/" >State Farm</a></Card.Header>
                  <Card.Description>
                    <List as='ol'>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Introduced over 30 original macros in MS Excel VBA to condense 
                      multiple manual processes into 5-minute solutions</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Designed market share forecasts for State Farm and its
                      top competitors through data on Direct Written Premiums and 5-Year CAGRs </List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Performed trend analysis on incoming call volumes for 
                      support staff to conserve labor costs</List.Item>
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <div className="line" style={{
              height: '350%', background: '#d8e7ec', zIndex: 1, position: 'relative',
              width: '4px', left: '-2px', right: 0, top: 0
            }} />
            <Grid.Column width={7} />
            <Grid.Column width={1} />
          </Grid.Row>
          <Grid.Row style={{ paddingTop: 0 }}>
            <Grid.Column width={1} />
            <Grid.Column width={7} />
            <Grid.Column width={7}>
              <Card fluid raised style={{ background: "#d8e7ec" }}>
                <Card.Content>
                  <Label pointing='left' attached='top' size='small' className="labeltwo"
                    style={{ marginLeft: 0, backgroundColor: "#a3c7d3" }}>
                    May 2020 - June 2021</Label>
                  <Card.Header >Data Analyst Intern</Card.Header>
                  <Card.Header style={{ fontSize: '1em', paddingTop: "0.25em" }}>
                    <a href="https://www.ppg.com" >PPG Industries</a></Card.Header>
                  <Card.Description>
                    <List as='ol'>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Engineered a method to automatically take raw LinkedIn Sales Navigator 
                      data and connect sales teams with potential industry clients</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Implemented machine learning and artificial intelligence algorithms to
                       create product recommendations based on consumer spending habits and promotional sales</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Developed an automated Natural Language Processing Phone Ordering 
                      System to streamline a painter's ability to order paint</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Devised a system to detect a customer's likelihood to churn based
                       on their seasonal purchasing behaviour</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Created an interactive multidimensional isochrone map to showcase 
                      a painter's distance from a particular job to help Operations Teams utilize untapped painters</List.Item>
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
          <Grid.Row style={{ paddingTop: 0 }}>
            <Grid.Column width={1} />
            <Grid.Column width={7}>
              <Card fluid raised style={{ background: "#d8e7ec" }}>
                <Card.Content>
                  <Label pointing='right' attached='top' size='small' className="labelone"
                    style={{ marginLeft: 0, backgroundColor: "#a3c7d3" }}>
                    May 2019 - August 2019</Label>
                  <Card.Header >Data Management Intern</Card.Header>
                  <Card.Header style={{ fontSize: '1em', paddingTop: "0.25em" }}>
                    <a href="https://www.xenomorph.com" >Xenomorph</a></Card.Header>
                  <Card.Description>
                    <List as='ol'>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Fashioned new product offerings for multiple clients to store raw financial data
                      and logical analyses in a horizontally and vertically scalable database in MongoDB through 10,000 lines of original code</List.Item>
                      <List.Item as='li' value='›' style={{ color: "rgba(0,0,0,.6)" }}>Refined decision-making practices by devising a system to read live financial
                       data from Bloomberg/Reuters </List.Item>
                    </List>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={7} />
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}