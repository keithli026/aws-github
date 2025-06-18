import { useState, useLayoutEffect, useRef, useReducer, useEffect } from "react"
import { Link } from "react-router-dom"
import { lg } from "../../GlobalStyle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { telButton } from '../ContactButtons';
import "../../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import logoIcon from "../../assets/images/fitzio_logo_trans.png"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import LanguageSwitcher from "../LanguageSwitcher"
import LocalizedPath from "../LocalizedPath"

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
    isFeesOn: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // console.log(i18n.resolvedLanguage);
    refMenu.current.style.height = `${window.innerHeight - refHeader.current.clientHeight}px`;
    // console.log(window.innerHeight, refHeader.current.clientHeight);
    // console.log("pathname: " + location.pathname + "; search: " + location.search);
    // console.log("after setShow: ",show);
    // console.log(initialState.isServicesOn, state.isServicesOn, initialState.isFeesOn, state.isFeesOn);
  }, []);


  function reducer(state, action) {
    switch (action.type) {
      case "isServicesOn":
        return { ...state, isServicesOn: !state.isServicesOn, isFeesOn: false };
      case "isFeesOn":
        return { ...state, isFeesOn: !state.isFeesOn, isServicesOn: false };
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

  const { t } = useTranslation(['common']);

  return (
    <>
      <div id="header">
        <Navbar id="navTop" ref={refHeader}>
          <Container fluid="lg">
            <div className="logo">
              <Link to={LocalizedPath({ path: "/" })} onClick={closeMenu}>
                <img src={logoIcon} alt={t('site_logo')} />
              </Link>
            </div>
            <div className="wrapper">
              <ul id="level-0">
                <li>
                  <Link to={LocalizedPath({ path: "/about" })}>{t('header.about')}</Link>
                </li>
                <li>
                  <Link to={LocalizedPath({ path: "/meet-the-team" })}>{t('header.meet_the_team')}</Link>
                </li>
                <li className="expandable">
                  <Link to={LocalizedPath({ path: "/services" })}>{t('header.services.title')}</Link>
                  <ul id="level-1">
                    <li><Link to={LocalizedPath({ path: "/services/manual-therapy" })}>{t('header.services.manual_therapy')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/services/acupuncture" })}>{t('header.services.acupuncture')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/services/exercise-rehabilitation" })}>{t('header.services.exercise_rehabilitation')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/services/massage-therapy" })}>{t('header.services.massage_therapy')}</Link></li>
                    {/* <li><Link to={LocalizedPath({ path: "/services/shockwave-therapy" })}>{t('header.services.shockwave_therapy')}</Link></li> */}
                    {/* <li><Link to={LocalizedPath({ path: "/services/electrotherapy" })}>{t('header.services.electrotherapy')}</Link></li> */}
                    <li><Link to={LocalizedPath({ path: "/services/cupping-therapy" })}>{t('header.services.cupping_therapy')}</Link></li>
                  </ul>
                </li>
                <li className="expandable">
                  <Link to={LocalizedPath({ path: "/fees" })}>{t('header.fees.title')}</Link>
                  <ul id="level-1">
                    <li><Link to={LocalizedPath({ path: "/fees/medicare" })}>{t('header.fees.medicare')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/private-health-insurance" })}>{t('header.fees.private_health_insurance')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/motor-vehicle-accident" })}>{t('header.fees.motor_vehicle_accident')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/department-of-veterans-affairs" })}>{t('header.fees.department_of_veterans_affairs')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/workers-compensation" })}>{t('header.fees.workers_compensation')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/home-care-package" })}>{t('header.fees.home_care_package')}</Link></li>
                    <li><Link to={LocalizedPath({ path: "/fees/ndis" })}>{t('header.fees.ndis')}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to={LocalizedPath({ path: "/conditions" })}>{t('header.conditions')}</Link>
                </li>
                <li>
                  <Link to={LocalizedPath({ path: "/contact" })}>{t('header.contact')}</Link>
                </li>
                {/* <li>
                  <Link to={LocalizedPath({ path: "/book-online" })} className="button">{t('header.book_online')}</Link>
                </li> */}
              </ul>
            </div>
            <div className="language-switcher">
              <LanguageSwitcher />
            </div>
            <div className="menuBtn" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={show ? faTimes : faBars} />
            </div>

            <div className="telphone">
              {telButton()}
            </div>
          </Container>
        </Navbar>
        <Navbar id="navMain" style={{ display: show ? "block" : "none" }}>
          <ul id="mlevel-0" ref={refMenu}>
            <li>
              <Link to={LocalizedPath({ path: "/about" })}>{t('header.about')}</Link>
            </li>
            <li>
              <Link to={LocalizedPath({ path: "/meet-the-team" })} onClick={closeMenu}>{t('header.meet_the_team')}</Link>
            </li>
            <li >
              <Link to={LocalizedPath({ path: "/services" })} style={{ paddingBottom: state.isServicesOn ? "0.5rem" : "0" }} onClick={closeMenu}>{t('header.services.title')}</Link>
              <div className="dropdownBtn" onClick={() => dispatch({ type: "isServicesOn" })} aria-expanded={state.isServicesOn ? "true" : "false"}>
                {state.isServicesOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <ul id="mlevel-1" className={state.isServicesOn ? "expanded" : ""}>
                <li><Link to={LocalizedPath({ path: "/services/manual-therapy" })} onClick={closeMenu}>{t('header.services.manual_therapy')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/services/acupuncture" })} onClick={closeMenu}>{t('header.services.acupuncture')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/services/exercise-rehabilitation" })} onClick={closeMenu}>{t('header.services.exercise_rehabilitation')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/services/massage-therapy" })} onClick={closeMenu}>{t('header.services.massage_therapy')}</Link></li>
                {/* <li><Link to={LocalizedPath({ path: "/services/shockwave-therapy" })} onClick={closeMenu}>{t('header.services.shockwave_therapy')}</Link></li> */}
                {/* <li><Link to={LocalizedPath({ path: "/services/electrotherapy" })} onClick={closeMenu}>{t('header.services.electrotherapy')}</Link></li> */}
                <li><Link to={LocalizedPath({ path: "/services/cupping-therapy" })} onClick={closeMenu}>{t('header.services.cupping_therapy')}</Link></li>
              </ul>
            </li>
            <li>
              <Link to={LocalizedPath({ path: "/fees" })} style={{ paddingBottom: state.isFeesOn ? "0.5rem" : "0" }} onClick={closeMenu}>{t('header.fees.title')}</Link>
              <div className="dropdownBtn" onClick={() => dispatch({ type: "isFeesOn" })} aria-expanded={state.isFeesOn ? "true" : "false"}>
                {state.isFeesOn ? (<div className="up"></div>) : (<div className="down"></div>)}
              </div>
              <ul id="mlevel-1" className={state.isFeesOn ? "expanded" : ""}>
                <li><Link to={LocalizedPath({ path: "/fees/medicare" })} onClick={closeMenu}>{t('header.fees.medicare')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/private-health-insurance" })} onClick={closeMenu}>{t('header.fees.private_health_insurance')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/motor-vehicle-accident" })} onClick={closeMenu}>{t('header.fees.motor_vehicle_accident')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/department-of-veterans-affairs" })} onClick={closeMenu}>{t('header.fees.department_of_veterans_affairs')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/workers-compensation" })} onClick={closeMenu}>{t('header.fees.workers_compensation')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/home-care-package" })} onClick={closeMenu}>{t('header.fees.home_care_package')}</Link></li>
                <li><Link to={LocalizedPath({ path: "/fees/ndis" })} onClick={closeMenu}>{t('header.fees.ndis')}</Link></li>
              </ul>
            </li>
            <li>
              <Link to={LocalizedPath({ path: "/conditions" })} onClick={closeMenu}>{t('header.conditions')}</Link>
            </li>
            <li>
              <Link to={LocalizedPath({ path: "/contact" })} onClick={closeMenu}>{t('header.contact')}</Link>
            </li>
            {/* <li>
              <Link to={LocalizedPath({ path: "/book-online" })} onClick={closeMenu}>{t('header.book_online')}</Link>
            </li> */}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
}

export default Header;