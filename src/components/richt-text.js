import React from 'react'
import PropTypes from 'prop-types'
import slugify from '@sindresorhus/slugify'

import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const createJumpLink = (children) => {
  return <a href={`#${slugify(children[0])}`}>{children}</a>
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b>{text}</b>,
    [MARKS.ITALIC]: (text) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noreferrer">
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{createJumpLink(children)}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => <h3>{createJumpLink(children)}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{createJumpLink(children)}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{createJumpLink(children)}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{createJumpLink(children)}</h6>,

    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,

    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote>
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target

      return <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
    },
  },
}

const ContentfulRichText = ({ richText }) => {
  return (
    <div className="t-page__rich-text">{renderRichText(richText, options)}</div>
  )
}

ContentfulRichText.propTypes = {
  /** Contentful rich text */
  richText: PropTypes.any.isRequired,
}

export default ContentfulRichText
