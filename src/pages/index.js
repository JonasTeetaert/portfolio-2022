import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

const sideNav = (
  <div className="m-side-nav">
    <div className="m-side-nav__title">
      <h1>Creative Frontend Developer</h1>
      <ul className="m-side-nav__anchors">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <ul className="m-side-nav__social">
      <li>
        <a
          href="https://www.instagram.com/chezteetie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jonas-teetaert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://github.com/JonasTeetaert"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
    </ul>
  </div>
)

const IndexPage = () => {
  return (
    <Layout nav={sideNav}>
      <ul className="t-page__list-primary">
        <li>
          <Link to="/">Portfolio</Link>
        </li>
        <li>
          <Link to="/">Google Search In Year</Link>
        </li>
        <li>
          <Link to="/">StuckWerke Die Kulturfirma</Link>
        </li>
        <li>
          <Link to="/">Xerius</Link>
        </li>
        <li>
          <Link to="/">Luminus</Link>
        </li>
      </ul>
      <div className="t-section" id="about">
        <p className="t-page__description">
          Hi there Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="t-section">
        <h2>Expertise</h2>
        <ul className="t-page__list-secondary">
          <li>Scrum</li>
          <li>Kanban</li>
          <li>Debugging</li>
          <li>CSS Wizard</li>
          <li>Javascript</li>
          <li>Sass/Less</li>
          <li>Google Analytics</li>
          <li>Git</li>
          <li>Responsive Design</li>
        </ul>
      </div>
      <div className="t-section">
        <h2>Libraries & Programs </h2>
        <ul className="t-page__list-secondary">
          <li>Animejs</li>
          <li>React</li>
          <li>Gatsby</li>
          <li>Contentful</li>
          <li>Craft CMS</li>
          <li>P5</li>
          <li>WebGL</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
        </ul>
      </div>
      <div className="t-section" id="contact">
        <h2>Question? Project?</h2>
        <div className="text-right">
          <a className="a-cta a-cta--large" href="mailto:jteetaert@hotmail.com">
            jteetaert@hotmail.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
