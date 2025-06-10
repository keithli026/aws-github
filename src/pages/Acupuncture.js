import React from 'react'
import { useTranslation } from 'react-i18next'
import acupuncture from "../assets/images/Acupuncture.jpg"
import Container from 'react-bootstrap/Container'

const Acupuncture = () => {
  const { t } = useTranslation(['common','acupuncture']);
  
  return (
    <>
    <Container>
      <h1 className='service'>{t('common:header.services.acupuncture')}</h1>
      <div className="flexbox">
        <div className='image_wrapper'>
          <img src={acupuncture} alt={t('common:header.services.acupuncture')} />
        </div>
        <div className='content'>
          <p>{t('acupuncture:paragraph')}</p>
          <div>{t('acupuncture:list.title')}</div>
          <ul className='effect'>
            <li>{t('acupuncture:list.item1')}</li>
            <li>{t('acupuncture:list.item2')}</li>
            <li>{t('acupuncture:list.item3')}</li>
            <li>{t('acupuncture:list.item4')}</li>
            <li>{t('acupuncture:list.item5')}</li>
          </ul>
        </div>
      </div>
    </Container>
  </>
  )
}

export default Acupuncture