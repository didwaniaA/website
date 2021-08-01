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
        <meta name="robots" content="noindex,nofollow,noimageindex"/>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div className="page">
          <style>{`
            .topic {
              margin-left:5%;
              margin-right:5%;
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
          <Heading>

            <div id="aboutme">
              <Head>
                <title>Aneesh's Portfolio</title>
              </Head>
              <AboutMe />
            </div>

            <div id='interests'>
              <Interests />
            </div>

            <div id='experience'>
              <Work />
            </div>

            <div id='skills'>
              <Skills />
            </div>

            <div id='education'>
              <Education />
            </div>

            <div id='projects'>
              <Projects />
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
                  <p>© 2021 Aneesh Didwania | <a href='https://github.com/AneeshDidwania/website/blob/master/Copyrights.md'>Media</a></p>
                </Container>
              </div>
            </Segment>
          </Heading>

        </div>
      </div>
    )
  }
}

export default HomePage