import React from 'react';
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

import mailIcon from "../assets/images/Mail.png"
import Container from "react-bootstrap/Container"
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from 'react-i18next';
import { phone, email } from '../components/ContactButtons';

const Contact = () => {
  const { t, i18n } = useTranslation(['common']);
  return (
    <>
      <Container id="contact">
        <Breadcrumb />
        <h1>{t('common:header.contact')}</h1>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="title"><a href={`mailto: ${email}`}>{email}</a></div>
        </div>
        <div className="tel">
          <FontAwesomeIcon icon={faPhone} />
          <div className="title"><a href={`tel:${phone}`}>{phone}</a></div>
        </div>
        <div className="opening">
          <FontAwesomeIcon icon={faClock} />
          <div className="title">{t('common:footer.mon2fri_arrangement')}<br />{t('common:footer.sun_holiday_arrangement')}</div>
        </div>
      </Container>
      <Outlet />
    </>
  );
}

export default Contact;

