import Link from 'next/link'
import Head from 'next/head'
import "../app/globals.css"
import TopNavigation from "./TopNav"
import Footer from "./Footer"


export const Layout = (props) => {
  return (
    <>
    <TopNavigation />
      {props.children}
      <Footer />
    </>
  )
}