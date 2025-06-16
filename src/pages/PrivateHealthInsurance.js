import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';
import Breadcrumb from '../components/Breadcrumb';
import Accordion from 'react-bootstrap/Accordion';
import { getLanguageFromPath } from '../utils/getLanguage';

const PrivateHealthInsurance = () => {
  const { t } = useTranslation(['common', 'private-health-insurance']);
  const [feesData, setFeesData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const language = getLanguageFromPath(location.pathname);
    // console.log("Current language:", language); 

    const fetchFeesData = async () => {
      try {
        const response = await fetch(`/locales/${language}/private-health-insurance.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFeesData(data);
      } catch (error) {
        console.error("Error fetching private health insurance data:", error);
      }
    };

    fetchFeesData();
  }, [location.pathname]); // Fetch data whenever lng or pathname changes

  if (!feesData) {
    return <div>Loading...</div>; // Loading state
  }

  const { home_visit_physiotherapy_consultation_fee, physiotherapy_program_and_package_fees, home_visit_massage_fee, faq } = feesData;

  return (
    <Container id="private-health-insurance">
      {/* <Breadcrumb /> */}
      <h1>{t('common:header.fees.private_health_insurance')}</h1>

      {/* Home Visit Physiotherapy Consultation Fee */}
      <h2>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.title')}</h2>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th></th>
              <th>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.headers.time')}</th>
              <th>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.headers.fee')}</th>
            </tr>
          </thead>
          <tbody>
            {home_visit_physiotherapy_consultation_fee.services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.duration}</td>
                <td>{service.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Physiotherapy Program and Package Fees */}
      <h2>{t('private-health-insurance:physiotherapy_program_and_package_fees.title')}</h2>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>{t('private-health-insurance:physiotherapy_program_and_package_fees.headers.package_program')}</th>
              <th>{t('private-health-insurance:physiotherapy_program_and_package_fees.headers.description')}</th>
              <th>{t('private-health-insurance:physiotherapy_program_and_package_fees.headers.time')}</th>
              <th>{t('private-health-insurance:physiotherapy_program_and_package_fees.headers.fee')}</th>
            </tr>
          </thead>
          <tbody>
            {physiotherapy_program_and_package_fees.packages.map((packageItem, index) => (
              <tr key={index}>
                <td>{packageItem.name}</td>
                <td>{packageItem.description}</td>
                <td>{packageItem.duration}</td>
                <td>
                  {packageItem.discounts ? packageItem.discounts.join(', ') : packageItem.pricing.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Home Visit Massage Fee */}
      <h2>{t('private-health-insurance:home_visit_massage_fee.title')}</h2>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th></th>
              <th>{t('private-health-insurance:home_visit_massage_fee.headers.time')}</th>
              <th>{t('private-health-insurance:home_visit_massage_fee.headers.fee')}</th>
            </tr>
          </thead>
          <tbody>
            {home_visit_massage_fee.services.map((service, index) => (
              <tr key={index}>
                <td>{service.name}</td>
                <td>{service.duration}</td>
                <td>{service.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* FAQ Section */}
      <h2>{t('private-health-insurance:faq.title')}</h2>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {faq.questions.map((question, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{t(question.question)}</Accordion.Header>
            <Accordion.Body>{t(question.answer)}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default PrivateHealthInsurance;