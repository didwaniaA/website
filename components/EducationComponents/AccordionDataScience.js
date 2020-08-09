import React, { Component } from 'react'
import { List, Accordion, Icon } from 'semantic-ui-react'

export default class AccordionDataScience extends Component {
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

      <Accordion exclusive={false} fluid styled className="schooling" style={{backgroundColor:'#f2f7f9'}}>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Principles & Techniques of Data Science</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Explored key areas of data science including question formulation,
              data collection and cleaning, visualization, statistical inference,
            predictive modeling, and decision making </p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>Python (Pandas, Numpy, Scikit-Learn, Pytorch, Matplotlib, Seaborn, Plotly), SQL</i></p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Concepts in Computing with Data</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Utilized principles of data manipulation (e.g. wrangling, reshaping, tidying)
              to carry out the Data Analysis Cycle by visualizing data, organizing workflows, and
            creating reports</p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>R (Shiny, ggplot2, Dplyr, Plotly, Magrittr, Markdown)</i></p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Data Science for Smart Cities</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Studied the complex urban systems and cities in the light of network science
            by exploring concepts from social, natural, engineering and humanity sciences</p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>Python (NetworkX, Pandas, Numpy, Matplotlib, GeoPandas, OSMnx)</i></p>
            </List.Item>
          </List>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Computational Structures in Data Science</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Learned foundations of programming languages through functional
            programming, data abstraction, object-oriented programming, and program complexity</p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>Python</i></p>
            </List.Item>
          </List>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Data Structures</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Explored the creation of data structures and efficient programming methods
            with an emphasis in time and memory complexity</p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>Java</i></p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Foundations of Data Science</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Learned critical concepts and skills in computer
              programming and statistical inference, in conjunction with
            hands-on analysis of real-world datasets</p>
            </List.Item>
            <List.Item as='li' value='›'>
              <p>Skills: <i>Python(Numpy, Pandas, Matplotlib)</i></p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Concepts of Probability</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Explored important probability concepts and distributions</p>
            </List.Item>
          </List>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <b>Introduction to Probability and Statistics</b>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7} style={{ paddingLeft: '1.5em' }}>
          <List as='ol'>
            <List.Item as='li' value='›'>
              <p>Learned about various statistical concepts and methods
            for selecting appropriate analyses based on data </p>
            </List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    )
  }
}