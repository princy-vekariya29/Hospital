import React from 'react'
import{BsFacebook,BsTwitter,BsLinkedin,BsInstagram} from 'react-icons/bs'

function Socialicon() {
  return (
       <div class="d-none d-lg-flex social-links align-items-center">
          <a href="#" class="twitter"><BsFacebook/></a>
          <a href="#" class="facebook"><BsTwitter/></a>
          <a href="#" class="linkedin"><BsInstagram/></a>
          <a href="#" class="instagram"><BsLinkedin/></a>
        </div>
    
  )
}

export default Socialicon
