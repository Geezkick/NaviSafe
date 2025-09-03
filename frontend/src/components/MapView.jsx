import React, { useEffect, useRef, useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function MapView({ hazards = [] }) {
const [viewport, setViewport] = useState({ latitude: -1.286389, longitude: 36.817223, zoom: 12 });
return (
<div style={{ height: '70vh' }}>
<MapGL
initialViewState={viewport}
style={{ width: '100%', height: '100%' }}
mapStyle="mapbox://styles/mapbox/dark-v10"
mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
onMove={evt => setViewport(evt.viewState)}
>
{hazards.map(h => (
<Marker key={h.id} longitude={h.lng} latitude={h.lat} anchor="center">
<div className="hazard-dot" title={h.category}></div>
</Marker>
))}
</MapGL>
</div>
);
}
