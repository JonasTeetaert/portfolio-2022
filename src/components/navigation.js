import * as React from 'react'
import { Link } from 'gatsby'

// const Navigation = () => (
//   <nav role="navigation" className={styles.container} aria-label="Main">
//     <Link to="/" className={styles.logoLink}>
//       <span className={styles.logo} />
//       <span className={styles.navigationItem}>Gatsby Starter Contentful</span>
//     </Link>
//     <ul className={styles.navigation}>
//       <li className={styles.navigationItem}>
//         <Link to="/" activeClassName="active">
//           Home
//         </Link>
//       </li>
//       <li className={styles.navigationItem}>
//         <Link to="/blog/" activeClassName="active">
//           Blog
//         </Link>
//       </li>
//     </ul>
//   </nav>
// )

const Navigation = () => (
  <nav className='m-nav'>
    <Link to="/" className='m-nav__logo'>Jonas Teetaert</Link>
    <ul className='m-nav__list'>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <button className='a-cta'>Fun Mode</button>
      </li>
    </ul>
  </nav>
)


export default Navigation
