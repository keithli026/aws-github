import React from 'react'
import Container from "react-bootstrap/Container"
import { useTranslation, Trans } from 'react-i18next'
import manualTherapy from "../assets/images/Manual_therapy.jpg"

const ManualTherapy = () => {
  const { t } = useTranslation(['common','manual-therapy']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.manual_therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={manualTherapy} alt={t('common:header.services.manual_therapy')} />
          </div>
          <div className='content'>
            <p>{t('manual-therapy:paragraph1')}</p>
            <p>{t('manual-therapy:paragraph2')}</p>
            <div>{t('manual-therapy:list.title')}</div>
            <ul className='effect'>
              <li>{t('manual-therapy:list.item1')}</li>
              <li>{t('manual-therapy:list.item2')}</li>
              <li>{t('manual-therapy:list.item3')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ManualTherapy