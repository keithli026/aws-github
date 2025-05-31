import { useState, useLayoutEffect, useRef, useReducer, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { lg } from "../../GlobalStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons'
import { phone } from "../WhatsappButton"
import "../../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import logoIcon from "../../assets/images/logo_white.png"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import LanguageSwitcher from "../LanguageSwitcher"

const lngs = {
  en: { nativeName: 'English', symbol: 'EN' },
  tc: { nativeName: '繁體中文', symbol: '繁' }
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    }
  }, []);
  return size;
}

const Header = () => {
  const [show, setShow] = useState(false);
  const closeMenu = () => {
    setShow(false);
  }

  const refHeader = useRef(null);
  const refMenu = useRef(null);
  const initialState = {
    isServicesOn: false,
    isTestingOn: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // console.log(i18n.resolvedLanguage);
    refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    // console.log(window.innerHeight, refHeader.current.clientHeight);
    // console.log("pathname: " + location.pathname + "; search: " + location.search);
    // console.log("after setShow: ",show);
    // console.log(initialState.isServicesOn, state.isServicesOn, initialState.isTestingOn, state.isTestingOn);
  }, []);


  function reducer(state, action) {
    switch (action.type) {
      case "isServicesOn":
        return { ...state, isServicesOn: !state.isServicesOn, isTestingOn: false };
      case "isTestingOn":
        return { ...state, isTestingOn: !state.isTestingOn, isServicesOn: false };
      default:
        return initialState;
    }
  }

  const [width, height] = useWindowSize();
  if (show) {
    refMenu.current.style.height = `${height - refHeader.current.clientHeight}px`;
    if (width >= lg) {
      setShow(false);
      document.body.style.overflowY = null;
    } else {
      document.body.style.overflowY = "hidden";
    }
  } else {
    document.body.style.overflowY = null;
  }

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  console.log("lang: ", currentLanguage);

  // Function to prepend the language to the path
  const getLocalizedPath = (path) => {
    if (path.startsWith(`/${currentLanguage}`) || path.startsWith('http') || path.startsWith('#')) {
      return path;
    }
    if (path === "/") {
      return `/${currentLanguage}`;
    }
    return `/${currentLanguage}${path}`;
  };

  return (
    <>
      <div id="header">
        <Navbar id="navTop" ref={refHeader}>
          <Container fluid="lg">
            <div className="logo">
              <Link to="/" onClick={closeMenu} title="home">
                <img src={logoIcon} alt={t('site logo')} />
                {/* <img alt="site logo" src={process.env.PUBLIC_URL + '/logo_white.png'} /> */}
              </Link>
            </div>
            <div className="wrapper">
              <ul id="level-0">
                {/* <li className="expandable">
                <Link to="/testing">Testing</Link>
                <ul id="level-1">
                  <li><Link to="/testing/testing-content-page">Testing Content page</Link></li>
                </ul>
              </li> */}
                <li>
                  <Link to={ getLocalizedPath("/about") }>{t('About')}</Link>
                </li>
                <li>
                  <Link to={ getLocalizedPath("/meet-our-team") }>{t('Meet Our Team')}</Link>
                </li>
                <li className="expandable">
                  <Link to={ getLocalizedPath("/services") }>{t('Services')}</Link>
                  <ul id="level-1">
                    <li><Link to={ getLocalizedPath("/services/manual-therapy") }>{t('Manual Therapy')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/acupuncture") }>{t('Acupuncture')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/exercise-rehabilitation") }>{t('Exercise Rehabilitation')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/massage-therapy") }>{t('Massage Therapy')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/shockwave-therapy") }>{t('Shockwave Therapy')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/electrotherapy") }>{t('Electrotherapy')}</Link></li>
                    <li><Link to={ getLocalizedPath("/services/cupping-therapy") }>{t('Cupping Therapy')}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to={ getLocalizedPath("/fees") }>{t('Fees')}</Link>
                </li>
                <li>
                  <Link to={ getLocalizedPath("/conditions") }>{t('Conditions')}</Link>
                </li>
                <li>
                  <Link to={ getLocalizedPath("/contact") }>{t('Contact')}</Link>
                </li>
                <li>
                  <Link to={ getLocalizedPath("/book-online") } className="button">{t('Book Online')}</Link>
                </li>
              </ul>
            </div>
            <div className="language-switcher">
            <LanguageSwitcher />
              {/* {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  {lngs[lng].symbol}
                </button>
              ))} */}
            </div>
            <div className="menuBtn" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={show ? faTimes : faBars} />
            </div>
            <div className="telphone">
              <a href={`tel:+${phone}`}><FontAwesomeIcon icon={faPhone} /></a>
            </div>
          </Container>
        </Navbar>
        <Navbar id="navMain" style={{ display: show ? "block" : "none" }}>
          <ul id="mlevel-0" ref={refMenu}>
            {/* <li>
              <Link to="/testing" style={{ paddingBottom: state.isTestingOn ? "0.5rem" : "0" }} onClick={closeMenu}>Testing</Link>
              <div className="dropdownBtn" onClick={() => dispatch({type: "isTestingOn"})} aria-expanded={state.isTestingOn ? "true" : "false"}>
                {state.isTestingOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
               <ul id="mlevel-1" className={state.isTestingOn ? "expanded": ""}>
                <li><Link to="/testing/testing-content-page" onClick={closeMenu}>Testing Content page</Link></li>
              </ul>
            </li> */}
            <li>
              <Link to={ getLocalizedPath("/about") } onClick={closeMenu}>{t('About')}</Link>
            </li>
            <li>
              <Link to={ getLocalizedPath("/meet-our-team") } onClick={closeMenu}>{t('Meet Our Team')}</Link>
            </li>
            <li >
              <Link to={ getLocalizedPath("/services") } style={{ paddingBottom: state.isServicesOn ? "0.5rem" : "0" }} onClick={closeMenu}>{t('Services')}</Link>
              <div className="dropdownBtn" onClick={() => dispatch({ type: "isServicesOn" })} aria-expanded={state.isServicesOn ? "true" : "false"}>
                {state.isServicesOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <ul id="mlevel-1" className={state.isServicesOn ? "expanded" : ""}>
                <li><Link to={ getLocalizedPath("/services/manual-therapy") } onClick={closeMenu}>{t('Manual Therapy')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/acupuncture") } onClick={closeMenu}>{t('Acupuncture')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/exercise-rehabilitation") } onClick={closeMenu}>{t('Exercise Rehabilitation')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/massage-therapy") } onClick={closeMenu}>{t('Massage Therapy')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/shockwave-therapy") } onClick={closeMenu}>{t('Shockwave Therapy')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/electrotherapy") } onClick={closeMenu}>{t('Electrotherapy')}</Link></li>
                <li><Link to={ getLocalizedPath("/services/cupping-therapy") } onClick={closeMenu}>{t('Cupping Therapy')}</Link></li>
              </ul>
            </li>
            <li>
              <Link to={ getLocalizedPath("/fees") } onClick={closeMenu}>{t('Fees')}</Link>
            </li>
            <li>
              <Link to={ getLocalizedPath("/conditions") } onClick={closeMenu}>{t('Conditions')}</Link>
            </li>
            <li>
              <Link to={ getLocalizedPath("/contact") } onClick={closeMenu}>{t('Contact')}</Link>
            </li>
            <li>
              <Link to={ getLocalizedPath("/book-online") } onClick={closeMenu}>{t('Book Online')}</Link>
            </li>
            <li>
              <LanguageSwitcher />
              {/* {Object.keys(lngs).map((lng) => (
                <button key={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                  {lngs[lng].symbol}
                </button>
              ))} */}
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
}

export default Header;