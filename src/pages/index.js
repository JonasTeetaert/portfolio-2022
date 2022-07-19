import * as React from 'react'
import Layout from '../components/layout'

// class RootIndex extends React.Component {
//   render() {
//     const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
//     const [author] = get(this, 'props.data.allContentfulPerson.nodes')

//     return (
//       <Layout location={this.props.location}>
//         <Hero
//           image={author.heroImage.gatsbyImageData}
//           title={author.name}
//           content={author.shortBio}
//         />
//         <ArticlePreview posts={posts} />
//       </Layout>
//     )
//   }
// }

const RootIndex = () => {

  return (
    <Layout pageTitle="Home">
      TEST
    </Layout>
  )
}

export default RootIndex

