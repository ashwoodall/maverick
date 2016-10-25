// Core
import React from 'react'

import Flexbox from 'react-material-flexbox'

// Modules
import Container from 'modules/Container/Container'
import Svg from 'modules/Svg/Svg'

// Assets
import Logo from 'assets/oh-hi_Logo-03.svg'
import Steps from 'assets/steps2.png'

// Theme
import theme from 'views/Home/Home.scss'

const Home = ({ title, tagline }) => (
  <Container id="home" className={ theme.oh__home }>
    <Flexbox layout="column" align="center center">
      <Svg source={ Logo } className={ theme.oh__home__logo } aria-label="Oh-hi. Meet new friends" />
      <h5 className={ theme.oh__home__h4 }>Please excuse the mess as we work hard to bring to you the new Oh-hi.</h5>
      <h4 className={ theme.oh__home__h4 }>Coming soon!</h4>
    </Flexbox>

    <Flexbox layout="row" align="center center">
      <img className={ theme.oh__home__steps } src={ Steps } aria-label="Steps" />
    </Flexbox>

    <Flexbox layout="row" layout-sm="column" layout-xs="column">
      <Flexbox flex>
        <h4>Why Oh-hi Exists</h4>
        <p>We all need friends. We need people we can depend on, confide in, and just hang out with. And for the significant others of military service members (MilSOs, for short), it can be especially tough to find friends but essential to have them. That’s what Oh-hi is all about!</p>
        <br/>
        <h5>Oh-hi is a community of MilSOs, meeting in-person to find new friends at their duty stations.</h5>
        <p>Although connections can be made digitally, we know that real, trustworthy relationships are built by spending time together in-person. That is why Oh-hi aims to quickly get people away from their screens and instead, get them out and about, having fun and sharing experiences.</p>
      </Flexbox>
      <Flexbox flex="10" />
      <Flexbox flex>
        <h4>What to Expect</h4>
        <p>Oh-hi is free to use. Once you sign up, you can view potential new friends across your entire duty station. You’ll be joining a community of MilSOs that are ready and willing to meet up. Once you find someone you’d like to meet, we’ll send them an invite! If they accept, we’ll put you in touch and the two of you can decide when and where to meet up. New to the area and don’t know where to go? We’ll give you some suggestions to get you started! And it’s as easy as texting.</p>
      </Flexbox>
    </Flexbox>
  </Container>
)

export default Home
