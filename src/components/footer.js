import * as React from 'react'

const Footer = () => (
  <footer className="m-footer">
    <div className="container">
      <div className="row">
        <div className="col m-footer__wrapper">
          <div className="m-footer__copy">
            &copy; 2022 - All Rights Reserved | Made with{' '}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gastby
            </a>{' '}
            and{' '}
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
