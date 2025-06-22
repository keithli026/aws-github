import './custom.scss';
import "./components/i18n";
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LanguageSwitcher from './components/LanguageSwitcher';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from './pages/Staff';
// import Physiotherapists from './pages/Physiotherapists';
// import PhysiotherapistsOverview from './pages/physiotherapistsOverview';
// import Physiotherapist from './pages/Physiotherapist';
import MeetTheTeam from './pages/MeetTheTeam';
import Fees from './pages/Fees';
import FeesOverView from './pages/FeesOverView';
import Medicare from './pages/Medicare'
import PrivateHealthInsurance from './pages/PrivateHealthInsurance'
import MotorVehicleAccident from './pages/MotorVehicleAccident'
import DepartmentOfVeteransAffairs from './pages/DepartmentOfVeteransAffairs'
import WorkersCompensation from './pages/WorkersCompensation'
import HomeCarePackage from './pages/HomeCarePackage'
import NDIS from './pages/NDIS'
import Services from "./pages/Services";
import ServicesOverview from './pages/ServicesOverview';
import Acupuncture from './pages/Acupuncture';
import ManualTherapy from './pages/ManualTherapy';
import ExerciseRehabilitation from './pages/ExerciseRehabilitation';
import MassageTherapy from './pages/MassageTherapy';
// import ShockwaveTherapy from './pages/ShockwaveTherapy';
// import Electrotherapy from './pages/Electrotherapy';
import CuppingTherapy from './pages/CuppingTherapy';
import Conditions from "./pages/Conditions";
import Contact from "./pages/Contact";
import BookOnline from './pages/BookOnline';
import NoPage from "./pages/NoPage";
import MeetTheTeamOverview from './pages/MeetTheTeamOverview';
import ScrollToTop from './components/ScrollToTop';
import GoogleMapsProvider from './components/GoogleMapsProvider';

// import Testing from './pages/Testing';
// import TestingOverview from './pages/TestingOverview';
// import TestingContentPage from './pages/TestingContentPage';

function App() {
  const defaultLanguage = 'en'; // Or your default language

  return (
    <GoogleMapsProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            {/* Redirect root path to default language */}
            <Route path="/" element={<Navigate to={`/${defaultLanguage}`} replace />} />

            <Route path="/:lang" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              {/* <Route path="physiotherapists" element={<Physiotherapists />}>
            <Route index element={<PhysiotherapistsOverview />} />
            <Route path=":physiotherapistId" element={<Physiotherapist />} />
          </Route> */}
              <Route path="meet-the-team" element={<MeetTheTeam />}>
                <Route index element={<MeetTheTeamOverview />} />
                <Route path=":staffId" element={<Staff />} />
              </Route>
              <Route path="services" element={<Services />}>
                <Route index element={<ServicesOverview />} />
                <Route path="manual-therapy" element={<ManualTherapy />} />
                <Route path="acupuncture" element={<Acupuncture />} />
                <Route path="exercise-rehabilitation" element={<ExerciseRehabilitation />} />
                <Route path="massage-therapy" element={<MassageTherapy />} />
                {/* <Route path="shockwave-therapy" element={<ShockwaveTherapy />} />
              <Route path="electrotherapy" element={<Electrotherapy />} /> */}
                <Route path="cupping-therapy" element={<CuppingTherapy />} />
              </Route>
              <Route path="fees" element={<Fees />}>
                <Route index element={<FeesOverView />} />
                <Route path="medicare" element={<Medicare />} />
                <Route path="private-health-insurance" element={<PrivateHealthInsurance />} />
                <Route path="motor-vehicle-accident" element={<MotorVehicleAccident />} />
                <Route path="department-of-veterans-affairs" element={<DepartmentOfVeteransAffairs />} />
                <Route path="workers-compensation" element={<WorkersCompensation />} />
                <Route path="home-care-package" element={<HomeCarePackage />} />
                <Route path="ndis" element={<NDIS />} />
              </Route>
              <Route path="conditions" element={<Conditions />} />
              <Route path="contact" element={<Contact />} />
              {/* <Route path="book-online" element={<BookOnline />} /> */}
              {/* <Route path="testing" element={<Testing/>}>
              <Route index element={<TestingOverview/>}></Route>
              <Route path="testing-content-page" element={<TestingContentPage/>} />
            </Route> */}
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </GoogleMapsProvider>
  );
}

export default App;