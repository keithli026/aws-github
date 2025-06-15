import React from 'react'
import Container from 'react-bootstrap/Container'

const Medicare = () => {
  return (
    <>
      <Container>
        <h1>Medicare</h1>

        <h2>Chronic Disease Management (CDM)</h2>
        <p>Chronic Disease Management (formerly known as Enhanced Primary Care or EPC) is a program designed to support General Practitioners (GPs) in managing the health and well-being of patients living with chronic or long-term medical conditions (those lasting or expected to last at least six months). Through this program, eligible patients may receive Medicare rebates for specific Allied Health Services, including physiotherapy, upon referral from their GP.</p>

        <h3>How do I obtain a CDM referral?</h3>
        <p>Your GP will determine if you qualify for the CDM program based on a clinical assessment of your medical condition and healthcare needs. If eligible, your GP can provide you with a referral that allows you to access up to five Medicare-subsidised Allied Health consultations per calendar year.</p>

        <h3>What should I do after receiving a CDM referral?</h3>
        <p>After obtaining your referral, simply contact our clinic to book your appointment. Please mention that you have a CDM plan when scheduling, so we can apply the correct Medicare coding.</p>

        <h3>What are the costs involved?</h3>
        <p>Under the CDM program, you may be eligible for:</p>
        <ul>
          <li>Up to 5 physiotherapy sessions partially covered by Medicare.</li>
          <li>There is a $60 out-of-pocket fee per session for all five sessions.</li>
          <li>Any additional CDM sessions beyond this will be charged at private rate.</li>
        </ul>
        <p>Please note that standard fees may apply in accordance with our cancellation policy.</p>
      </Container>
    </>
  )
}

export default Medicare