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
import LocalizedPath from "../components/LocalizedPath"

const Home = () => {
  const { t } = useTranslation(['common','home','meet-our-team']);
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
                <h2>{t('home:banner.slogan_1')}</h2>
                <h3>{t("home:banner.slogan_2")}</h3>
                <ul>
                  <li>{t('home:banner.Pain_relief')}</li>
                  <li>{t('home:banner.Improved_mobility_and_function')}</li>
                  <li>{t('home:banner.Injury_prevention')}</li>
                  <li>{t('home:banner.Enhanced_sports_performance')}</li>
                </ul>
                <div className="button_container">
                  <a className="button" href={LocalizedPath({path: "/contact"})}>{t('home:banner.Contact_Us')}</a>
                  <a className="button" href={LocalizedPath({path: "/book-online"})}>{t('home:banner.Book_Now')}</a>
                </div>
                <div className="learn-more">
                  <div>{t('common:learn_more')}</div>
                  <button onClick={executeScroll}><img src={arrowIcon} alt={t('common:arrow')} /></button>
                  {/* <button onClick={executeScroll}><img src={process.env.PUBLIC_URL + '/arrow.png'} alt={t('arrow')} /></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="banner">
            <img src={banner2Img} alt={t('common:banner')} loading="lazy"/>
            <div className="textbox container">
              <div className="content">
               <h2>{t('home:banner.slogan_1')}</h2>
                <h3>{t("home:banner.slogan_2")}</h3>
                <ul>
                  <li>{t('home:banner.Pain_relief')}</li>
                  <li>{t('home:banner.Improved_mobility_and_function')}</li>
                  <li>{t('home:banner.Injury_prevention')}</li>
                  <li>{t('home:banner.Enhanced_sports_performance')}</li>
                </ul>
                <div className="button_container">
                  <a className="button" href={LocalizedPath({path: "/contact"})}>{t('home:banner.Contact_Us')}</a>
                  <a className="button" href={LocalizedPath({path: "/book-online"})}>{t('home:banner.Book_Now')}</a>
                </div>
                <div className="learn-more">
                  <div>{t('Learn More')}</div>
                  <button onClick={executeScroll}><img src={arrowIcon} alt={t('common:arrow')} loading="lazy"/></button>
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
            <h2 className="underline">{t('home:our_values:title')}</h2>
            <div className="boxes">
              <div className="box">
                <div className='image_wrapper'>
                  <img src={holisticCare} alt={t('home:our_values:Holistic_care')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Holistic_care')}</h3>
                {/* <p>{t("home:our_values:Holistic_care_value")}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={individualizedServices} alt={t('home:our_values:Individualized_services')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Individualized_services')}</h3>
                {/* <p>{t('home:our_values:Individualized_services_value')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={exerciseRehabilitation} alt={t('home:our_values:Exercise_rehabilitation')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Exercise_rehabilitation')}</h3>
                {/* <p>{t('home:our_values:Exercise_rehabilitation_value')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={goalOriented} alt={t('home:our_values:Goal_oriented')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Goal_oriented')}</h3>
                {/* <p>{t("home:our_values:Goal_oriented_value")}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={empowerment} alt={t('home:our_values:Empowerment')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Empowerment')}</h3>
                {/* <p>{t('home:our_values:Empowerment_value')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={longLastingClinicalOutcomes} alt={t('home:our_values:Long_lasting_clinical_outcomes')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Long_lasting_clinical_outcomes')}</h3>
                {/* <p>{t('home:our_values:Long_lasting_clinical_outcomes_value')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={ongoingSupport} alt={t('home:our_values:Ongoing_support')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Ongoing_support')}</h3>
                {/* <p>{t('home:our_values:Ongoing_support_value')}</p> */}
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={evidenceBasedPractice} alt={t('home:our_values:Evidence_based_practice')} loading="lazy"/>
                </div>
                <h3>{t('home:our_values:Evidence_based_practice')}</h3>
                {/* <p>{t("home:our_values:Evidence_based_practice_value")}</p> */}
              </div>
            </div>
            <div className="button_wrapper">
              <Link className="button" to={LocalizedPath({path: "/about"})}>{t('common:learn_more')}</Link>
            </div>
          </div>
        </Container>
      </div>
      <div id="our-services-section">
        <Container>
          <h2 className="underline">{t('home:our_services:title')}</h2>
          <div className="boxes">
            <div className="box"><Link to={LocalizedPath({path: "/services/manual-therapy"})}>{t('common:header.services.manual_therapy')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/acupuncture"})}>{t('common:header.services.acupuncture')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/exercise-rehabilitation"})}>{t('common:header.services.exercise_rehabilitation')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/massage-therapy"})}>{t('common:header.services.massage_therapy')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/shockwave-therapy"})}>{t('common:header.services.shockwave_therapy')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/electrotherapy"})}>{t('common:header.services.electrotherapy')}</Link></div>
            <div className="box"><Link to={LocalizedPath({path: "/services/cupping-therapy"})}>{t('common:header.services.cupping_therapy')}</Link></div>
          </div>
        </Container>
      </div>
      <div className="our-team-section">
        <Container>
          <h2 className="underline">{t('home:our_team:title')}</h2>
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