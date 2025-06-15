import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Define phone number and email
export const phone = "0431201847";
export const email = "oli@fitzio.com.au";

// Component for the telephone button
export const telButton = () => {
  return (
    <a href={`tel:${phone}`}>
      <FontAwesomeIcon icon={faPhone} />
    </a>
  );
};

// Component for the email button
export const emailButton = () => {
  return (
    <a href={`mailto:${email}`}>
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  );
};

// Component for the WhatsApp button
export const WhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/${phone}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};