import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"

export default function AboutPage() {
  return (
    <Layout pageTitle="About Me">
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}
