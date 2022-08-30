import * as React from 'react'

const SideNav = ({ data }) => {
  return (
    <div className="m-side-nav">
      <div className="m-side-nav__title">
        <h1>{data.contentfulProfile.jobTitle}</h1>
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
          {data.contentfulProfile.instagram && (
            <a
              href={data.contentfulProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
        </li>
        <li>
          <a
            href={data.contentfulProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href={data.contentfulProfile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
      <a href="#cases" className="m-side-nav__arrow">
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.51 29.52"
        >
          <path d="M21.77,14.69v.06s-.01,.06-.03,.09c.02-.05,.03-.1,.03-.15Z" />
          <path d="M43.51,14.76s-.01,.1-.03,.15c.01,0,.01,.01-.01,.03,0,.03-.02,.06-.04,.09-.01,.03-.03,.06-.07,.08,0,.02-.01,.03-.03,.03-.03,.03-.06,.05-.09,.06-.02,.02-.04,.03-.07,.03-.01,.01-.02,.02-.03,.02-.14,.03-13.88,3.54-13.88,13.77,0,.27-.22,.5-.5,.5s-.5-.23-.5-.5c0-7.91,7.47-12.04,11.74-13.76H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H40c-4.27-1.72-11.74-5.85-11.74-13.76,0-.27,.22-.5,.5-.5s.5,.23,.5,.5c0,10.23,13.74,13.74,13.88,13.77,.01,0,.02,0,.03,.02,.03,0,.05,.01,.07,.03,.03,.01,.06,.03,.09,.06,.01,0,.03,.02,.03,.03,.04,.03,.06,.06,.07,.09,.03,.03,.04,.05,.04,.08,.01,0,.02,.02,.01,.03,.02,.05,.03,.1,.03,.15Z" />
          <path d="M21.77,14.78v.06s-.01-.1-.03-.15c.02,.03,.03,.06,.03,.09Z" />
        </svg>
      </a>
    </div>
  )
}

export default SideNav
