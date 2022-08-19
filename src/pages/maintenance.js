import * as React from 'react'
import Seo from '../components/seo'
import Footer from '../components/footer'

const Maintenance = () => {
  return (
    <>
      <Seo />
      <main>
        <div className="t-fullpage">
          <div className="row">
            <div className="col">
              <title>Maintenance</title>
              <h1>Coming Soon</h1>
              <a
                className="a-cta a-cta--large"
                href="mailto:info@jonasteetaert.be"
              >
                info@jonasteetaert.be
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer fullpage={true} />
    </>
  )
}

export default Maintenance
