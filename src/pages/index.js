import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import ContentfulRichText from '../components/richt-text'
import SideNav from '../components/sideNav'

const IndexPage = ({ data }) => {
  return (
    <Layout nav={<SideNav data={data} />}>
      <ul id="cases" className="p-home__list-primary">
        {data.allContentfulCase.nodes.map((node, i) => (
          <li key={i}>
            <Link to={`/cases/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
      <div className="t-section" id="about">
        <div className="p-home__description">
          <ContentfulRichText richText={data.contentfulProfile.description} />
        </div>
      </div>
      <div className="t-section">
        <h2 className="p-home__h2">Expertise</h2>
        <ul className="a-list p-home__list-secondary">
          {data.contentfulProfile.expertise.map((node, i) => (
            <li key={i}>{node}</li>
          ))}
        </ul>
      </div>
      <div className="t-section">
        <h2 className="p-home__h2">Libraries & Programs </h2>
        <ul className="a-list p-home__list-secondary">
          {data.contentfulProfile.libraries.map((node, i) => (
            <li key={i}>{node}</li>
          ))}
        </ul>
      </div>
      <div className="t-section" id="contact">
        <h2 className="p-home__h2">Question? Project?</h2>
        <div className="p-home__cta">
          <a
            className="a-cta a-cta--large"
            href={`mailto:${data.contentfulProfile.email}`}
          >
            {data.contentfulProfile.email}
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulProfile {
      description {
        raw
      }
      email
      expertise
      github
      instagram
      jobTitle
      libraries
      linkedin
    }
    allContentfulCase(sort: { fields: createdAt, order: DESC }) {
      nodes {
        title
        slug
      }
    }
  }
`

export default IndexPage
