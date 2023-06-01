import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'

function Home() {
  return (
    <div>
        <Topbar />
        <Header />
        <main>
          <Banner />
        </main>
    </div>
  )
}

export default Home
