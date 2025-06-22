import React from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';

const GoogleMapsProvider = ({ children }) => {
  return (
    <APIProvider
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      onLoad={() => { console.log('Maps API has loaded.'); }}
    >
      {children}
    </APIProvider>
  );
};

export default GoogleMapsProvider;