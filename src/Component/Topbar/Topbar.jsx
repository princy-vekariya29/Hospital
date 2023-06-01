import React from 'react'
import Socialicon from '../Socialicon/Socialicon'

function Topbar() {
  return (
    <div>
       <div id="topbar" class="d-flex align-items-center fixed-top">
      <div class="container d-flex justify-content-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope"></i> <a href="mailto:contact@example.com">cityhospital@example.com</a>
          <i class="bi bi-phone"></i> +91 9988776655
        </div>
       <Socialicon/>
      </div>
    </div>
    </div>
  )
}

export default Topbar
