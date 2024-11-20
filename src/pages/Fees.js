import Container from "react-bootstrap/Container"
import { useTranslation, Trans, withTranslation } from 'react-i18next'
import Breadcrumb from '../components/Breadcrumb'

const Fees = () => {
  const { t } = useTranslation(['fees', 'common']);
  const { line1, line2, line3, line4, line5, line6, line7, line8 } = t('description');

  return (
    <>
      <Container id="fee">
        <Breadcrumb />
        <h1>{t('Fees', { ns: 'common' })}</h1>
        <h2>{t('table-title-1')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th></th>
                <th>{t('table-heading-3')}</th>
                <th>{t('table-heading-4')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('service')}</td>
                <td>{t('time')}</td>
                <td>$108</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>{t('table-title-2')}</h2>
        <div className="table-responsive mb-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>{t('table-heading-1')}</th>
                <th>{t('table-heading-2')}</th>
                <th>{t('table-heading-3')}</th>
                <th>{t('table-heading-4')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('program-1')}</td>
                <td>
                  <ul>
                    <li>
                      <Trans
                        i18nKey={line1}
                        components={{ italic: <i />, bold: <strong /> }}
                      />
                    </li>
                    <li>{line2}</li>
                  </ul>
                </td>
                <td>{t('time')}</td>
                <td>{t('fee-1')}</td>
              </tr>
              <tr>
                <td>{t('program-2')}</td>
                <td>
                  <ul>
                    <li>
                      <Trans
                        i18nKey={line3}
                        components={{ italic: <i />, bold: <strong /> }}
                      />
                    </li>
                    <li>{line4}</li>
                  </ul>
                </td>
                <td>{t('time')}</td>
                <td>{t('fee-2')}</td>
              </tr>
              <tr>
                <td>{t('program-3')}</td>
                <td>
                  <ul>
                    <li>
                      <Trans
                        i18nKey={line5}
                        components={{ italic: <i />, bold: <strong /> }}
                      />
                    </li>
                    <li>{line6}</li>
                  </ul>
                </td>
                <td>{t('time')}</td>
                <td>{t('fee-3')}</td>
              </tr>
              <tr>
                <td>{t('program-4')}</td>
                <td>
                  <ul>
                    <li>{line7}</li>
                    <li>{line8}</li>
                  </ul>
                </td>
                <td>{t('time')}</td>
                <td>{t('fee-4')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default withTranslation(['fees', 'common'])(Fees);