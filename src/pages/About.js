import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from "../GlobalStyle";
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation(['common','about']);
  return (
    <>
      <Container>
        <Breadcrumb />
        <h1>{t('common:header.About')}</h1>
        <p>{t('about:about_summary')}</p> {/* From about namespace */}
      </Container>
      <Outlet />
    </>
  );
}

export default About;
