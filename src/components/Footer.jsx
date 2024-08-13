import '../scss/footer.scss';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__wrapper">
        <div className="footer__socials">
            <h3 className="footer__socials__header">Socials</h3>
            <div className="footer__socials__links">
                <a href='https://www.instagram.com/HocusPocusSkinMethod/' target='_blank' className="footer__socials__links__link" data-name="Instagram">
                    <FaInstagram/>
                    <p className="footer__socials__links__link__name">Instagram</p>
                </a>
                <a href='https://www.facebook.com/hocuspocusskinmethod/' target='_blank' className="footer__socials__links__link" data-name="Facebook">
                    <FaFacebook/>
                    <p className="footer__socials__links__link__name">Facebook</p>
                </a>
                <a href='#' className="footer__socials__links__link" data-name="X">
                    <FaXTwitter/>
                    <p className="footer__socials__links__link__name">X</p>
                </a>
            </div>
        </div>
        <div className="footer__contact">
            <h3 className="footer__contact__header">Contact Me</h3>
            <a className="footer__contact__email" href="mailto:hocuspocusskinmethod@gmail.com">hocuspocusskinmethod@gmail.com</a>
            {/* <p className="footer__contact__phone">602-123-4567</p> */}
        </div>
        <p className="footer__rights">2024 © Hocus Pocus Skin Method · All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer