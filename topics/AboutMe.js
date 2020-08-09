import React, { Component } from 'react'
import { Container, Divider, Header, Image } from 'semantic-ui-react'

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container text textAlign='center'>
          <Divider hidden />
          <Divider hidden />
          <Divider hidden />
          <Image src='/images/Profile.jpg' size='small' centered circular />
          <Header as='h1' dividing inverted>Welcome!</Header>
          <p style={{ fontSize: '1em', color: '#FFFFFF' }}>
            My name's Aneesh Didwania and I'm a junior studying Data Science and Statistics with a
            concentration in Business and Industrial Analytics at UC Berkeley. I love to learn, create,
            and eat out.</p>
          <Divider hidden />
          <p style={{ fontSize: '1em', color: '#FFFFFF' }}>
            As a vegetarian, I've always enjoyed restaurants that can use a motley assortment of ingredients
            to fashion beautiful mouthwatering dishes that don't fall into convential cuisine categories like
            Mexican, Chinese, or Italian. Ever since visiting amazing places like <a href='https://www.rolfanddaughters.com/'>
              Rolf And Daughter</a>, <a href='https://www.twohandsnyc.com/'>Two Hands</a>, and
            <a href='http://xixany.com/'> XIXA</a> by accident, I've wanted to disrupt into the
            restaurant industry, in particular doing data analysis to create meaningful restaurant recommendations.</p>
          <Divider hidden />
          <p style={{ fontSize: '1em', color: '#FFFFFF' }}>
            If you have any questions or want to learn more about me, please feel free to email me
            at <a href='mailto:aneeshdidwania@berkeley.edu?subject = Feedback&body = Message'>
              aneeshdidwania@berkeley.edu</a>.</p>
        </Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </div>
    )
  }
}