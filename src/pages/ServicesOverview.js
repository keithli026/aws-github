import React from 'react'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

import { useTranslation, Trans } from 'react-i18next'
import acupuncture from "../assets/images/Acupuncture.jpg"
import manualTherapy from "../assets/images/Manual_therapy.jpg"
import exerciseRehabilitation from "../assets/images/Exercise_therapy.jpg"
import massageTherapy from "../assets/images/Massage_therapy.jpg"
import electrotherapy from "../assets/images/Electrotherapy.jpg"
import cuppingTherapy from "../assets/images/Cupping_therapy.jpg"
import shockwaveTherapy from "../assets/images/Shockwave_therapy.jpg"

const ServicesOverview = () => {
  const { t } = useTranslation(['common']);
  return (
    <Container className="overviews">
      <div className="overview">
        <Link to="/services/manual-therapy">
          <img src={manualTherapy} alt={t('common:header.services.manual_therapy')} />
          <div className="title">{t('common:header.services.manual_therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/acupuncture">
          <img src={acupuncture} alt={t('common:header.services.acupuncture')} />
          <div className="title">{t('common:header.services.acupuncture')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/exercise-rehabilitation">
          <img src={exerciseRehabilitation} alt={t('common:header.services.exercise_rehabilitation')} />
          <div className="title">{t('common:header.services.exercise_rehabilitation')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/massage-therapy">
          <img src={massageTherapy} alt={t('common:header.services.massage_therapy')} />
          <div className="title">{t('common:header.services.massage_therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/shockwave-therapy">
          <img src={shockwaveTherapy} alt={t('common:header.services.shockwave_therapy')} />
          <div className="title">{t('common:header.services.shockwave_therapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/electrotherapy">
          <img src={electrotherapy} alt={t('common:header.services.electrotherapy')} />
          <div className="title">{t('common:header.services.electrotherapy')}</div>
        </Link>
      </div>
      <div className="overview">
        <Link to="/services/cupping-therapy">
          <img src={cuppingTherapy} alt={t('common:header.services.cupping_therapy')} />
          <div className="title">{t('common:header.services.cupping_therapy')}</div>
        </Link>
      </div>
    </Container>
  );
}

export default ServicesOverview;