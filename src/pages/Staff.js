import { useParams, useNavigate, useLocation } from "react-router-dom"
import { getPhysiotherapist, getPhysiotherapists, deletePhysiotherapist, getPhysiotherapistByName, getPhysiotherapistBySymbol } from "../PhysiotherapistInfo"
import Container from "react-bootstrap/Container"
// import "./staff.scss"
import parse from 'html-react-parser'
import { useTranslation, Trans } from 'react-i18next'

const Staff = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let staff = getPhysiotherapistBySymbol(params.staffId);
  const {t} = useTranslation();
  console.log(location, params, staff);
  // const summaryLines = staff.summary.map(lineKey => t(lineKey)).join(" "); // Join with a space or any other delimiter
  const summaryLines = (staff.summary ? staff.summary.map(lineKey => t(lineKey)).join(" ") : "");
  return (
    <>
      <Container>
        <div className="flexbox">
          <div className="image_wrapper">
            <img src={staff.photo} alt={t(staff.name)} />
          </div>
          <div className="content">
            <h1 className="name">{t(staff.name)}</h1>
            <div className="title">{t(staff.title)}</div>
            <p>{summaryLines}</p>
          </div>
        </div>
        {/* <button
          onClick={() => {
            deletePhysiotherapist(staff.pid);
            navigate("/meet-our-team" + location.search);
          }}
        >
          Delete
        </button> */}
      </Container>
    </>
  );
}

export default Staff;