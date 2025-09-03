import React, { useState } from 'react';
import axios from 'axios';


export default function HazardForm({ onCreated }) {
const [category, setCategory] = useState('pothole');
const [description, setDescription] = useState('');
const [lat, setLat] = useState('');
const [lng, setLng] = useState('');


const submit = async (e) => {
e.preventDefault();
const payload = { lat: parseFloat(lat), lng: parseFloat(lng), category, description };
const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'}/api/hazards`, payload);
setDescription(''); setLat(''); setLng('');
onCreated && onCreated(res.data);
}


return (
<form onSubmit={submit} className="card">
<h3>Report hazard</h3>
<select value={category} onChange={e=>setCategory(e.target.value)}>
<option value="pothole">Pothole</option>
<option value="flood">Flooding</option>
<option value="broken_light">Broken streetlight</option>
<option value="dangerous_driver">Dangerous driver</option>
</select>
<input placeholder="lat" value={lat} onChange={e=>setLat(e.target.value)} />
<input placeholder="lng" value={lng} onChange={e=>setLng(e.target.value)} />
<textarea placeholder="description" value={description} onChange={e=>setDescription(e.target.value)} />
<button className="btn-primary" type="submit">Submit</button>
</form>
);
}
