import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>Nothing to See here...  </p>
 <Link to="/">Return to homepage</Link>
  </Layout>
)

export default NotFoundPage
