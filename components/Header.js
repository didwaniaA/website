import React, { Component } from 'react';
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import { Visibility, Container, Menu, Segment, Button, Icon, Image, Responsive, Sidebar } from 'semantic-ui-react';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class DesktopContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Media greaterThan='mobile'>
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
              href='#skills'
              name='Skills'
            />
            <Menu.Item
              href='#education'
              name='Education'
            />
            <Menu.Item
              href='#projects'
              name='Projects'
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
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable style={{transform:'none'}}>
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
              onClick={this.handleSidebarHide}
            />
            <Menu.Item
              href='#interests'
              name='Interests'
              onClick={this.handleSidebarHide}
            />
            <Menu.Item
              href='#experience'
              name='Experience'
              onClick={this.handleSidebarHide}
            />
            <Menu.Item
              href='#projects'
              name='Projects'
              onClick={this.handleSidebarHide}
            />
            <Menu.Item
              href='#education'
              name='Education'
              onClick={this.handleSidebarHide}
            />
            <Menu.Item
              href='#skills'
              name='Skills'
              onClick={this.handleSidebarHide}
            />
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment inverted>
              <Menu compact inverted fixed='top'>
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
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const Heading = ({ children }) => (

  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

Heading.propTypes = {
  children: PropTypes.node,
}

export default Heading