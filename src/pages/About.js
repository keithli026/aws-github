import React from 'react';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation(['common', 'about']);
  return (
    <>
      <Container>
        <Breadcrumb />
        <h1>{t('common:header.about')}</h1>
        <p>{t('about:paragraph1')}</p>
        <p style={{marginBottom: "80px"}}>{t('about:paragraph2')}</p>
      </Container>
      <Outlet />
    </>
  );
}

export default About;
