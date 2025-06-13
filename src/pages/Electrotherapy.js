import React from 'react'
import { Container } from "../GlobalStyle"
// import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import electrotherapy from "../assets/images/Electrotherapy.jpg"

const Electrotherapy = () => {
  const { t } = useTranslation(['common','electrotherapy']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.electrotherapy')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={electrotherapy} alt={t('common:header.services.electrotherapy')} />
          </div>
          <div className='content'>
            <p>{t('electrotherapy:paragraph')}</p>
            <div>{t('electrotherapy:list.title')}</div>
            <ul className='effect'>
              <li>{t('electrotherapy:list.item1')}</li>
              <li>{t('electrotherapy:list.item2')}</li>
              <li>{t('electrotherapy:list.item3')}</li>
              <li>{t('electrotherapy:list.item4')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Electrotherapy