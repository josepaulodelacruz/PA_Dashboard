import { useEffect, useCallback, useMemo } from 'react';
import { GeoJSON, useMapEvents } from 'react-leaflet';
import Fuse from 'fuse.js';
import { geojsonData } from '@/Constants/GeoJson';

const ZOOM_OFFSET = 2;
const ZOOM_LEVEL = 16;
const SEARCH_DELAY = 500;
const DEFAULT_STYLE = { color: "#00595c", weight: 5 };

const GeoJsonComponent = ({ data, onClick, search = "" }) => {
  // Initialize Fuse instance once
  const fuseInstance = useMemo(() => new Fuse(geojsonData, {
    keys: ['name'],
    threshold: 0.3, // Add threshold for better matching
    distance: 100
  }), []); // Empty dependency array as geojsonData is imported

  const map = useMapEvents({
    locationfound(e) {
      console.log('Location found:', e);
    }
  });

  const flyToLocation = useCallback((position, targetZoom = ZOOM_LEVEL) => {
    const currentZoom = map.getZoom();
    map.setZoom(currentZoom - ZOOM_OFFSET);
    
    setTimeout(() => {
      map.flyTo(position, targetZoom);
    }, SEARCH_DELAY);
  }, [map]);

  const handleFeatureClick = useCallback((feature) => {
    onClick?.(feature);
  }, [onClick, flyToLocation]);

  const onEachFeature = useCallback((feature, layer) => {
    layer.on({
      click: () => handleFeatureClick(feature)
    });
  }, [handleFeatureClick]);

  const handleSearch = useCallback((searchTerm) => {
    if (!searchTerm) {
      return;
    }

    const results = fuseInstance.search(searchTerm);
    if (results.length > 0 && results[0].item.position) {
      flyToLocation(results[0].item.position);
    }
  }, [fuseInstance, flyToLocation]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(search);
    }, SEARCH_DELAY);

    return () => clearTimeout(timeoutId);
  }, [search, handleSearch]);

  return (
    <GeoJSON
      data={data}
      style={DEFAULT_STYLE}
      onEachFeature={onEachFeature}
    />
  );
};

export default GeoJsonComponent;
