import Slider from "react-slick"
import { useRef } from "react"
import { Link } from "react-router-dom"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from "react-bootstrap/Container"
import { getPhysiotherapists } from "../PhysiotherapistInfo";
import { useTranslation, Trans } from 'react-i18next';
import bannerImg from "../assets/images/banner-image-1.jpg"
import banner2Img from "../assets/images/banner-image-2.jpg"
import holisticCare from "../assets/images/Holistic_approach.png"
import individualizedServices from "../assets/images/Individualised_service.png"
import exerciseRehabilitation from "../assets/images/Exercise_based_rehabilitation.png"
import goalOriented from "../assets/images/Goal_oriented.png"
import empowerment from "../assets/images/Empowerment.png"
import longLastingClinicalOutcomes from "../assets/images/Long_lasting_clinical_outcomes.png"
import ongoingSupport from "../assets/images/Ongoing_support.png"
import evidenceBasedPractice from "../assets/images/Evidence_based_practice.png"
import arrowIcon from "../assets/images/arrow.png"
// import Button from "react-bootstrap/Button"

const Home = () => {
  const { t } = useTranslation(['home', 'common']);
  const ref = useRef(null);
  const executeScroll = () => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  };
  const physiotherapists = getPhysiotherapists();
  return (
    <>
      <Slider {...settings}>
        <div className="slide">
          <div className="banner">
            <img src={bannerImg} alt={t('banner')} loading="lazy"/>
            <div className="textbox container">
              <div className="content container">
                <h2>{t('GET BACK TO DOING WHAT YOU LOVE')}</h2>
                <h3>{t("DON'T SUFFER FROM PAIN WHEN YOU CAN MANAGE IT")}</h3>
                <ul>
                  <li>{t('Pain relief')}</li>
                  <li>{t('Improved mobility and function')}</li>
                  <li>{t('Injury prevention')}</li>
                  <li>{t('Enhanced sports performance')}</li>
                </ul>
                <div className="button_container">
                  <a className="button" href="/contact">{t('Contact Us')}</a>
                  <a className="button" href="/book-online">{t('Book Now')}</a>
                </div>
                <div className="learn-more">
                  <div>{t('Learn More')}</div>
                  <button onClick={executeScroll}><img src={arrowIcon} alt={t('arrow')} /></button>
                  {/* <button onClick={executeScroll}><img src={process.env.PUBLIC_URL + '/arrow.png'} alt={t('arrow')} /></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="banner">
            <img src={banner2Img} alt={t('banner')} loading="lazy"/>
            <div className="textbox container">
              <div className="content">
                <h2>{t('GET BACK TO DOING WHAT YOU LOVE')}</h2>
                <h3>{t("DON'T SUFFER FROM PAIN WHEN YOU CAN MANAGE IT")}</h3>
                <ul>
                  <li>{t('Pain relief')}</li>
                  <li>{t('Improved mobility and function')}</li>
                  <li>{t('Injury prevention')}</li>
                  <li>{t('Enhanced sports performance')}</li>
                </ul>
                <div className="button_container">
                  <a className="button" href="/contact">{t('Contact Us')}</a>
                  <a className="button" href="/book-online">{t('Book Now')}</a>
                </div>
                <div className="learn-more">
                  <div>{t('Learn More')}</div>
                  <button onClick={executeScroll}><img src={arrowIcon} alt={t('arrow')} loading="lazy"/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* <Container id="about-section">
        <h2 className="underline">{t('About')}</h2>
        <div className="content">
          <p>{t('People all have something they enjoy doing; whether it be sports or family activities. They all have goals they want to achieve. At Fitsio, guided by our core values, we empower people to live a better life. We love to see people who enjoy their life and do what they enjoy doing. To do that, we treat people as unique individuals. We discuss rehabilitation roadmap to achieve their personal goals. We use a holistic approach by taking into consideration both conditions and general well-being. We provide physiotherapy and prescribe exercises to enhance better outcomes.')}</p>
        </div>
      </Container> */}
      <div id="our-values-section" ref={ref}>
        <Container>
          <div className="content">
            <h2 className="underline">{t('Our values')}</h2>
            <div className="boxes">
              <div className="box">
                <div className='image_wrapper'>
                  <img src={holisticCare} alt={t('Holistic care')} loading="lazy"/>
                </div>
                <h3>{t('Holistic care')}</h3>
                {/* <p>{t("We consider our clients' general well-being.")}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={individualizedServices} alt={t('Individualized services')} loading="lazy"/>
                </div>
                <h3>{t('Individualized services')}</h3>
                {/* <p>{t('We provide services on a one-to-one basis.')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={exerciseRehabilitation} alt={t('Exercise rehabilitation')} loading="lazy"/>
                </div>
                <h3>{t('Exercise rehabilitation')}</h3>
                {/* <p>{t('We prescribe exercises as part of the management.')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={goalOriented} alt={t('Goal-oriented')} loading="lazy"/>
                </div>
                <h3>{t('Goal-oriented')}</h3>
                {/* <p>{t("Our treatment and exercise rehabilitation are guided by clients' goals.")}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={empowerment} alt={t('Empowerment')} loading="lazy"/>
                </div>
                <h3>{t('Empowerment')}</h3>
                {/* <p>{t('We promote self-management and disease prevention.')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={longLastingClinicalOutcomes} alt={t('Long-lasting clinical outcomes')} loading="lazy"/>
                </div>
                <h3>{t('Long-lasting clinical outcomes')}</h3>
                {/* <p>{t('We focus on long-term solutions by addressing causes and symptoms of musculoskeletal conditions.')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={ongoingSupport} alt={t('Ongoing support')} loading="lazy"/>
                </div>
                <h3>{t('Ongoing support')}</h3>
                {/* <p>{t('Our team will follow up on our clients regularly. Please contact us if you have any concerns.')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={evidenceBasedPractice} alt={t('Evidence-based practice')} loading="lazy"/>
                </div>
                <h3>{t('Evidence-based practice')}</h3>
                {/* <p>{t("We integrate the best available research evidence with clinical expertise and clients' values for our treatment.")}</p> */}
              </div>
            </div>
            <div className="button_wrapper">
              <Link className="button" to="/about">{t('Learn More')}</Link>
            </div>
          </div>
        </Container>
      </div>
      <div id="our-services-section">
        <Container>
          <h2 className="underline">{t('Our services')}</h2>
          <div className="boxes">
            <div className="box"><Link to="/services/manual-therapy">{t('Manual therapy')}</Link></div>
            <div className="box"><Link to="/services/dry-needling">{t('Acupuncture')}</Link></div>
            <div className="box"><Link to="/services/exercise-rehabilitation">{t('Exercise rehabilitation')}</Link></div>
            <div className="box"><Link to="/services/massage-therapy">{t('Massage therapy')}</Link></div>
            <div className="box"><Link to="/services/shockwave-therapy">{t('Shockwave therapy')}</Link></div>
            <div className="box"><Link to="/services/electrotherapy">{t('Electrotherapy')}</Link></div>
            <div className="box"><Link to="/services/cupping-therapy">{t('Cupping therapy')}</Link></div>
          </div>
        </Container>
      </div>
      <div className="our-team-section">
        <Container>
          <h2 className="underline">{t('Our team')}</h2>
          <div className="members">
            {physiotherapists.map((physiotherapist, i) => {
              return (
                <div className="member" key={i}>
                  <img src={physiotherapist.photo} alt={t(physiotherapist.name)} loading="lazy"></img>
                  <h3>{t(physiotherapist.name)}</h3>
                  <p>{t(physiotherapist.title)}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;