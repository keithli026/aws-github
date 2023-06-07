import React from 'react'
import { Container } from "../GlobalStyle";

const DryNeedling = () => {
  return (
    <>
      <Container>
        <h1 className='service'>Dry Needling</h1>
        <p>Dry needling is a treatment technique involving needling introduced to your skin and the soft tissue below, aiming for trigger points in your muscles and fascia.</p>
        <div>Benefits of dry needling are:</div>
        <ul className='effect'>
          <li>Release trigger points (muscle knots)</li>
          <li>Promote tissue healing response</li>
          <li>Reduce pain</li>
          <li>Reduce muscle tightness</li>
          <li>Restore muscle function</li>
        </ul>
      </Container>
    </>
  )
}

export default DryNeedling