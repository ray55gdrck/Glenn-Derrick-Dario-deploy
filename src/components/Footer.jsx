import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className="footer__categories">
        <li><Link to="/posts/categories/:1Star">1 Star</Link></li>
        <li><Link to="/posts/categories/:2Star">2 Star</Link></li>
        <li><Link to="/posts/categories/:3Star">3 Star</Link></li>
        <li><Link to="/posts/categories/:4Star">4 Star</Link></li>
        <li><Link to="/posts/categories/:5Star">5 Star</Link></li>
        
       
       
   
    </ul>
     <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
     </div>


   </footer>
  )
}

export default Footer
