import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import logoIcon from "../../assets/images/fitzio_logo_trans.png"
import mailIcon from "../../assets/images/Mail.png"
import "../../components/i18n"
import { useTranslation, Trans } from 'react-i18next'
import Container from "react-bootstrap/Container"
import LocalizedPath from "../LocalizedPath"
import { phone, email } from "../ContactButtons"

// const email = "oli@fitzio.com.au";
const Footer = () => {
  const { t, i18n } = useTranslation(['common']);
  const currentYear = new Date().getFullYear();
  // console.log("currentYear:", currentYear); // Check the value
  // console.log("Translation key:", 'Fitsio. Copyright {{year}} - All rights reserved.'); // Check the key
  // console.log("Translation options:", { year: currentYear }); // Check the options
  return (
    <>
      <div id="footer">
        <Container>
          <div className="logo">
            <a href={LocalizedPath({ path: "/" })}>
              <img src={logoIcon} alt={t('site_logo')} />
            </a>
          </div>
          <div className="contact">
            <div className="email">
              <img src={mailIcon} alt={t('common:footer.email')} />
              <a href={`mailto: ${email}`}>{email}</a>
            </div>
            <div className="tel">
              <FontAwesomeIcon icon={faPhone} />
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            {/* <div className="address">
              {t('common:footer.address_line_1')}<br />
              {t('common:footer.address_line_2')}<br />
              {t('common:footer.address_line_3')}<br />
              {t('common:footer.address_line_4')}
            </div> */}
            <div className="follow-us">
              <div>{t('common:footer.follow_us_on')}</div>
              <div className="socialMedia">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
            </div>
          </div>
          <div className="opening">
            <div className="title underline">{t('common:footer.opening_hours')}</div>
            <div className="time">
              {t('common:footer.mon2fri_arrangement')}<br />
              {t('common:footer.sun_holiday_arrangement')}
            </div>
          </div>
          <div className="disclaimer">
            {t('common:footer.copyright', { year: currentYear })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;