import React from 'react'
import Container from "react-bootstrap/Container"
import { useTranslation, Trans } from 'react-i18next'
import massageTherapy from "../assets/images/Massage_therapy.jpg"

const MassageTherapy = () => {
  const { t } = useTranslation(['common','massage-therapy']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.massage_therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={massageTherapy} alt={t('common:header.services.massage_therapy')} />
          </div>
          <div className='content'>
            <p>{t('massage-therapy:paragraph')}</p>
            <div>{t('massage-therapy:list.title')}</div>
            <ul className='effect'>
              <li>{t('massage-therapy:list.item1')}</li>
              <li>{t('massage-therapy:list.item2')}</li>
              <li>{t('massage-therapy:list.item3')}</li>
              <li>{t('massage-therapy:list.item4')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MassageTherapy