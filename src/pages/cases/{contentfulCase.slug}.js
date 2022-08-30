import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import ContentfulRichText from '../../components/richt-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Case = ({ data }) => {
  const node = data.contentfulCase
  const hero = getImage(node.heroImage)
  const edges = data.allContentfulCase.edges
  let next = null
  edges.forEach((edge, i) => {
    console.log(node.id, edge.node.id)
    if (node.id === edge.node.id) {
      next = edge.next
    }
  })

  return (
    <Layout classes="t-page--case">
      <div className="t-page__cta">
        <a
          className="a-cta"
          href={node.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      </div>
      <h1 className="t-page__title">{node.title}</h1>
      <p className="t-page__year">{node.year}</p>
      <ul className="a-list t-page__list">
        {node.tags.map((i, n) => (
          <li key={n}>{i}</li>
        ))}
      </ul>
      <GatsbyImage image={hero} alt={node.heroImage.description} />
      <ContentfulRichText richText={node.content} />
      {next != null ? (
        <div className="t-page__pagination">
          <Link to={`/cases/${next.slug}`} className="t-page__cta-next">
            <span>Next Project</span>
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 43.51 29.52"
              className="t-page__cta-arrow"
            >
              <path d="M21.77,14.69v.06s-.01,.06-.03,.09c.02-.05,.03-.1,.03-.15Z" />
              <path d="M43.51,14.76s-.01,.1-.03,.15c.01,0,.01,.01-.01,.03,0,.03-.02,.06-.04,.09-.01,.03-.03,.06-.07,.08,0,.02-.01,.03-.03,.03-.03,.03-.06,.05-.09,.06-.02,.02-.04,.03-.07,.03-.01,.01-.02,.02-.03,.02-.14,.03-13.88,3.54-13.88,13.77,0,.27-.22,.5-.5,.5s-.5-.23-.5-.5c0-7.91,7.47-12.04,11.74-13.76H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H40c-4.27-1.72-11.74-5.85-11.74-13.76,0-.27,.22-.5,.5-.5s.5,.23,.5,.5c0,10.23,13.74,13.74,13.88,13.77,.01,0,.02,0,.03,.02,.03,0,.05,.01,.07,.03,.03,.01,.06,.03,.09,.06,.01,0,.03,.02,.03,.03,.04,.03,.06,.06,.07,.09,.03,.03,.04,.05,.04,.08,.01,0,.02,.02,.01,.03,.02,.05,.03,.1,.03,.15Z" />
              <path d="M21.77,14.78v.06s-.01-.1-.03-.15c.02,.03,.03,.06,.03,.09Z" />
            </svg>
          </Link>
          <div className="h1 t-page__title">{next.title}</div>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulCase(id: { eq: $id }) {
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData
            description
            __typename
          }
        }
      }
      url
      year
      title
      tags
      id
      heroImage {
        description
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    allContentfulCase(sort: { fields: createdAt, order: DESC }) {
      edges {
        next {
          id
          title
          slug
        }
        node {
          id
        }
      }
    }
  }
`

export default Case
