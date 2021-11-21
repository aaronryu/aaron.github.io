import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
