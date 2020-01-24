import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Page extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title={data.wordpressPage.title} />
        <h1>{data.wordpressPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      slug
      content
    }
  }
`
