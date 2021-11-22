import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

// 이런식으로 graphql 을 정의해놓으면, Props 에서 data 를 통해 모든 쿼리 결과에 접근 가능
export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`