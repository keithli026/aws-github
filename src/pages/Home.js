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
  const { t } = useTranslation(['common', 'home', 'meet-the-team']);
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
          <div className="banner" style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <Container>
              <div className="textbox">
                <div className="content">
                  <div className="slogan-1">{t('home:banner.slogan_1')}</div>
                  <div className="slogan-2">{t("home:banner.slogan_2")}</div>
                  <ul>
                    <li>{t('home:banner.Pain_relief')}</li>
                    <li>{t('home:banner.Improved_mobility_and_function')}</li>
                    <li>{t('home:banner.Injury_prevention')}</li>
                    <li>{t('home:banner.Enhanced_sports_performance')}</li>
                  </ul>
                  <div className="button_container">
                    <a className="button" href={LocalizedPath({ path: "/contact" })}>{t('home:banner.Contact_Us')}</a>
                    <a className="button" href={LocalizedPath({ path: "/book-online" })}>{t('home:banner.Book_Now')}</a>
                  </div>
                  <div className="learn-more">
                    <div>{t('common:learn_more')}</div>
                    <button onClick={executeScroll}><img src={arrowIcon} alt={t('common:arrow')} /></button>
                    {/* <button onClick={executeScroll}><img src={process.env.PUBLIC_URL + '/arrow.png'} alt={t('arrow')} /></button> */}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="slide">
          <div className="banner" style={{
            backgroundImage: `url(${banner2Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <Container>
              <div className="textbox">
                <div className="content">
                  <div className="slogan-1">{t('home:banner.slogan_1')}</div>
                  <div className="slogan-2">{t("home:banner.slogan_2")}</div>
                  <ul>
                    <li>{t('home:banner.Pain_relief')}</li>
                    <li>{t('home:banner.Improved_mobility_and_function')}</li>
                    <li>{t('home:banner.Injury_prevention')}</li>
                    <li>{t('home:banner.Enhanced_sports_performance')}</li>
                  </ul>
                  <div className="button_container">
                    <a className="button" href={LocalizedPath({ path: "/contact" })}>{t('home:banner.Contact_Us')}</a>
                    <a className="button" href={LocalizedPath({ path: "/book-online" })}>{t('home:banner.Book_Now')}</a>
                  </div>
                  <div className="learn-more">
                    <div>{t('common:learn_more')}</div>
                    <button onClick={executeScroll}><img src={arrowIcon} alt={t('common:arrow')} loading="lazy" /></button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Slider>

      <div id="values-section" ref={ref}>
        <Container>
          <div className="content">
            <h2 className="underline">{t('home:values:title')}</h2>
            <div className="boxes">
              <div className="box">
                <div className='image_wrapper'>
                  <img src={holisticCare} alt={t('home:values:Holistic_care')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Holistic_care')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={individualizedServices} alt={t('home:values:Individualized_services')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Individualized_services')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={exerciseRehabilitation} alt={t('home:values:Exercise_rehabilitation')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Exercise_rehabilitation')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={goalOriented} alt={t('home:values:Goal_oriented')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Goal_oriented')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={empowerment} alt={t('home:values:Empowerment')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Empowerment')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={longLastingClinicalOutcomes} alt={t('home:values:Long_lasting_clinical_outcomes')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Long_lasting_clinical_outcomes')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={ongoingSupport} alt={t('home:values:Ongoing_support')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Ongoing_support')}</div>
              </div>
              <div className="box">
                <div className='image_wrapper'>
                  <img src={evidenceBasedPractice} alt={t('home:values:Evidence_based_practice')} loading="lazy" />
                </div>
                <div className="value">{t('home:values:Evidence_based_practice')}</div>
              </div>
            </div>
            {/* <div className="button_wrapper">
              <Link className="button" to={LocalizedPath({ path: "/about" })}>{t('common:learn_more')}</Link>
            </div> */}
          </div>
        </Container>
      </div>
      <div id="services-section">
        <Container>
          <h2 className="underline">{t('home:services:title')}</h2>
          <div className="boxes">
            <div className="box"><Link to={LocalizedPath({ path: "/services/manual-therapy" })}>{t('common:header.services.manual_therapy')}</Link></div>
            <div className="box"><Link to={LocalizedPath({ path: "/services/acupuncture" })}>{t('common:header.services.acupuncture')}</Link></div>
            <div className="box"><Link to={LocalizedPath({ path: "/services/exercise-rehabilitation" })}>{t('common:header.services.exercise_rehabilitation')}</Link></div>
            <div className="box"><Link to={LocalizedPath({ path: "/services/massage-therapy" })}>{t('common:header.services.massage_therapy')}</Link></div>
            {/* <div className="box"><Link to={LocalizedPath({ path: "/services/shockwave-therapy" })}>{t('common:header.services.shockwave_therapy')}</Link></div> */}
            {/* <div className="box"><Link to={LocalizedPath({ path: "/services/electrotherapy" })}>{t('common:header.services.electrotherapy')}</Link></div> */}
            <div className="box"><Link to={LocalizedPath({ path: "/services/cupping-therapy" })}>{t('common:header.services.cupping_therapy')}</Link></div>
          </div>
        </Container>
      </div>
      <div className="the-team-section">
        <Container>
          <h2 className="underline">{t('home:the_team:title')}</h2>
          <div className="members">
            {physiotherapists.map((physiotherapist, i) => {
              return (
                <div className="member" key={i}>
                  <img src={physiotherapist.photo} alt={t(physiotherapist.name)} loading="lazy"></img>
                  <div className="name"><Link to ={LocalizedPath({ path: `/meet-the-team/${physiotherapist.symbol}`})}>{t(physiotherapist.name)}</Link></div>
                  <div className="title">{t(physiotherapist.title)}</div>
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