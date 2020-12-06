import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    return(
        <Layout>
            <SEO title = "Contact" />
            <h1>Contact</h1>
            <p>Email: sachin@gmail.com <br></br>
                Phone: 480-987-6543
            </p>
            <Link to = "/">Go Home</Link>
        </Layout>
    )
}

export default Contact