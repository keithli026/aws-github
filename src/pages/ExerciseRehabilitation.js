import React from 'react'
import Container from 'react-bootstrap/Container';
// import "../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import exerciseRehabilitation from "../assets/images/Exercise_therapy.jpg"

const ExerciseRehabilitation = () => {
  const { t } = useTranslation(['common','exercise-rehabilitation']);
  return (
    <>
      <Container>
        <h1 className='service'>{t('common:header.services.exercise_rehabilitation')}</h1>
        <div className='flexbox'>
          <div className='image_wrapper'>
            <img src={exerciseRehabilitation} alt={t('common:header.services.exercise_rehabilitation')} />
          </div>
          <div className='content'>
            <p>{t('exercise-rehabilitation:paragraph1')}</p>
            <p>{t('exercise-rehabilitation:paragraph2')}</p>
            <div>{t('exercise-rehabilitation:list.title')}</div>
            <ul className='effect'>
              <li>{t('exercise-rehabilitation:list.item1')}</li>
              <li>{t('exercise-rehabilitation:list.item2')}</li>
              <li>{t('exercise-rehabilitation:list.item3')}</li>
              <li>{t('exercise-rehabilitation:list.item4')}</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ExerciseRehabilitation