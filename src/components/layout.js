import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className= {layoutStyles.content}>
                <Header />
                {props.children}
                {/* Info from each page between layout tabs gets placed here */}
            </div>
            <Footer /> 
        </div>
    )
}
//this html set up is a standard set up for a 'sticky footer'
export default Layout