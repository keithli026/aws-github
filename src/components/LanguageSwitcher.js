import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import i18n from './i18n'; // Adjust path as needed
// import "../GlobalStyle"
import { lg } from "../GlobalStyle"

// Example lngs object (replace with your actual configuration)
const lngs = {
  en: { nativeName: 'English', shortName: 'EN', path: 'en' },
  tc: { nativeName: '繁體中文', shortName: '繁', path: 'tc' },
};

const defaultLanguage = 'en'; // Define the default language

function LanguageSwitcher() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // console.log("lg", lg);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    let newPath = lngs[lng].path; // Get the path segment for the language

    if (newPath === undefined) {
      console.error(`No path defined for language: ${lng}`);
      return;
    }

    // Extract the original path after the language code
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let originalPathAfterLanguage = '';

    if (pathSegments.length > 0 && Object.keys(lngs).includes(pathSegments[0])) {
      originalPathAfterLanguage = '/' + pathSegments.slice(1).join('/'); // Get path after language code
    } else {
      originalPathAfterLanguage = location.pathname; // Use the full path if no language code is present
    }

    // Preserve any existing query parameters
    const searchParams = new URLSearchParams(location.search);

    // Construct the new URL
    const newUrl = `/${newPath}${originalPathAfterLanguage}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    // console.log("new url: ", newUrl, location.search);
    navigate(newUrl);
  };

  // Effect to set initial language based on URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean); // Split pathname into segments
    // console.log("path segements: ", pathSegments);
    let lng = defaultLanguage; // Default to English

    // If the first segment is a known language, set the language
    if (pathSegments.length > 0 && Object.keys(lngs).includes(pathSegments[0])) {
      lng = pathSegments[0];
    }

    i18n.changeLanguage(lng);

    // If the URL doesn't have a language prefix, add it
    if (!pathSegments.length || !Object.keys(lngs).includes(pathSegments[0])) {
      navigate(`/${lng}${location.pathname}${location.search}`, { replace: true }); // Use replace to avoid adding to history
    }
  }, [location.pathname, location.search, navigate]);

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button key={lng} onClick={() => changeLanguage(lng)}>
          {/* {lngs[lng].nativeName} */}
          {windowWidth > lg ? lngs[lng].shortName : lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;