import React, { useEffect, useRef, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from "react-bootstrap/Container"
import Breadcrumb from "../components/Breadcrumb"
import { getCondition } from './ConditionInfo'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import bodyChart from "../assets/images/bodychart.png"
import dotImg from "../assets/images/dot.png"
import shiningDotImg from "../assets/images/shining_dot.png"
import { getLanguageFromPath } from '../utils/getLanguage'

const Conditions = () => {

  const { t } = useTranslation(['common', 'conditions']);
  const [conditionsData, setConditionsData] = useState([]);
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);

  const dot = useRef([]);
  const shiningDot = useRef([]);
  const textBox = useRef([]);
  const list = [...Array(16).keys()];
  // const initialState = {
  //   dot0: false,
  //   dot1: false,
  //   dot2: false,
  //   dot3: false,
  //   dot4: false,
  //   dot5: false,
  //   dot6: false,
  //   dot7: false,
  //   dot8: false,
  //   dot9: false,
  //   dot10: false,
  //   dot11: false,
  //   dot12: false,
  //   dot13: false,
  //   dot14: false,
  //   dot15: false
  // };
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "dot0":
  //       return { dot0: !state.dot0, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot1":
  //       return { dot0: false, dot1: !state.dot1, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot2":
  //       return { dot0: false, dot1: false, dot2: !state.dot2, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot3":
  //       return { dot0: false, dot1: false, dot2: false, dot3: !state.dot3, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot4":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: !state.dot4, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot5":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: !state.dot5, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot6":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: !state.dot6, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot7":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: !state.dot7, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot8":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: !state.dot8, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot9":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: !state.dot9, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot10":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: !state.dot10, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot11":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: !state.dot11, dot12: false, dot13: false, dot14: false, dot15: false };
  //     case "dot12":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: !state.dot12, dot13: false, dot14: false, dot15: false };
  //     case "dot13":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: !state.dot13, dot14: false, dot15: false };
  //     case "dot14":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: !state.dot14, dot15: false };
  //     case "dot15":
  //       return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: !state.dot15 };
  //     default:
  //       return initialState;
  //   }
  // }

  // Parameter Naming:
  // The underscore _ is a common convention in JavaScript to indicate that the first parameter is intentionally unused. 
  // In this case, it's the value of the element in the array, which is undefined since Array.from creates an array of undefined elements.
  // By using _, the intention is clear: you are not interested in the value of the array elements, only in their indices.

  // With Initial Value
  // The empty object {} is passed as the second argument to reduce.
  // This means that the accumulator acc starts as an empty object.
  // The reduce function then populates this object with keys (dot0, dot1, ..., dot15), each set to false.

  const initialState = Array.from({ length: 16 }, (_, i) => `dot${i}`).reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {});

  // The syntax [action.type] uses bracket notation to compute the property name dynamically.
  // This allows you to use the value of action.type (e.g., "dot0", "dot1", etc.) as the key in the returned object.
  // Example: If action.type is "dot0", this will create or update the property dot0 in the returned object.
  const reducer = (state, action) => {
    return { ...initialState, [action.type]: !state[action.type] };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const showDetails = (index) => (element) => {
    dispatch({ type: `dot${index}` });
  }
  const resetDotsState = () => {
    for (let i = 0; i < dot.current.length; i++) {
      dot.current[i].classList.remove("hide")
      shiningDot.current[i].classList.remove("show");
      textBox.current[i].classList.remove("show");
    }
  }

  // Helper function to get condition data
  // const getConditionArea = (index) => {
  //   if (conditionsData && conditionsData[index]) {
  //     return conditionsData[index].area;
  //   }
  //   return null;
  // };

  // const getConditionDetails = (index) => {
  //   if (conditionsData && conditionsData[index]) {
  //     return conditionsData[index].details;
  //   }
  //   return null;
  // };

  // const getConditionName = (index) => {
  //   if (conditionsData && conditionsData[index] && conditionsData[index].details) {
  //     return conditionsData[index].details.name;
  //   }
  //   return null;
  // };

  // const getConditionQuestions = (index) => {
  //   if (conditionsData && conditionsData[index] && conditionsData[index].details) {
  //     return conditionsData[index].details.questions;
  //   }
  //   return null;
  // };

  const getConditionArea = (index) => {
    return conditionsData[index]?.area || null;
  };

  const getConditionDetails = (index) => {
    return conditionsData[index]?.details || null;
  };

  const getConditionName = (index) => {
    return conditionsData[index]?.details?.name || null;
  };

  const getConditionQuestions = (index) => {
    return conditionsData[index]?.details?.questions || [];
  };

  useEffect(() => {
    const fetchConditionsData = async () => {
      try {
        const response = await fetch(`/locales/${language}/conditions.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("data:", data.conditions);
        setConditionsData(data.conditions || []);
      } catch (error) {
        console.error("Error fetching conditions data:", error);
      }
    };

    fetchConditionsData();

  }, [location.pathname]);

  useEffect(() => {
    resetDotsState(); // Reset dots first

    let isStageChanged = false;

    // Check the current state of dots
    for (let x in state) {
      if (state[x]) {
        isStageChanged = true;
        let i = x.slice(3);
        console.log(`Showing details for dot ${i}`); // Debug log
        dot.current[i].classList.add("hide");
        shiningDot.current[i].classList.add("show");
        textBox.current[i].classList.add("show");
      }
    }

    if (!isStageChanged) {
      console.log("No stages changed, resetting dots."); // Debug log
      resetDotsState();
    }

  }, [state]);

  return (
    <Container>
      <Breadcrumb />
      <div className="bodychart">
        <div className='image_wrapper'>
          <img src={bodyChart} alt={t('common:body_chart')} title={t('common:body_chart')} />
          {/* <img src={process.env.PUBLIC_URL + '/bodychart.png'} alt="body chart"></img> */}
        </div>
        {list.map(x => (
          <div key={x}>
            <div className="dots" id={`dot${x}`} ref={el => dot.current[x] = el} onClick={() => dispatch({ type: `dot${x}` })}>
              <img src={dotImg} alt={t('dot')} />
              {/* <img src={process.env.PUBLIC_URL + '/dot.png'} alt={`dot${x}`}></img> */}
            </div>
            <div className="shining_dots" id={`shining_dot${x}`} ref={el => shiningDot.current[x] = el} onClick={() => dispatch({ type: `dot${x}` })}>
              <img src={shiningDotImg} alt={t('common:shining_dot')} />
              {/* <img src={process.env.PUBLIC_URL + '/shining_dot.png'} alt={`shining_dot${x}`}></img> */}
            </div>
            <div className='textboxs' id={`box${x}`} ref={el => textBox.current[x] = el}>
              <div className='icon_wrapper'><FontAwesomeIcon icon={faTimes} onClick={() => dispatch({ type: `dot${x}` })} /></div>
              {/* <div className='content_wrapper'>
                <div className='title'>{t(getCondition(x).Q1)}</div>
                <div className='description'>
                  <ul>
                    <li>{t(getCondition(x).A1a)}</li>
                    {getCondition(x).A1b === undefined ? "" : <li>{t(getCondition(x).A1b)}</li>}
                    {getCondition(x).A1c === undefined ? "" : <li>{t(getCondition(x).A1c)}</li>}
                  </ul>
                </div>
                {getCondition(x).Q2 === undefined ? "" :
                  <>
                    <div className='title'>{t(getCondition(x).Q2)}</div>
                    <div className='description'>
                      {getCondition(x).example === undefined ? "" : <div className='subtitle'>{t(getCondition(x).example)}</div>}
                      <ul>
                        <li>
                          <div className='subtitle'>{t(getCondition(x).A2a)}</div>
                          {getCondition(x).A2ai === undefined ? "" :
                            <ul>
                              {getCondition(x).A2ai === undefined ? "" : <li>{t(getCondition(x).A2ai)}</li>}
                              {getCondition(x).A2aii === undefined ? "" : <li>{t(getCondition(x).A2aii)}</li>}
                              {getCondition(x).A2aiii === undefined ? "" : <li>{t(getCondition(x).A2aiii)}</li>}
                              {getCondition(x).A2aiv === undefined ? "" : <li>{t(getCondition(x).A2aiv)}</li>}
                              {getCondition(x).A2av === undefined ? "" : <li>{t(getCondition(x).A2av)}</li>}
                              {getCondition(x).A2avi === undefined ? "" : <li>{t(getCondition(x).A2avi)}</li>}
                              {getCondition(x).A2avii === undefined ? "" : <li>{t(getCondition(x).A2avii)}</li>}
                              {getCondition(x).A2aviii === undefined ? "" : <li>{t(getCondition(x).A2aviii)}</li>}
                              {getCondition(x).A2aix === undefined ? "" : <li>{t(getCondition(x).A2aix)}</li>}
                            </ul>
                          }
                        </li>
                        {getCondition(x).A2b === undefined ? "" :
                          <li>
                            <div className='subtitle'>{t(getCondition(x).A2b)}</div>
                            {getCondition(x).A2bi === undefined ? "" :
                              <ul>
                                {getCondition(x).A2bi === undefined ? "" : <li>{t(getCondition(x).A2bi)}</li>}
                                {getCondition(x).A2bii === undefined ? "" : <li>{t(getCondition(x).A2bii)}</li>}
                              </ul>
                            }
                          </li>
                        }

                        {getCondition(x).A2c === undefined ? "" :
                          <li>
                            <div className='subtitle'>{t(getCondition(x).A2c)}</div>
                            {getCondition(x).A2ci === undefined ? "" :
                              <ul>
                                {getCondition(x).A2ci === undefined ? "" : <li>{t(getCondition(x).A2ci)}</li>}
                                {getCondition(x).A2cii === undefined ? "" : <li>{t(getCondition(x).A2cii)}</li>}
                              </ul>
                            }
                          </li>

                        }
                      </ul>
                      {getCondition(x).example1 === undefined ? "" : <div className='subtitle'>{t(getCondition(x).example1)}</div>}
                      {getCondition(x).A2a1 === undefined ? "" :
                        <>
                          <ul>
                            <li>{t(getCondition(x).A2a1)}</li>
                            {getCondition(x).A2a1i === undefined ? "" :
                              <ul>
                                <li>{t(getCondition(x).A2a1i)}</li>
                              </ul>
                            }
                            {getCondition(x).A2b1 === undefined ? "" : <li>{t(getCondition(x).A2b1)}</li>}
                          </ul>
                        </>
                      }
                    </div>
                  </>
                }
                {getCondition(x).Q3 === undefined ? "" :
                  <>
                    <div className='title'>{t(getCondition(x).Q3)}</div>
                    <div className='description'>
                      <ul>
                        <li>{t(getCondition(x).A3a)}</li>
                        {getCondition(x).A3b === undefined ? "" : <li>{t(getCondition(x).A3b)}</li>}
                        {getCondition(x).A3c === undefined ? "" : <li>{t(getCondition(x).A3c)}</li>}
                      </ul>
                    </div>
                  </>
                }
                {getCondition(x).Q4 === undefined ? "" :
                  <>
                    <div className='title'>{t(getCondition(x).Q4)}</div>
                    <div className='description'>
                      <ul>
                        <li>
                          {t(getCondition(x).A4a)}
                          {getCondition(x).A4ai === undefined ? "" :
                            <ul>
                              {getCondition(x).A4ai === undefined ? "" : <li>{t(getCondition(x).A4ai)}</li>}
                              {getCondition(x).A4aii === undefined ? "" : <li>{t(getCondition(x).A4aii)}</li>}
                              {getCondition(x).A4aiii === undefined ? "" : <li>{t(getCondition(x).A4aiii)}</li>}
                              {getCondition(x).A4aiv === undefined ? "" : <li>{t(getCondition(x).A4aiv)}</li>}
                              {getCondition(x).A4av === undefined ? "" : <li>{t(getCondition(x).A4av)}</li>}
                            </ul>
                          }
                        </li>
                        {getCondition(x).A4b === undefined ? "" :
                          <li>
                            {t(getCondition(x).A4b)}
                            {getCondition(x).A4bi === undefined ? "" :
                              <ul>
                                {getCondition(x).A4bi === undefined ? "" : <li>{t(getCondition(x).A4bi)}</li>}
                                {getCondition(x).A4bii === undefined ? "" : <li>{t(getCondition(x).A4bii)}</li>}
                              </ul>
                            }
                          </li>
                        }
                        {getCondition(x).A4c === undefined ? "" : <li>{t(getCondition(x).A4c)}</li>}
                      </ul>
                    </div>
                  </>
                }
              </div> */}

              <div className='content_wrapper'>
                {/* <div className='title'>
                  {getConditionName(x) || t('common:no_name_available')}
                </div> */}
                <div className='area'>
                  {getConditionArea(x) ? (
                    <div>{t(getConditionArea(x))}</div>
                  ) : (
                    <div>{t('common:no_area_available')}</div>
                  )}
                </div>
                {getConditionQuestions(x).map((qna, index) => (
                  <div key={index} className='question-answer'>
                    <div className='question'>{qna.Q}</div>
                    <div className='answer'>
                      {/* Check if A is an array */}
                      {Array.isArray(qna.A) ? (
                        <ul>
                          {qna.A.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        // If A is not an array, it can be a string or an object
                        typeof qna.A === 'object' ? (
                          <>
                            {qna.A.whiplash && qna.A.whiplash.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Whiplash</div>
                                <ul>
                                  {qna.A.whiplash.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.overuse && qna.A.overuse.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Overuse</div>
                                <ul>
                                  {qna.A.overuse.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.mother_thumb && qna.A.mother_thumb.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For mother's thumb</div>
                                <ul>
                                  {qna.A.mother_thumb.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.carpal_tunnel_syndrome && qna.A.carpal_tunnel_syndrome.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Carpal tunnel syndrome</div>
                                <ul>
                                  {qna.A.carpal_tunnel_syndrome.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.hip_osteoarthritis && qna.A.hip_osteoarthritis.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Hip osteoarthritis</div>
                                <ul>
                                  {qna.A.hip_osteoarthritis.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.knee_osteoarthritis && qna.A.knee_osteoarthritis.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Knee osteoarthritis</div>
                                <ul>
                                  {qna.A.knee_osteoarthritis.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.patellofemoral_pain_syndrome && qna.A.patellofemoral_pain_syndrome.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Patellofemoral pain syndrome</div>
                                <ul>
                                  {qna.A.patellofemoral_pain_syndrome.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.plantar_fasciitis && qna.A.plantar_fasciitis.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Plantar fasciitis</div>
                                <ul>
                                  {qna.A.plantar_fasciitis.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.fat_pad_contusion && qna.A.fat_pad_contusion.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Fat pad contusion</div>
                                <ul>
                                  {qna.A.fat_pad_contusion.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {qna.A.calcaneal_stress_fracture && qna.A.calcaneal_stress_fracture.length > 0 && (
                              <div>
                                <div className='mb-3 fw-bold'>For Calcaneal stress fracture</div>
                                <ul>
                                  {qna.A.calcaneal_stress_fracture.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {/* Fallback message if neither has answers */}
                            {(!qna.A.whiplash || qna.A.whiplash.length === 0) &&
                              (!qna.A.overuse || qna.A.overuse.length === 0) &&
                              (!qna.A.mother_thumb || qna.A.mother_thumb.length === 0) &&
                              (!qna.A.carpal_tunnel_syndrome || qna.A.carpal_tunnel_syndrome.length === 0) &&
                              (!qna.A.hip_osteoarthritis || qna.A.hip_osteoarthritis.length === 0) &&
                              (!qna.A.knee_osteoarthritis || qna.A.knee_osteoarthritis.length === 0) &&
                              (!qna.A.patellofemoral_pain_syndrome || qna.A.patellofemoral_pain_syndrome.length === 0) &&
                              (!qna.A.plantar_fasciitis || qna.A.plantar_fasciitis.length === 0) &&
                              (!qna.A.fat_pad_contusion || qna.A.fat_pad_contusion.length === 0) &&
                              (!qna.A.calcaneal_stress_fracture || qna.A.calcaneal_stress_fracture.length === 0) &&
                              <div>{t('common:no_answer_available')}</div>}
                          </>
                        ) : (
                          <div>{qna.A}</div> // If A is a string, display it directly
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Conditions