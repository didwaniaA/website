import React, { Component } from 'react'
import { List, Accordion, Icon } from 'semantic-ui-react'
import AccordionDataScience from './AccordionDataScience'

export default class AccordionSchooling extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (

      <Accordion exclusive={false} fluid styled className="schooling" style={{backgroundColor:'#d8e7ec'}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Data Science | Computer Science | Statistics</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} style={{ paddingLeft: '1.5em' }}>
        <AccordionDataScience/>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Miscellaneous</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1} style={{ paddingLeft: '1.5em' }}>
        <List as='ol'>
            <List.Item as='li' value='›'>
            <p>Human Contexts and Ethics of Data - DATA/History/STS</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Linear Algebra and Differential Equations</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Multivariable Calculus</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Calculus</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Reading, Composition, and Research</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>English Composition in Connection with the Reading of World Literature</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Introduction to Economics</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Economic Analysis - Micro</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Business Analytics</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Sociology and Political Ecology of Agro-Food Systems</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Bioinspired Design</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Psychology</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Science of Human Happiness</p>
            </List.Item>
            <List.Item as='li' value='›'>
            <p>Ancient Near Eastern Mythology</p>
            </List.Item>
          </List>
        </Accordion.Content>
      </Accordion>



    )
  }
}