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
    <a href="#cases" className="m-side-nav__arrow">
      <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.51 29.52">
        <path d="M21.77,14.69v.06s-.01,.06-.03,.09c.02-.05,.03-.1,.03-.15Z" />
        <path d="M43.51,14.76s-.01,.1-.03,.15c.01,0,.01,.01-.01,.03,0,.03-.02,.06-.04,.09-.01,.03-.03,.06-.07,.08,0,.02-.01,.03-.03,.03-.03,.03-.06,.05-.09,.06-.02,.02-.04,.03-.07,.03-.01,.01-.02,.02-.03,.02-.14,.03-13.88,3.54-13.88,13.77,0,.27-.22,.5-.5,.5s-.5-.23-.5-.5c0-7.91,7.47-12.04,11.74-13.76H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H40c-4.27-1.72-11.74-5.85-11.74-13.76,0-.27,.22-.5,.5-.5s.5,.23,.5,.5c0,10.23,13.74,13.74,13.88,13.77,.01,0,.02,0,.03,.02,.03,0,.05,.01,.07,.03,.03,.01,.06,.03,.09,.06,.01,0,.03,.02,.03,.03,.04,.03,.06,.06,.07,.09,.03,.03,.04,.05,.04,.08,.01,0,.02,.02,.01,.03,.02,.05,.03,.1,.03,.15Z" />
        <path d="M21.77,14.78v.06s-.01-.1-.03-.15c.02,.03,.03,.06,.03,.09Z" />
      </svg>
    </a>
  </div>
)

const IndexPage = () => {
  return (
    <Layout nav={sideNav}>
      <ul id="cases" className="p-home__list-primary">
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
        <p className="p-home__description">
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
        <ul className="p-home__list-secondary">
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
        <ul className="p-home__list-secondary">
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
        <div className="p-home__cta">
          <a className="a-cta a-cta--large" href="mailto:jteetaert@hotmail.com">
            jteetaert@hotmail.com
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
