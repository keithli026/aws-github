import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import { getLanguageFromPath } from '../utils/getLanguage';

const PrivateHealthInsurance = () => {
  const { t } = useTranslation(['common', 'private-health-insurance']);
  const [feesData, setFeesData] = useState(null);
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  useEffect(() => {
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
  }, [language]); // Fetch data whenever lng or pathname changes

  if (!feesData) {
    return <div>Loading...</div>; // Loading state
  }

  const { home_visit_physiotherapy_consultation_fee, physiotherapy_program_and_package_fees, home_visit_massage_fee, faq } = feesData;

  return (
    <Container id="private-health-insurance">
      <div className='section'>
        <h1>{t('common:header.fees.private_health_insurance')}</h1>

        {/* Home Visit Physiotherapy Consultation Fee */}
        <h2>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.title')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: "50%" }}></th>
                <th style={{ width: "20%" }}>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.headers.time')}</th>
                <th style={{ width: "30%" }}>{t('private-health-insurance:home_visit_physiotherapy_consultation_fee.headers.fee')}</th>
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
                  <td style={{ width: "10%" }}>{packageItem.name}</td>
                  <td style={{ width: "40%" }}>{packageItem.description}</td>
                  <td style={{ width: "20%" }}>{packageItem.duration}</td>
                  <td style={{ width: "30%" }}>
                    {packageItem.discounts ? (
                      packageItem.discounts.map((discount, discountIndex) => (
                        <div key={discountIndex}>{discount}</div>
                      ))
                    ) : (
                      packageItem.pricings.map((pricing, pricingIndex) => (
                        <div key={pricingIndex}>{pricing}</div>
                      ))
                    )}
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
                  <td style={{ width: "20%" }}>{service.duration}</td>
                  <td style={{ width: "30%" }}>{service.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <h2>{t('private-health-insurance:faq.title')}</h2>
        <Accordion>
          {faq.questions.map((question, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{t(question.question)}</Accordion.Header>
              <Accordion.Body>
                {Array.isArray(question.answer)
                  ? question.answer.map((answer, answerIndex) => (
                    <div key={answerIndex}>{t(answer)}</div>
                  ))
                  : t(question.answer)}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}

export default PrivateHealthInsurance;