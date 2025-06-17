import React from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const NDIS = () => {
  const { t } = useTranslation(['common', 'ndis']);
  return (
    // <div>NDIS</div>
    <Container>
      <div class="section">
        <h1>{t('common:header.fees.ndis')}</h1>
      </div>
    </Container>
  )
}

export default NDIS