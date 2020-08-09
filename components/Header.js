import React, { Component } from 'react';
import { Menu, Segment, Button, Icon, Image } from 'semantic-ui-react';

class Heading extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu compact inverted fixed='top'>
          <Menu.Item
            href='#aboutme'
            name='About Me'
          />
          <Menu.Item
            href='#interests'
            name='Interests'
          />
          <Menu.Item
            href='#experience'
            name='Experience'
          />
          <Menu.Item
            href='#projects'
            name='Projects'
          />
          <Menu.Item
            href='#education'
            name='Education'
          />
          <Menu.Item
            href='#skills'
            name='Skills'
          />
          <Menu.Item position='right'>
          <Image src='/Github.svg' href='https://github.com/AneeshDidwania' 
          size='mini' style={{width:"30px", padding: '0.2em', marginRight:'0.5em'}}/>
          <Image src='/LinkedIn.svg' href='https://www.linkedin.com/in/aneeshdidwania/'
          size='mini' style={{width:"30px", padding: '0.2em', marginRight:'0.5em'}}/>
          <Image src='/Email.svg' href='mailto:aneeshdidwania@berkeley.edu'
          size='mini' style={{width:"30px", padding: '0.2em', marginRight:'0.5em'}}/>
        </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

export default Heading