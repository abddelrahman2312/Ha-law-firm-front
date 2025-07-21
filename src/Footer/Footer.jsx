import React from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>HA Law Firm</h2>
        </div>
        <ul className="footer-links">
          <li>
            <a href="/">الرئيسية</a>
          </li>
          <li>
            <a href="#service">الخدمات</a>
          </li>
          <li>
            <a href="#contact">تواصل معنا</a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/hany.abdel.aziz.688521"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/hany-abdel-aziz-6b121435/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://api.whatsapp.com/send?phone=201025202531">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HA Law Firm. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
