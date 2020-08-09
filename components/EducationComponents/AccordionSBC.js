import React, { Component } from 'react'
import { List,Accordion, Icon } from 'semantic-ui-react'

export default class SeedBaseConsulting extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion exclusive={false} fluid styled style={{ margin:0, backgroundColor:'#f2f7f9'}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Vice President of Consulting</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} style={{ paddingLeft: '1.5em' }}>
        <List as='ol'>
            <List.Item as='li' value='›'>
            <p>Advanced skills of 25 new project managers and strategy consultants on consulting topics such as 
            researching effectively, visualizing data in Excel, and creating powerful PowerPoint/Figma presentations</p>
            </List.Item>
          </List>
        </Accordion.Content>
        
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Project Manager</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1} style={{ paddingLeft: '1.5em' }}>
        <List as='ol'>
            <List.Item as='li' value='›'>
            <p>Worked with Petal Card Inc. to increase brand adoption in student audiences 
            through product development recommendations and marketing strategies by managing a team 
            of 6 new consultants and delegating research and method formulation based on skill set</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Generated insights for Samsung to increase their userbase in the Developer 
            Universe through gamification by leading a team of 5 to perform competitor 
            analysis, conduct student surveys, and research industry techniques</p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex ===2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Strategy Consultant</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2} style={{ paddingLeft: '1.5em' }}>
        <List as='ol'>
            <List.Item as='li' value='›'>
            <p>Prevented mismanagement of consumer items by providing warehouse RFID solutions to Clutter Inc.</p>
            </List.Item>
          </List>
        </Accordion.Content>


      </Accordion>
      


      )
  }
}