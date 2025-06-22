import React from 'react';
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Breadcrumb from "../components/Breadcrumb";
import { useTranslation } from 'react-i18next';
import MapComponent from '../components/MapComponent';
import Accordion  from 'react-bootstrap/Accordion';

const About = () => {
  const { t } = useTranslation(['common', 'about']);

  const data = {
    "City of Whitehorse": [
      "Blackburn 3130", "Blackburn North 3130", "Blackburn South 3130",
      "Box Hill 3128", "Box Hill North 3129", "Box Hill South 3129",
      "Burwood 3125", "Burwood East 3151", "Forest Hill 3131",
      "Mitcham 3132", "Mont Albert 3127", "Mont Albert North 3129",
      "Nunawading 3131", "Surrey Hills 3127", "Vermont 3133", "Vermont South 3133"
    ],
    "City of Boroondara": [
      "Ashburton 3147", "Balwyn 3103", "Balwyn North 3104", "Camberwell 3124",
      "Canterbury 3126", "Deepdene 3103", "Glen Iris 3146", "Hawthorn 3122",
      "Hawthorn East 3123", "Kew 3101", "Kew East 3102", "Mont Albert 3127", "Surrey Hills 3127"
    ],
    "City of Monash": [
      "Ashwood 3147", "Chadstone 3148", "Clayton 3168", "Glen Waverly 3150",
      "Hughesdale 3166", "Huntingdale 3166", "Monash University 3800", "Mount Waverley 3149",
      "Mulgrave 3170", "Notting Hill 3168", "Oakleigh 3166", "Oakleigh East 3166",
      "Oakleigh South 3167", "Wheelers Hill 3150"
    ],
    "City of Stonnington": [
      "Malvern 3144", "Malvern East 3145", "Toorak 3142", "Armadale 3143",
      "South Yarra 3141", "Prahran 3181", "Windsor 3181"
    ],
    "City of Manningham": [
      "Bulleen 3105", "Doncaster 3108", "Doncaster East 3109", "Donvale 3111",
      "Park Orchards 3114", "Templestowe 3106", "Templestowe Lower 3107",
      "Warrandyte 3113", "Warrandyte South 3134", "Wonga Park 3115",
      "Nunawading 3131", "Ringwood North 3134"
    ]
  };
  return (
    <>
      <Container>
        <Breadcrumb />
        <div className='section'>
          <h1>{t('common:header.about')}</h1>
          <p>{t('about:paragraph1')}</p>
          <p>{t('about:paragraph2')}</p>
          <p style={{marginBottom: "50px"}}>{t('about:service')}</p>
          <Accordion>
            {Object.entries(data).map(([city, suburbs], index) => (
              <Accordion.Item eventKey={index.toString()} key={city}>
                <Accordion.Header>{city}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {suburbs.map((suburb, i) => (
                      <li key={i}>{suburb}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
  
          <MapComponent />
          {/* <Map/> */}
        </div>
      </Container>
      <Outlet />
    </>
  );
}

export default About;
