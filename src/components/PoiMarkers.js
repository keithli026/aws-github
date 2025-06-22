import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AdvancedMarker, useMap, Pin } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const PoiMarkers = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  // Click handler using useCallback
  const handleClick = useCallback((ev) => {
    if (!map) return;
    if (!ev.latLng) return;
    console.log('Marker clicked:', ev.latLng.toString());
    map.panTo(ev.latLng);
  }, [map]);

  return (
    <>
      {props.pois.map(poi => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={handleClick}
          title={poi.name}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default PoiMarkers;