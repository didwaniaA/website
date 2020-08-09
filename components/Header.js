import React, { Component } from 'react';
import { Container, Menu, Segment, Button, Icon, Image, Responsive, Sidebar } from 'semantic-ui-react';

class Heading extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened } = this.state

    return (
      <div>
        <Responsive maxWidth={768}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation='overlay'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={sidebarOpened}
            >
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
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 50, padding: '1em 0em' }}
                vertical>
                <Container>
                  <Menu compact inverted fixed='bottom'>
                    <Menu.Item onClick={this.handleToggle}>
                      <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                      <Image src='/Github.svg' href='https://github.com/AneeshDidwania'
                        size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
                      <Image src='/LinkedIn.svg' href='https://www.linkedin.com/in/aneeshdidwania/'
                        size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
                      <Image src='/Email.svg' href='mailto:aneeshdidwania@berkeley.edu'
                        size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
                    </Menu.Item>
                  </Menu>
                </Container>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
        
        <Responsive minWidth={768}>
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
                  size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
                <Image src='/LinkedIn.svg' href='https://www.linkedin.com/in/aneeshdidwania/'
                  size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
                <Image src='/Email.svg' href='mailto:aneeshdidwania@berkeley.edu'
                  size='mini' style={{ width: "30px", padding: '0.2em', marginRight: '0.5em' }} />
              </Menu.Item>
            </Menu>
          </Segment>
        </Responsive>
      </div>
    )
  }
}

export default Heading