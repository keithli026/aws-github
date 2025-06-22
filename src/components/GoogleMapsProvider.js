// import React, { createContext, useEffect, useState } from 'react';
// // import { LoadScript } from '@react-google-maps/api';
// import { APIProvider } from '@vis.gl/react-google-maps';

// export const GoogleMapsContext = createContext();

// const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use environment variable
// const libraries = ['marker']; // Specify any libraries you need

// const GoogleMapsProvider = ({ children }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const checkGoogleMapsLoaded = () => {
//       if (window.google && window.google.maps) {
//         setIsLoaded(true);
//       }
//     };

//     window.addEventListener('load', checkGoogleMapsLoaded);

//     return () => {
//       window.removeEventListener('load', checkGoogleMapsLoaded);
//     };
//   }, []);

//   const handleLoadError = () => {
//     setError('Failed to load Google Maps. Please try again later.');
//   };

//   return (

//     <APIProvider
//       googleMapsApiKey={googleMapsApiKey}
//       version="weekly"
//       // libraries={libraries}
//       // onLoad={() => setIsLoaded(true)}
//       // onError={handleLoadError} // Handle load errors
//     >
//       {/* <GoogleMapsContext.Provider value={{ isLoaded, error }}>
//         {error ? <div>{error}</div> : children}
//       </GoogleMapsContext.Provider> */}
//     </APIProvider>
//   );
// };

// export default GoogleMapsProvider;



import React, { createContext, useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';

// export const GoogleMapsContext = createContext();

const GoogleMapsProvider = ({ children }) => {
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      // onLoad={() => { setIsLoaded(true); console.log('Maps API has loaded.'); }}
    >
         {children}
      {/* <GoogleMapsContext.Provider value={{ isLoaded }}>
        {children}
      </GoogleMapsContext.Provider> */}
    </APIProvider>
  );
};

export default GoogleMapsProvider;