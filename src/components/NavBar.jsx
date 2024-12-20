import "../scss/navbar.scss";
import Logo from "../assets/logo.jpeg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { throttle } from "lodash";
function NavBar() {
  const svg = useRef();
  const nav = useRef();
  const mobileMenu = useRef();
  const hamburgerButton = useRef();

  const handleClick = () => {
    svg.current.classList.toggle("active");
    mobileMenu.current.classList.toggle("visible");
  };

  let scrollTop = document.documentElement.scrollTop || 0;
  const onScroll = () => {
    var st = window.scrollY || document.documentElement.scrollTop;
    if (st > scrollTop) {
      nav.current.classList.add("slide-up");
      nav.current.classList.remove("slide-down");
    } else if (st < scrollTop) {
      nav.current.classList.remove("slide-up");
      nav.current.classList.add("slide-down");
    }
    scrollTop = st <= 0 ? 0 : st;
  };
  useEffect(() => {
    window.addEventListener("scroll", throttle(onScroll, 50));
    Array.from(mobileMenu.current.children[0].querySelectorAll("li")).forEach(list=>{
      list.addEventListener("click", () => {
            svg.current.classList.remove("active");
            mobileMenu.current.classList.remove("visible");
      });
    });
    () => window.removeEventListener("scroll", throttle(onScroll, 50));
  });

  useEffect(()=>{
      svg.current.classList.remove("active");
      mobileMenu.current.classList.remove("visible");
  },[]);

  return (
    <>
      <nav className="nav" ref={nav}>
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/" className="nav__menu__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav__menu__link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="nav__menu__link">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/memberships" className="nav__menu__link">
              Memberships
            </Link>
          </li>
          <li>
            <Link to="/medical" className="nav__menu__link">
              Medical Info
            </Link>
          </li>
        </ul>
        <button
          className="ham-button"
          ref={hamburgerButton}
          onClick={() => handleClick()}
        >
          <svg
            className="ham hamRotate ham4"
            viewBox="0 0 100 100"
            width="80"
            ref={svg}
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </button>
        <div className="mobile-menu" ref={mobileMenu}>
          <ul className="mobile-menu__list">
            <li className="mobile-menu__list__item">
              <Link to="/" className="mobile-menu__list__item__link">
                <FaChevronRight />
                <p>Home</p>
              </Link>
            </li>
            <li className="mobile-menu__list__item">
              <Link to="/about" className="mobile-menu__list__item__link">
                <FaChevronRight />
                <p>About Us</p>
              </Link>
            </li>
            <li className="mobile-menu__list__item">
              <Link to="/faq" className="mobile-menu__list__item__link">
                <FaChevronRight />
                <p>FAQ</p>
              </Link>
            </li>
            <li className="mobile-menu__list__item">
              <Link to="/memberships" className="mobile-menu__list__item__link">
                <FaChevronRight />
                <p>Memberships</p>
              </Link>
            </li>
            <li className="mobile-menu__list__item">
              <Link to="/medical" className="mobile-menu__list__item__link">
                <FaChevronRight />
                <p>Medical Info</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
