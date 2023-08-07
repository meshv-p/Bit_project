import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import {logo} from '../../images/Images'


function Navbar(props) {

  /*---hamburger-menu event---*/
  const bar = document.querySelector('.navbar-toggler');
  const close = document.getElementById("close");
  const nav = document.getElementById("nav-nav");
  const handleClick = () => {
    nav.classList.add('active-nav');
  };
  const handleClose = () => {
    nav.classList.remove('active-nav');
  };
  if (bar) {
    bar.addEventListener('click', handleClick);
  }
  if (close) {
    close.addEventListener('click', handleClose);
  }
   /*---end-hamburger-menu event---*/
  const [navbar, setNavbar] = useState(false);
  const changeNavBg = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeNavBg);
  return (
    <nav className={navbar ? "navbar navbar-expand-lg shadow-sm p-2 fixed-top active-nav" : "navbar navbar-expand-lg shadow-sm p-2 fixed-top navBg"}  style={{ background: `${props.navBg}` }} >
      <div className="container-fluid px-0">

        {/* Logo and Name of Institute */}
        <Link className="navbar-brand" to="/">
          <img className="resize-logo" src={logo} alt='Birla Institute of Technology' />
          <span className="university-name hd-color fw-bold ps-2">Birla Institute of Technology</span>
        </Link>
        <button className="navbar-toggler border-0" type="button" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse ">
          <ul id="nav-nav" className="navbar-nav ms-auto">

            {/* Home  */}
            <li className="nav-item px-1   ">
              <Link className="nav-link hd-color fw-semibold active" aria-current="page" to="/">Home</Link>
            </li>
            {/* Research Dropdown List */}
            <li className="nav-item px-1 dropdown">
              <Link className="nav-link hd-color fw-semibold dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Research
              </Link>
              <ul className="dropdown-menu mt-4 py-3" aria-labelledby="dropdownMenuButton">
                <li><Link className="dropdown-item mb-2" to="/research_and_development">Research Departments</Link></li>
                <li><Link className="dropdown-item mb-2" to="/headTalk">Head Talk</Link></li>
                <li><Link className="dropdown-item" to="/approved_r&d">Approved Projects</Link></li>

              </ul>
            </li>

            {/* Resources Dropdown list */}
            <li className="nav-item px-1 dropdown">
              <Link className="nav-link hd-color fw-semibold dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
              </Link>
              <ul className="dropdown-menu mt-4 py-3">
                <li><Link className="dropdown-item mb-2" to="/sop">Standard Operating Procedures</Link></li>
                <li><Link className="dropdown-item " to="/forms&applications">Forms and Applications</Link></li>
                <li><Link className="dropdown-item " to="/useful_links">Useful Links</Link></li>
                <li><Link className="dropdown-item " to="/research_news">Research News</Link></li>
              </ul>
            </li>
             {/* Support Dropdown list */}
            <li className="nav-item px-1 dropdown">
              <Link className="nav-link hd-color fw-semibold dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Support
              </Link>
              <ul className="dropdown-menu mt-4 py-3">
                <li><Link className="dropdown-item mb-2" to="/funding_agencies">Funding Agencies</Link></li>
                <li><Link className="dropdown-item " to="/seed_money_policy">Seed Money Policy</Link></li>
                <li><Link className="dropdown-item " to="/research_promotion_scheme">Research Promotion Scheme</Link></li>
                <li><Link className="dropdown-item " to="/innovation_and_entrepreneurship">Innovation and Entrepreneurship</Link></li>
              </ul>
            </li>

            {/* Research Toolbox dropdown */}
            <li className="nav-item px-1 dropdown">
              <Link className="nav-link hd-color fw-semibold dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Research Toolbox
              </Link>
              <ul className="dropdown-menu mt-4 py-3">
                <li><Link className="dropdown-item mb-2" to="/Ipr">Intellectual Property Rights</Link></li>
                <li><Link className="dropdown-item " to="/cif">Central Instrumentation Facility</Link></li>
                <li><Link className="dropdown-item " to="/Mou">Memorandum of Understanding</Link></li>
              </ul>
            </li>
            {/* Contact Us */}
            <li className="nav-item px-1   ">
              <Link className="nav-link hd-color fw-semibold active" aria-current="page" to="/contact">Contact Us</Link>
            </li>
            <i id="close" className="fa-sharp fa-solid fa-circle-xmark d-none"></i>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
