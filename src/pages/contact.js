import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'



const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>LinkedIn: <Link to="https://www.linkedin.com/in/shanica-denis-918553a6/" target = "_blank">https://www.linkedin.com/in/shanica-denis-918553a6/</Link></p>
        </Layout>
    )
}



export default ContactPage