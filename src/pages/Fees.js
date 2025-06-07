import Container from "react-bootstrap/Container"
import { useTranslation, Trans, withTranslation } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'
import Accordion from 'react-bootstrap/Accordion'

const Fees = () => {
  const { t } = useTranslation(['fees', 'common']);
  const { line1, line2, line3, line4, line5, line6, line7, line8 } = t('description');

  return (
    <>
      <Container id="fee">
        <Breadcrumb />
        <h1>{t('Fees', { ns: 'common' })}</h1>
        <h2>{t('Home Visit Physiotherapy Consultation Fee')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>{t('Time')}</th>
                <th>{t('Fee')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('Initial Consultation')}</td>
                <td>40 {t('min')}</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>{t('Subsequent Consultation')}</td>
                <td>20 {t('min')}</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>{t('Travel')}</td>
                <td>20 {t('min')}</td>
                <td>{t('Free')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t('Physiotherapy Program and Package Fees')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>{t('Package/Program')}</th>
                <th>{t('Description')}</th>
                <th>{t('Time')}</th>
                <th>{t('Fee')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('Intensive Week')}</td>
                <td>{t('Discount will be applicable on subsequent consultations in the following week after an initial consultation. Only applicable to one body part at a time.')}</td>
                <td>20 {t('min per session')}</td>
                <td>{t('$20 off on the 2nd visit')}<br />{t('$40 off on the 3rd visit')}</td>
              </tr>
              <tr>
                <td>{t('Wellness Package')}</td>
                <td>{t('No expiry date for the package')}</td>
                <td>20 {t('min per session')}</td>
                <td>{t('$650 for 5 sessions')}<br />{t('$1100 for 10 sessions')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t('Home Visit Massage Fee')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>{t('Time')}</th>
                <th>{t('Fee')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('Massage')}</td>
                <td>40 {t('min')}</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>{t('Travel')}</td>
                <td>20 {t('min')}</td>
                <td>{t('Free')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t('FAQ')}</h2>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t('Can I use Medicare or private health insurance on a program and package?')}</Accordion.Header>
            <Accordion.Body>
              {t('Yes, you can use either Medicare or private health insurance on the program and package.')}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{t('How do I know whether a program or package suits me?')}</Accordion.Header>
            <Accordion.Body>
              <p>{t('An Intensive week program is designed for clients who need multiple intensive treatments and exercise rehabilitation for optimal recovery.')}</p>
              <p>{t('A wellness package is designed for clients who need ongoing physiotherapy for long-term management.')}</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t('How does a physiotherapy program work?')}</Accordion.Header>
            <Accordion.Body>
              {t('The aim of an intensive week program is to make the treatment sessions more affordable especially for clients who need multiple intensive treatments for optimal recovery. A discount will be applicable on follow-up consultations in the following week after the initial consultation.')}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default withTranslation(['fees', 'common'])(Fees);