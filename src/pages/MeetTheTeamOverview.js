import React from 'react'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import { getPhysiotherapists } from "../PhysiotherapistInfo"
import { useTranslation } from 'react-i18next'
import LocalizedPath from "../components/LocalizedPath"

const MeetTheTeamOverview = () => {
  let Physiotherapists = getPhysiotherapists();

  const { t } = useTranslation(['common']);
  return (
    <>
      <Container>
        <h1>{t('common:header.meet_the_team')}</h1>
        <div className='card_wrapper'>
          {Physiotherapists.map((profile) => {
            return (
              <div className="card" key={profile.pid}>
                <Link to={LocalizedPath({path: `/meet-the-team/${profile.symbol}`})}>
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

export default MeetTheTeamOverview