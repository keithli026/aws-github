import React from 'react';
import { Map } from '@vis.gl/react-google-maps';
import PoiMarkers from './PoiMarkers';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -37.842, 
  lng: 145.091
};

// Define the locations
const locations = [
  { key: 'blackburn', location: { lat: -37.8468, lng: 145.1553 }, name: 'Blackburn' },
  { key: 'blackburnNorth', location: { lat: -37.8430, lng: 145.1570 }, name: 'Blackburn North' },
  { key: 'blackburnSouth', location: { lat: -37.8460, lng: 145.1500 }, name: 'Blackburn South' },
  { key: 'boxHill', location: { lat: -37.8839, lng: 145.1350 }, name: 'Box Hill' },
  { key: 'boxHillNorth', location: { lat: -37.8830, lng: 145.1360 }, name: 'Box Hill North' },
  { key: 'boxHillSouth', location: { lat: -37.8820, lng: 145.1340 }, name: 'Box Hill South' },
  { key: 'burwood', location: { lat: -37.8497, lng: 145.1222 }, name: 'Burwood' },
  { key: 'burwoodEast', location: { lat: -37.8450, lng: 145.1300 }, name: 'Burwood East' },
  { key: 'forestHill', location: { lat: -37.8176, lng: 145.1741 }, name: 'Forest Hill' },
  { key: 'mitcham', location: { lat: -37.8167, lng: 145.1950 }, name: 'Mitcham' },
  { key: 'montAlbert', location: { lat: -37.8167, lng: 145.1100 }, name: 'Mont Albert' },
  { key: 'montAlbertNorth', location: { lat: -37.8081, lng: 145.1139 }, name: 'Mont Albert North' },
  { key: 'nunawading', location: { lat: -37.8170, lng: 145.1769 }, name: 'Nunawading' },
  { key: 'surreyHills', location: { lat: -37.8167, lng: 145.1000 }, name: 'Surrey Hills' },
  { key: 'vermont', location: { lat: -37.8360, lng: 145.1930 }, name: 'Vermont' },
  { key: 'vermontSouth', location: { lat: -37.8667, lng: 145.1833 }, name: 'Vermont South' },
  { key: 'ashburton', location: { lat: -37.8670, lng: 145.1030 }, name: 'Ashburton' },
  { key: 'balwyn', location: { lat: -37.8091, lng: 145.0789 }, name: 'Balwyn' },
  { key: 'balwynNorth', location: { lat: -37.7936, lng: 145.0864 }, name: 'Balwyn North' },
  { key: 'camberwell', location: { lat: -37.8350, lng: 145.0710 }, name: 'Camberwell' },
  { key: 'canterbury', location: { lat: -37.8240, lng: 145.0800 }, name: 'Canterbury' },
  { key: 'deepdene', location: { lat: -37.8121, lng: 145.0664 }, name: 'Deepdene' },
  { key: 'glenIris', location: { lat: -37.8560, lng: 145.0590 }, name: 'Glen Iris' },
  { key: 'hawthorn', location: { lat: -37.8228, lng: 145.0350 }, name: 'Hawthorn' },
  { key: 'hawthornEast', location: { lat: -37.8248, lng: 145.0464 }, name: 'Hawthorn East' },
  { key: 'kew', location: { lat: -37.8060, lng: 145.0330 }, name: 'Kew' },
  { key: 'kewEast', location: { lat: -37.7976, lng: 145.0538 }, name: 'Kew East' },
  { key: 'ashwood', location: { lat: -37.8670, lng: 145.1030 }, name: 'Ashwood' },
  { key: 'chadstone', location: { lat: -37.8877, lng: 145.0952 }, name: 'Chadstone' },
  { key: 'clayton', location: { lat: -37.9150, lng: 145.1293 }, name: 'Clayton' },
  { key: 'glenWaverley', location: { lat: -37.8781, lng: 145.1648 }, name: 'Glen Waverley' },
  { key: 'hughesdale', location: { lat: -37.8944, lng: 145.0775 }, name: 'Hughesdale' },
  { key: 'huntingdale', location: { lat: -37.9140, lng: 145.0820 }, name: 'Huntingdale' },
  { key: 'monashUniversity', location: { lat: -37.9078, lng: 145.1340 }, name: 'Monash University' },
  { key: 'mountWaverley', location: { lat: -37.8771, lng: 145.1294 }, name: 'Mount Waverley' },
  { key: 'mulgrave', location: { lat: -37.9262, lng: 145.1723 }, name: 'Mulgrave' },
  { key: 'nottingHill', location: { lat: -37.9042, lng: 145.1417 }, name: 'Notting Hill' },
  { key: 'oakleigh', location: { lat: -37.9130, lng: 145.1020 }, name: 'Oakleigh' },
  { key: 'oakleighEast', location: { lat: -37.8996, lng: 145.1057 }, name: 'Oakleigh East' },
  { key: 'oakleighSouth', location: { lat: -37.9242, lng: 145.0915 }, name: 'Oakleigh South' },
  { key: 'wheelersHill', location: { lat: -37.8990, lng: 145.1830 }, name: 'Wheelers Hill' },
  { key: 'malvern', location: { lat: -37.8590, lng: 145.0270 }, name: 'Malvern' },
  { key: 'malvernEast', location: { lat: -37.8739, lng: 145.0425 }, name: 'Malvern East' },
  { key: 'toorak', location: { lat: -37.8417, lng: 145.0144 }, name: 'Toorak' },
  { key: 'armadale', location: { lat: -37.8550, lng: 145.0310 }, name: 'Armadale' },
  { key: 'southYarra', location: { lat: -37.8383, lng: 144.9915 }, name: 'South Yarra' },
  { key: 'prahran', location: { lat: -37.8511, lng: 144.9932 }, name: 'Prahran' },
  { key: 'windsor', location: { lat: -37.8500, lng: 144.9940 }, name: 'Windsor' },
  { key: 'bulleen', location: { lat: -37.7667, lng: 145.0833 }, name: 'Bulleen' },
  { key: 'doncaster', location: { lat: -37.7870, lng: 145.1230 }, name: 'Doncaster' },
  { key: 'doncasterEast', location: { lat: -37.7890, lng: 145.1500 }, name: 'Doncaster East' },
  { key: 'donvale', location: { lat: -37.7891, lng: 145.1749 }, name: 'Donvale' },
  { key: 'parkOrchards', location: { lat: -37.7778, lng: 145.2140 }, name: 'Park Orchards' },
  { key: 'templestowe', location: { lat: -37.7518, lng: 145.1343 }, name: 'Templestowe' },
  { key: 'templestoweLower', location: { lat: -37.7639, lng: 145.1123 }, name: 'Templestowe Lower' },
  { key: 'warrandyte', location: { lat: -37.7500, lng: 145.2333 }, name: 'Warrandyte' },
  { key: 'warrandyteSouth', location: { lat: -37.7585, lng: 145.2453 }, name: 'Warrandyte South' },
  { key: 'wongaPark', location: { lat: -37.7390, lng: 145.2670 }, name: 'Wonga Park' },
  { key: 'ringwoodNorth', location: { lat: -37.8000, lng: 145.2333 }, name: 'Ringwood North' },
];

const MapComponent = () => {
  const mapOptions = {
    streetViewControl: false, // Disable the Pegman control
  }
  return (
    <Map
      options={mapOptions}
      defaultZoom={13}
      defaultCenter={center}
      mapId='DEMO_MAP_ID'
      style={containerStyle}
    >
      <PoiMarkers pois={locations} />
    </Map>
  );
};

export default MapComponent;