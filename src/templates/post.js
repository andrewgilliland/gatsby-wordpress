import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Post extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title={data.wordpressPost.title} />
        <h1>{data.wordpressPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
    }
  }
`
