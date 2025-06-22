import React from 'react'
import Container from "react-bootstrap/Container"
import { useTranslation } from 'react-i18next'
import shockwaveTherapy from "../assets/images/Shockwave_therapy.jpg"

const ShockwaveTherapy = () => {
  const { t } = useTranslation(['common','shockwave-therapy']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.shockwave_therapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={shockwaveTherapy} alt={t('common:header.services.shockwave_therapy')} />
          </div>
          <div className='content'>
            <p>{t('shockwave-therapy:paragraph')}</p>
            <div>{t('shockwave-therapy:list.title')} </div>
            <ul className='effect'>
              <li>{t('shockwave-therapy:list.item1')}</li>
              <li>{t('shockwave-therapy:list.item2')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShockwaveTherapy