import React from 'react'
import Header from '../components/Header_Footer/Header'
import Footer from '../components/Header_Footer/Footer'


export default function Layout(props) {
  return (
    <div>
      <Header user={props.user}/>
        {props.children}
      <Footer/>
    </div>
  )
}
