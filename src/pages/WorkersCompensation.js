import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath } from '../utils/getLanguage';
import Container from 'react-bootstrap/Container';

const WorkersCompensation = () => {
  const { t } = useTranslation(['common', 'workers-compensation']);
  const [workersData, setWorkersData] = useState([]);
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
    const fetchFeesData = async () => {
      try {
        const response = await fetch(`/locales/${language}/workers-compensation.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setWorkersData(data.initial_consultation_requirements.requirements || []);

      } catch (error) {
        console.error("Error fetching workers compensation data:", error);
      }
    };

    fetchFeesData();
  }, [location.pathname]);

  return (
    <Container>
      <h1>{t('common:header.fees.workers_compensation')}</h1>
      <p>{t('workers-compensation:description')}</p>
      <ul>
        {workersData.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
    </Container>
  );
};

export default WorkersCompensation;