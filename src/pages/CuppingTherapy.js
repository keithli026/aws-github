import React from 'react'
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next'
import cuppingTherapy from "../assets/images/Cupping_therapy.jpg"

const CuppingTherapy = () => {
  const { t } = useTranslation(['common','cupping-therapy']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.cupping_therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={cuppingTherapy} alt={t('common:header.services.cupping_therapy')} />
          </div>
          <div className='content'>
            <p>{t('cupping-therapy:paragraph')}</p>
            <div>{t('cupping-therapy:list.title')} </div>
            <ul className='effect'>
              <li>{t('cupping-therapy:list.item1')}</li>
              <li>{t('cupping-therapy:list.item2')}</li>
              <li>{t('cupping-therapy:list.item3')}</li>
              <li>{t('cupping-therapy:list.item4')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CuppingTherapy