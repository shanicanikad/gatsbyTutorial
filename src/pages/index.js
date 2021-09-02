import React from "react"
import { Link } from 'gatsby'
// import Footer from '../components/footer'
// import Header from '../components/header'
import Layout from '../components/layout'
import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title= "Home" />
      {/* <Header /> */}
        <h1>Hello,</h1>
        <h2>I'm Shanica, a full-stack developer!</h2>
      {/* <Footer /> */}
    </Layout>
  )
}


export default IndexPage