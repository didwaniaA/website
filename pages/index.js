import Head from 'next/head'
import React, { Component } from 'react'
import { Image, Icon, Container, Header, Segment, Sidebar, Menu, Responsive } from 'semantic-ui-react'
import Heading from '../components/Header'
import AboutMe from '../topics/AboutMe.js'
import Education from '../topics/Education.js'
import Interests from '../topics/Interests.js'
import Projects from '../topics/Projects.js'
import Skills from '../topics/Skills.js'
import Work from '../topics/Work.js'

class HomePage extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { sidebarOpened } = this.state
    const visible = true
    return (
      <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="page">
          <style>{`
            .topic {
              margin-left:5%;
              margin-right:5%;
            }
            .column.interest {
              opacity:0.6
            }
            .column.interest:hover{
              opacity:1.0
            }
            .ui.small.labelone.label {
              text-align: right;
            }
            .row.gridrow {
              padding-top:0rem;
              padding-bottom:0rem
            }
            .page {
              background: #0F2027;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to bottom, #2C5364, #2C5364, #2C5364, #203A43, #2C5364, #203A43, #2C5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
            .ui.indicating.progress[data-percent^="0"] .bar, .ui.indicating.progress[data-percent^="1"] .bar,
            .ui.indicating.progress[data-percent^="2"] .bar, .ui.indicating.progress[data-percent^="3"] .bar,
            .ui.indicating.progress[data-percent^="4"] .bar, .ui.indicating.progress[data-percent^="5"] .bar,
            .ui.indicating.progress[data-percent^="6"] .bar, .ui.indicating.progress[data-percent^="7"] .bar,
            .ui.indicating.progress[data-percent^="8"] .bar, .ui.indicating.progress[data-percent^="9"] .bar{
              background-color: #89b7cb;
            }
            .ui.indicating.progress[data-percent^="0"] .label, .ui.indicating.progress[data-percent^="1"] .label,
            .ui.indicating.progress[data-percent^="2"] .label, .ui.indicating.progress[data-percent^="3"] .label,
            .ui.indicating.progress[data-percent^="4"] .label, .ui.indicating.progress[data-percent^="5"] .label,
            .ui.indicating.progress[data-percent^="6"] .label, .ui.indicating.progress[data-percent^="7"] .label,
            .ui.indicating.progress[data-percent^="8"] .label, .ui.indicating.progress[data-percent^="9"] .label{
              color: azure
            }
      `}</style>

          <div id="aboutme">
            <Head>
              <title>Aneesh's Portfolio</title>
            </Head>
            {/* <Responsive maxWidth={768}>
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
                  style={{ minHeight: 30, padding: '1em 0em' }}
                  vertical>
                  <Container>
                    <Menu inverted pointing secondary size='small'>
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
            <Heading />
            </Responsive> */}

            <Heading />
            <AboutMe />
          </div>

          <div id='interests'>
            <Interests />
          </div>

          <div id='experience'>
            <Work />
          </div>

          <div id='projects'>
            <Projects />
          </div>

          <div id='education'>
            <Education />
          </div>

          <div id='skills'>
            <Skills />
          </div>

          <Segment inverted vertical style={{ padding: '4.5em 0em' }}>
            <div className="intro">
              <Container text textAlign='center'>
                <p>
                  If you have any suggestions for project ideas, restaurants to try, or just want to chat
                  please feel free to email me at <a href='mailto:aneeshdidwania@berkeley.edu?subject = 
                  Feedback&body = Message'>aneeshdidwania@berkeley.edu</a>
                </p>
              </Container>
            </div>
          </Segment>
          <Segment inverted vertical>
            <div className="intro">
              <Container text textAlign='center'>
                <p>© 2020 Aneesh Didwania | <a href='https://github.com/AneeshDidwania/website/blob/master/Copyrights.md'>Media</a></p>
              </Container>
            </div>
          </Segment>
        </div>
      </div>
    )
  }
}

export default HomePage