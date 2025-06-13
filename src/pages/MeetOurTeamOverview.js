import React from 'react'
import Container from "react-bootstrap/Container"
import { Link, useParams, useNavigate, useLocation } from "react-router-dom"
import { getPhysiotherapist, getPhysiotherapists, deletePhysiotherapist, getPhysiotherapistBySymbol } from "../PhysiotherapistInfo"
import { useTranslation, Trans } from 'react-i18next'
import LocalizedPath from "../components/LocalizedPath"

const MeetOurTeamOverview = () => {
  let params = useParams();
  let Physiotherapists = getPhysiotherapists();
  // let staff = getPhysiotherapistBySymbol(params.staffId);
  console.log(Physiotherapists.length, params);
  const { t } = useTranslation(['common']);
  return (
    <>
      <Container>
        <h1>{t('common:header.meet_our_team')}</h1>
        <div className='card_wrapper'>
          {Physiotherapists.map((profile) => {
            return (
              <div className="card" key={profile.pid}>
                <Link to={LocalizedPath({path: `/meet-our-team/${profile.symbol}`})}>
                  <img src={profile.photo} alt={t(profile.name)}></img>
                  <div className="summary">
                    <div className="name">{t(profile.name)}</div>
                    <div className="title">{t(profile.title)}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  )
}

export default MeetOurTeamOverview