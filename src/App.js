import React from 'react';
import { hot } from 'react-hot-loader';
import OwlCarousel from 'react-owl-carousel';

import './App.scss';
import Nav from './components/Nav';
import Loading from './components/Loading';
import Section from './components/Section';
import LineArt from './components/LineArt';
import SkillSet from './components/SkillSet';
import WorkItem from './components/WorkItem';
import Repos from './components/Repos';
import Writings from './components/Writings';


function App() {
  
  const educations = [
    {
      duration: '2009-2013',
      institute: 'University of Engineering and Technology, Lahore',
      title: 'Electrical Engineering | Major in Computer Science',
      description:
        'I did Bachelor degree in Electrical Engineering with computer science major.',
    },
    {
      duration: '2007-2009',
      institute: 'Kallar Kahar Science College, Kallar Kahar',
      title: 'F.Sc | Pre Engineering',
      description:
        'I completed my F.Sc from KKSC where I got 2nd position among college students with 960/1100 marks.',
    },
    {
      duration: '2005-2007',
      institute: 'Govt. High School, Talagang',
      title: 'Matriculation',
      description:
        'I passed my matriculation exam with 721/850 marks and got 1st position in my school.',
    },
  ];
  const experiences = [
    {
      duration: 'Jun 2020 - Present',
      institute: 'Enquizit',
      title: 'Sr. Software Engineer',
      description: 'I am working at Enquizit as fullstack developer',
      active: true,
    },
    {
      duration: 'Nov 2017 - Jun 2020',
      institute: 'Northbay Solutions',
      title: 'Pr. Software Engineer',
      description:
        'I worked here as Frontend developer focused on React (redux, redux-saga) based projects.',
    },
    {
      duration: 'Dec 2014 - Nov 2017',
      institute: 'QC Technologies',
      title: 'Sr. Software Engineer',
      description:
        'I worked here as a fullstack engineer where I was mostly working on building restful apis using Flask (Python) and some graphql based apis. I also worked on AngularJs based projects here.',
    },
    {
      duration: 'Jul 2013 - Dec 2014',
      institute: 'CVAR',
      title: 'Software Engineer',
      description:
        'I worked at CVAR as software developer where I developed Spring based restful apis and created frontend using Bootstrap. Main part of the job was to visualize real time data using D3 and other charting libraries.',
    },
  ];

  return (
    <div className="home blog">
      {/* <Loading /> */}

      <Nav />
      <Section id="home" className="header">
        <div className="sector">
          <div className="box">
            <h1> Z </h1>
          </div>
          <h1 className="main-title"> Zohaib Ijaz </h1>
          <h4 className="tagline"> Web Developer | Software Engineer </h4>
        </div>
      </Section>

      <Section id="about">
        <h1
          className="section-big-title til hidden-xs hidden-sm"
          data-in-effect="fadeInUp"
          data-out-effect="fadeInDown"
        >
          about
        </h1>

        <div className="container">
          <div className="row">
          <div className="col-sm-8 col-sm-push-4">
              <div className="section-holder">
                <div className="icon-holder i-size-big">
                  <i className="ion-ios7-compose-outline"></i>
                </div>
                <h3 className="section-title"> About Me </h3>
                <p>
                  I am Software Engineer working at Enquizit, Lahore. I am a
                  full stack developer and feel awesome working with React and
                  Python. I am passionate about coding best practices and love
                  to learn new things, technologies and to share that knowledge.
                  <br />
                  Currently, I am focused on Javascript echo system and try to
                  contribute in the form of open source github projects or npm
                  packages in my free time.
                </p>

                <div className="icon-holder i-size-small">
                  <i className="ion-ios7-baseball-outline"></i>
                </div>

                <h4> Hobbies </h4>
                <p> coding | chess | photography </p>

                <div className="icon-holder i-size-small">
                  <i className="ion-social-twitter-outline"></i>
                </div>
              </div>
            </div>


            <div className="col-sm-4 col-sm-pull-8">
              <div className="section-holder texture">
                <LineArt sides={['top', 'bottom', 'left', 'right']} />
                <div className="img-holder">
                  <img
                    src="/assets/images/profile.jpg"
                    className="rounded-circle img-fluid"
                    alt="Zohaib Ijaz"
                  />
                </div>
                <div className="sep-mini"></div>
                <h4> Name: Zohaib Ijaz </h4>
                <h4> Date of birth: 12-Dec-1990 </h4>
                <h4> Nationality: Pakistani </h4>

                <div className="social-links">
                  <a href="http://github.com/mzohaibqc" target=" _blank">
                    <i className="ion-social-github i-size-small"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/zohaib-ijaz-7a657a58/" target=" _blank">
                    <i className="ion-social-linkedin i-size-small"></i>
                  </a>
                  <a href="http://facebook.com/zohaibijaz786" target=" _blank">
                    {' '}
                    <i className="ion-social-facebook i-size-small"></i>
                  </a>
                </div>

                <a
                  className="tooltip-cl cv-download"
                  data-tooltip="Download CV"
                  href="https://docs.google.com/document/d/1U8JedSqF71mxVI0zG7N-ZjYhTGWdLNylEMuzOEzTaos/export?format=pdf"
                >
                  {' '}
                  <i className="ion-ios7-download-outline i-size-small"></i>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience-testimonials">
        <h1
          className="section-big-title til hidden-xs hidden-sm"
          data-in-effect="fadeInUp"
          data-out-effect="fadeInDown"
        >
          experience
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="section-holder">
                <div className="icon-holder i-size-big">
                  <i className="ion-ios7-briefcase-outline"></i>
                </div>
                <h3> Work Experience </h3>
                <div className="time-line">
                  <div className="row">
                    {experiences.map((experience) => (
                      <WorkItem {...experience} key={experience.institute} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="section-holder texture">
                <LineArt sides={['top', 'bottom', 'left', 'right']} />

                <div className="icon-holder i-size-big">
                  <i className="ion-ios7-chatboxes-outline"></i>
                </div>

                <h3> Testimonials </h3>
                <OwlCarousel
                  className="testi-holder owl-theme"
                  loop
                  nav
                  items={1}
                  navText={[
                    '<span class="ion-ios7-arrow-left"></span>',
                    '<span class="ion-ios7-arrow-right"></span>'
                  ]}
                >
                  <div className="testi-item">
                    <img
                      src="wp-content/uploads/2016/08/testi3.jpg"
                      className="img-circle"
                      alt="Michael Hussey"
                    />
                    <p>
                      {' '}
                      Good work done by the designer. Really clean and organized
                      approach.{' '}
                    </p>
                    <div className="testi-bottom">
                      <div className="i-size-small testi-icon">
                        <i className="ion-ios7-chatbubble-outline"></i>
                      </div>
                      <h5> Michael Hussey </h5>
                      <p> Manager, Basic Consultants </p>
                    </div>
                  </div>
                  <div className="testi-item">
                    <img
                      src="wp-content/uploads/2016/08/testi2.jpg"
                      className="img-circle"
                      alt="Jenna Doe"
                    />
                    <p>
                      {' '}
                      Very much satisfied by the work. Highly recommended!{' '}
                    </p>
                    <div className="testi-bottom">
                      <div className="i-size-small testi-icon">
                        <i className="ion-ios7-chatbubble-outline"></i>
                      </div>
                      <h5> Jenna Doe </h5>
                      <p> Owner, Fashion Store </p>
                    </div>
                  </div>
                  <div className="testi-item">
                    <img
                      src="wp-content/uploads/2016/08/testi1.jpg"
                      className="img-circle"
                      alt="Anthony Doe"
                    />
                    <p>
                      {' '}
                      Pefect, this is exactly what I needed for me. Really great
                      work.{' '}
                    </p>
                    <div className="testi-bottom">
                      <div className="i-size-small testi-icon">
                        <i className="ion-ios7-chatbubble-outline"></i>
                      </div>
                      <h5> Anthony Doe </h5>
                      <p> CEO, XB Inc </p>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="skill-education">
        <h1
          className="section-big-title til hidden-xs hidden-sm"
          data-in-effect="fadeInUp"
          data-out-effect="fadeInDown"
        >
          education
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="section-holder texture">
                <LineArt sides={['top', 'bottom', 'left', 'right']} />

                <div className="icon-holder i-size-big">
                  <i className="ion-ios7-star-outline"></i>
                </div>

                <h3> Skills </h3>
                <OwlCarousel
                  className="skill-holder  owl-theme"
                  loop
                  nav
                  items={1}
                  navText={[
                    '<span class="ion-ios7-arrow-left"></span>',
                    '<span class="ion-ios7-arrow-right"></span>'
                  ]}
                >
                  <SkillSet
                    title="Professional"
                    skills={[
                      { name: 'Javascript', percentage: 90 },
                      { name: 'Python', percentage: 80 },
                      { name: 'React', percentage: 95 },
                      { name: 'HTML', percentage: 90 },
                      { name: 'CSS', percentage: 90 },
                    ]}
                  />
                  <SkillSet
                    title="Intermediate"
                    skills={[
                      { name: 'React Native', percentage: 60 },
                      { name: 'Flask', percentage: 70 },
                      { name: 'Graphql', percentage: 75 },
                      { name: 'NodeJs', percentage: 70 },
                    ]}
                  />
                  <SkillSet
                    title="Beginner"
                    skills={[
                      { name: 'Vue', percentage: 40 },
                      { name: 'Svelte', percentage: 40 },
                      { name: 'Typescript', percentage: 40 },
                      { name: 'Deno', percentage: 0 },
                    ]}
                  />
                </OwlCarousel>
              </div>
            </div>

            <div className="col-sm-8">
              <div className="section-holder">
                <div className="icon-holder i-size-big">
                  <i className="ion-ios7-lightbulb-outline"></i>
                </div>
                <h3> Education </h3>
                <div className="time-line">
                  <div className="row">
                    {educations.map((education) => (
                      <WorkItem {...education} key={education.title} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Repos />

      <Section id="npm-stats">
        <h1
          className="section-big-title til hidden-xs hidden-sm"
          data-in-effect="fadeInUp"
          data-out-effect="fadeInDown"
        >
          npm stats
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-holder">
                <div className="text-center">
                  <div className="icon-holder-center i-size-big">
                    <i className="ion-ios7-pulse"></i>
                  </div>
                </div>
                <h3 className="text-center"> NPM Stats </h3>
                <iframe
                  className="npm-stats"
                  title="npm-stats"
                  src="https://npmcharts.com/compare/antd-theme-generator,create-react-app-sass,antd-theme-webpack-plugin,antd-amplify-react,react-app-rewire-antd-theme,runtime-theme-webpack-plugin,css-runtime-theme?minimal=true&interval=30"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="stackoverflow">
        <h1
          className="section-big-title til hidden-xs hidden-sm"
          data-in-effect="fadeInUp"
          data-out-effect="fadeInDown"
        >
          stackoverflow
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-holder">
                <div className="text-center">
                  <div className="icon-holder-center i-size-big">
                    <i className="ion-ios7-pulse"></i>
                  </div>
                </div>
                <h3 className="text-center"> Stackoverflow </h3>
                <img className="stackoverflow-profile-image" src="/assets/images/stackoverflow-profile.png" alt="SOF Profile" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Writings />

    </div>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(module)(App) : App;
