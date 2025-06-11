import React, { useEffect, useRef, useReducer } from 'react'
import Container from "react-bootstrap/Container"
import Breadcrumb from "../components/Breadcrumb"
import { getCondition } from './ConditionInfo'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import bodyChart from "../assets/images/bodychart.png"
import dotImg from "../assets/images/dot.png"
import shiningDotImg from "../assets/images/shining_dot.png"

const Conditions = () => {
  const { t } = useTranslation(['common','conditions']);
  const dot = useRef([]);
  const shiningDot = useRef([]);
  const textBox = useRef([]);
  const list = [...Array(16).keys()];
  const initialState = {
    dot0: false,
    dot1: false,
    dot2: false,
    dot3: false,
    dot4: false,
    dot5: false,
    dot6: false,
    dot7: false,
    dot8: false,
    dot9: false,
    dot10: false,
    dot11: false,
    dot12: false,
    dot13: false,
    dot14: false,
    dot15: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "dot0":
        return { dot0: !state.dot0, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot1":
        return { dot0: false, dot1: !state.dot1, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot2":
        return { dot0: false, dot1: false, dot2: !state.dot2, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot3":
        return { dot0: false, dot1: false, dot2: false, dot3: !state.dot3, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot4":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: !state.dot4, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot5":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: !state.dot5, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot6":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: !state.dot6, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot7":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: !state.dot7, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot8":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: !state.dot8, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot9":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: !state.dot9, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot10":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: !state.dot10, dot11: false, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot11":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: !state.dot11, dot12: false, dot13: false, dot14: false, dot15: false };
      case "dot12":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: !state.dot12, dot13: false, dot14: false, dot15: false };
      case "dot13":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: !state.dot13, dot14: false, dot15: false };
      case "dot14":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: !state.dot14, dot15: false };
      case "dot15":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false, dot8: false, dot9: false, dot10: false, dot11: false, dot12: false, dot13: false, dot14: false, dot15: !state.dot15 };
      default:
        return initialState;
    }
  }
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

  useEffect(() => {
    let isStageChanged = false;
    for (let x in state) {
      if (state[x]) {
        isStageChanged = true;
        let i = x.slice(3);
        resetDotsState();
        dot.current[i].classList.add("hide")
        shiningDot.current[i].classList.add("show");
        textBox.current[i].classList.add("show");
      }
    }
    if (!isStageChanged) {
      resetDotsState();
    }
  });
  return (
    <Container>
      <Breadcrumb />
      <div className="bodychart">
        <div className='image_wrapper'>
          <img src={bodyChart} alt={t('common:body_chart')} title={t('common:body_chart')}/>
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
              <div className='content_wrapper'>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Conditions