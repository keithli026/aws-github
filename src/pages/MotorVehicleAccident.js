import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLanguageFromPath } from '../utils/getLanguage';

const MotorVehicleAccident = () => {
  const { t } = useTranslation(['common', 'motor-vehicle-accident']);
  const [accidentData, setAccidentData] = useState([]);
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
    const fetchFeesData = async () => {
      try {
        const response = await fetch(`/locales/${language}/motor-vehicle-accident.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
  
        setAccidentData(data.initial_consultation_requirements.requirements || []);
      } catch (error) {
        console.error("Error fetching motor vehicle accident data:", error);
      }
    };

    fetchFeesData();

  }, [language]);
  return (
    // <div>MotorVehicleAccident</div>
    <Container>
      <div className="section">
        <h1>{t('common:header.fees.motor_vehicle_accident')}</h1>
        <p>{t('motor-vehicle-accident:description')}</p>
        <h2>{t('motor-vehicle-accident:initial_consultation_requirements.title')}</h2>
        <ul>
          {accidentData.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default MotorVehicleAccident