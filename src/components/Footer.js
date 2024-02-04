import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
           
    <footer className="footer">
      <section>
             <div className="footer-social-icon">
              <a href="https://linkedin.com/in/anshhvarma" target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ANSHHVARMA" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/anshhvarma/" target='_blank'><img src={navIcon3} alt="Icon" /></a>
              <a href="https://twitter.com/AnshhVarma" target="_blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
           
            <p>© ANSH 2024. All Rights Reserved</p>
      </section>
    </footer>
  )
}
