import React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import Footer from '../components/Footer'

function ErrorPage() {
  return (
    <div className="flex flex-col min-h-screen">
        <AppBarComponent/>
        404 Error Page not Found!!!
        <Footer/>
    </div>
  )
}

export default ErrorPage