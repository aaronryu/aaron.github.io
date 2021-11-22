import * as React from 'react'
import Layout from "../component/layout"
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

// 이런식으로 graphql 을 정의해놓으면, Props 에서 data 를 통해 모든 쿼리 결과에 접근 가능
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`