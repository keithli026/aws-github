import React from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const HomeCarePackage = () => {
  const { t } = useTranslation(['common', 'home-care-package']);
  return (
    // <div>HomeCarePackage</div>
    <Container>
      <div class="section">
        <h1>{t('common:header.fees.home_care_package')}</h1>
        <p>{t('home-care-package:what_is_hcp.description')}</p>
        <p>{t('home-care-package:who_is_eligible.description')}</p>
        <p>{t('home-care-package:after_approval.description')}</p>
      </div>
    </Container>
  )
}

export default HomeCarePackage