import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import SeedBaseConsulting from './AccordionSBC'

export default class AccordionExtracurriculars extends Component {
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
      <Accordion exclusive={false} styled fluid style={{backgroundColor:'#d8e7ec'}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Seed Base Consulting</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <SeedBaseConsulting></SeedBaseConsulting>
        </Accordion.Content>

        <Accordion.Title style={{ cursor:'auto'}}>
          <b>Zahanat Indian Dance Team</b>
        </Accordion.Title>
 
        <Accordion.Title style={{ cursor:'auto'}}>
          <b>Varsity Squash Team</b>
        </Accordion.Title>

        <Accordion.Title style={{ cursor:'auto'}}>
          <b>Data Science Society</b>
        </Accordion.Title>


      </Accordion>



    )
  }
}

