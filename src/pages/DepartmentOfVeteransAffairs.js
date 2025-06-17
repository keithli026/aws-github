import React from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const DepartmentOfVeteransAffairs = () => {
  const { t } = useTranslation(['common', 'department-of-veterans-affairs']);

  return (
    // <div>DepartmentOfVeteransAffairs</div>
    <Container>
      <div class="section">
        <h1>{t('common:header.fees.department_of_veterans_affairs')}</h1>
        <p>{t('department-of-veterans-affairs:description')}</p>
        <p>{t('department-of-veterans-affairs:referral_information.requirements')}</p>
        <p>{t('department-of-veterans-affairs:referral_information.validity')}</p>
      </div>
    </Container>
  )
}

export default DepartmentOfVeteransAffairs