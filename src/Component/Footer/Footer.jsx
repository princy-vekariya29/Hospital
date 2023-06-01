import React from 'react'
import{BsFacebook,BsTwitter,BsInstagram,BsSkype,BsLinkedin} from 'react-icons/bs'
function Footer() {
  return (
    <footer id="footer">
    <div class="container d-md-flex py-4">
      <div class="me-md-auto text-center text-md-start">
        <div>
          <h4>Address</h4>
          <p>
            F-505, <br/>
            Inovative Plazza<br/>
            New Delhi, India<br/><br/>
            <strong>Phone:</strong> +91 9988776655<br/>
            <strong>Email:</strong> cityhospital@example.com<br/>
          </p>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><BsFacebook/></a>
        <a href="#" class="facebook"><BsTwitter/></a>
        <a href="#" class="instagram"><BsInstagram/></a>
        <a href="#" class="google-plus"><BsSkype/></a>
        <a href="#" class="linkedin"><BsLinkedin/></a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
