import React from 'react'
import '../styles/stepper.css'
import work from '../data/Work'
import grad from '../data/Edu'
import lang from '../data/Language'
import hobby from '../data/Interests'
import { ExperienceWrapper, WorkWrapper, EdWrapper, EdContent, Stepper, StepperHead, LogoLink, StepperDesc } from '../styles/workStyle.js'
import Layout from '../components/layout'

const Experience = () => (
  <Layout>
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Work Experience</h1>
      <div className="experience-stepper">
          {
            work.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.designation}</h3>
                    <a href={item.companyLink}>{item.name} </a>
                    <p> {item.supervisor} <br/> {item.dated} </p>
                  </div>
                </StepperHead>
                <StepperDesc dangerouslySetInnerHTML={{__html: item.description}} />
              </Stepper>
              </div>
            ))
          }
    </div>
    </WorkWrapper>

    <EdWrapper>
      <h1>Education</h1>
      <EdContent>
        {
            <p>Currently a PhD major in Electrical Engineering in University of California, Santa Cruz. <br/>2018 - Now</p>
        }
        {
          grad.map(item => (<div key={item.id}>
            <p>Graduated with a {item.degree}'s Degree majored in {item.major} from {item.name} <br/>
            {item.dated}</p>
            </div>))
        }
      </EdContent>
      <h1>Interests</h1>
      <EdContent>
        {
          hobby.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
      <h1>Language</h1>
      <EdContent>
        {
          lang.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
    </EdWrapper>
  </ExperienceWrapper>
  </Layout>
)

export default Experience
