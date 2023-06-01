import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Header2 from '../../Component/Header/Header2'
import Ent from '../../Component/Ent/Ent'
import Footer from '../../Component/Footer/Footer'

function Department() {
  return (
   <div>
        <div className="main-header">
            <Topbar />
            <Header2 />
        </div>
        <Ent />
        <Footer />
   </div>
  )
}

export default Department
