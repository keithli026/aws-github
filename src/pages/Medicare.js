import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath } from '../utils/getLanguage';

const Medicare = () => {
  const { t } = useTranslation(['common', 'medicare']);
  const [medicareData, setMedicareData] = useState([]);
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
    const fetchFeesData = async () => {
      try {
        const response = await fetch(`/locales/${language}/medicare.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setMedicareData(data.costs.details || []);
      } catch (error) {
        console.error("Error fetching medicare data:", error);
      }
    };

    fetchFeesData();

  }, [location.pathname]);

  return (
    <Container>
      <div class="section">
        <h1>{t('common:header.fees.medicare')}</h1>

        <h2>{t('medicare:chronic_disease_management.title')}</h2>
        <p>{t('medicare:chronic_disease_management.description')}</p>

        <h3>{t('medicare:how_to_obtain_referral.title')}</h3>
        <p>{t('medicare:how_to_obtain_referral.description')}</p>

        <h3>{t('medicare:after_receiving_referral.title')}</h3>
        <p>{t('medicare:after_receiving_referral.description')}</p>

        <h3>{t('medicare:costs.title')}</h3>
        <p>{t('medicare:costs.eligibility')}</p>
        <ul>
          {medicareData.map((detail, index) => (
            <li ket={index}>{detail}</li>
          ))}
        </ul>
        <p>{t('medicare:costs.note')}</p>
      </div>
    </Container>
  )
}

export default Medicare