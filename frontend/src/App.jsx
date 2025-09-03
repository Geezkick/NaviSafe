import React, { useEffect, useState } from 'react';
import MapView from './components/MapView';
import HazardForm from './components/HazardForm';
import Feed from './components/Feed';
import axios from 'axios';
import { socket } from './api/socket';


export default function App(){
const [hazards, setHazards] = useState([]);


useEffect(()=>{
const load = async ()=>{
const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'}/api/hazards`);
setHazards(res.data);
}
load();


socket.on('hazard:created', (h) => setHazards(prev => [h, ...prev]));
socket.on('hazard:confirmed', ({ id, confirmations }) => setHazards(prev => prev.map(h => h.id === id ? { ...h, confirmations } : h)));


return ()=>{ socket.off('hazard:created'); socket.off('hazard:confirmed'); }
},[]);


const onCreated = (h) => setHazards(prev => [h, ...prev]);
const onConfirm = async (id) => {
await axios.post(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'}/api/hazards/${id}/confirm`);
}


return (
<div>
<header className="app-header">
<div style={{fontWeight:700}}>NaviSafe</div>
<div style={{marginLeft:'auto'}}>v0.1</div>
</header>
<main style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:16, padding:16}}>
<div>
<MapView hazards={hazards} />
<Feed hazards={hazards} onConfirm={onConfirm} />
</div>
<aside>
<HazardForm onCreated={onCreated} />
</aside>
</main>
</div>
);
}
