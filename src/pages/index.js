import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> Welcome!</h1>
    <h2> My name is Sachin and this is my blog! <br></br> I'm an ECE Student who is an avid Sports fan. <br></br>Hope you enjoy my blog!</h2>
    <p>Have any Questions? <Link to = "/contact">Click Here!</Link></p>
  </Layout>
)

export default IndexPage
