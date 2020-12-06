/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({element}) => {
    return (
        <Auth0Provider
        domain= "dev-8ennyzey.us.auth0.com"
        clientId= "d0wI2qRgtAd0yEInMwTvU4HH5HEwlurn"
        redirectUri= "http://localhost:8000/blog"
        >
            {element}
        </Auth0Provider>
    )
}
