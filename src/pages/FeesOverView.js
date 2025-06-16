import React from 'react'
import Container from "react-bootstrap/Container"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import { useTranslation, Trans } from 'react-i18next'
import LocalizedPath from "../components/LocalizedPath"

const FeesOverView = () => {
  const { t } = useTranslation(['common', 'fees']);
  return (
    <>
      <Container>
        <h1>{t('common:header.fees.title')}</h1>
        <div className='card_wrapper'>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/medicare` })}>
              <div className="type">{t('fees:type.medicare')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/private-health-insurance` })}>
              <div className="type">{t('fees:type.private_health_insurance')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/motor-vehicle-accident` })}>
              <div className="type">{t('fees:type.motor_vehicle_accident')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/department-of-veterans-affairs` })}>
              <div className="type">{t('fees:type.department_of_veterans_affairs')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/workers-compensation` })}>
              <div className="type">{t('fees:type.workers_compensation')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/home-care-package` })}>
              <div className="type">{t('fees:type.home_care_package')}</div>
            </Link>
          </div>
          <div className="card">
            <Link to={LocalizedPath({ path: `/fees/ndis` })}>
              <div className="type">{t('fees:type.ndis')}</div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
export default FeesOverView