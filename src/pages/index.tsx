import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../component/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function IndexPage() {
  return (
    <Layout pageTitle="Home Page">
      <Link to="/about">About</Link>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}
