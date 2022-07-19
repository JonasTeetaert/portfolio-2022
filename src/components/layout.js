import * as React from 'react'

import '../../scss/main.scss'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({children}) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
