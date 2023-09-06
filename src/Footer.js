import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from "react-router-dom";

function Footer() {
    

return (<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Company</h1>
    <ul class="nav__ul">
        <li>
          <a href="https://www.hotstar.com/about-us/in">About us</a>
        </li>

        <li>
          <a href="https://careers.hotstar.com/">Careers</a>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">View Website in</h1>
    <ul class="nav__ul">
        <li>
        <Link to='/home'><i class="fas fa-check icon"></i>English</Link>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">Need Help?</h1>
    <ul class="nav__ul">
        <li>
          <a href="https://help.hotstar.com/in/en/support/home">Visit Help Center</a>
        </li>

        <li>
          <a href="https://help.hotstar.com/in/en/support/tickets/feedback">Share Feedback</a>
        </li>
    </ul>
  </div>

  <div class="footer__addr">
    <h1 class="footer__logo">Connect with Us</h1>
    <a href="https://www.facebook.com/DisneyPlusHotstar"><i class="fa-brands fa-facebook-f facebook-icon"></i></a><a href="https://twitter.com/DisneyPlusHS"><i class="fa-brands fa-twitter icon"></i></a>
  </div>
  
  <div class="legal">
  <ul class="nav__ul">
        <li>
        <p>&copy; 2023 STAR. All Rights Reserved.</p>
        </li>
        <li>
        <p>
            <a href="https://www.hotstar.com/tnc/in">Terms of Use</a>
            <a href="https://www.hotstar.com/privacy-policy/in">Privacy Policy</a>
            <a href="https://help.hotstar.com/in/en/support/home">FAQ</a>
        </p>
        </li>
    </ul>
  </div>
</footer>)

};

export default Footer;