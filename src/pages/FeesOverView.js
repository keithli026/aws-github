import React from 'react'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import LocalizedPath from "../components/LocalizedPath"
import medicareLogo from '../assets/images/medicare.svg'
import NDISLogo from '../assets/images/ndis.svg'

const FeesOverView = () => {
  const { t } = useTranslation(['common']);
  return (
    <>
      <Container className='fees'>
        <h1>{t('common:header.fees.title')}</h1>
        <div className='card_wrapper'>
          <div className="card" style={{ border: "none", padding: "0" }}>
            <Link to={LocalizedPath({ path: `/fees/medicare` })}>
              <img src={medicareLogo} alt={t('common:header.fees.medicare')} />
              {/* <div className="type">{t('common:header.fees.medicare')}</div> */}
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/private-health-insurance` })}>
              <div className="type">{t('common:header.fees.private_health_insurance')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/motor-vehicle-accident` })}>
              <div className="type">{t('common:header.fees.motor_vehicle_accident')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/department-of-veterans-affairs` })}>
              <div className="type">{t('common:header.fees.department_of_veterans_affairs')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/workers-compensation` })}>
              <div className="type">{t('common:header.fees.workers_compensation')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/home-care-package` })}>
              <div className="type">{t('common:header.fees.home_care_package')}</div>
            </Link>
          </div>
          <div className="card" style={{ border: "none", padding: "0" }}>
            <Link to={LocalizedPath({ path: `/fees/ndis` })}>
              <img src={NDISLogo} alt={t('common:header.fees.ndis')} />
              {/* <div className="type">{t('common:header.fees.ndis')}</div> */}
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
export default FeesOverView