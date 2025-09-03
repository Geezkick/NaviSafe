import React from 'react';
export default function Feed({ hazards = [], onConfirm }) {
return (
<div>
<h3>Community Feed</h3>
{hazards.map(h => (
<div key={h.id} className="card" style={{marginBottom:8}}>
<div style={{display:'flex',justifyContent:'space-between'}}>
<div><strong>{h.category}</strong> — {new Date(h.createdAt).toLocaleString()}</div>
<div><span className="hazard-dot"/></div>
</div>
<p>{h.description}</p>
<div>
<button onClick={() => onConfirm(h.id)} className="btn-primary">Confirm</button>
<span style={{marginLeft:12}}>{h.confirmations || 0} confirmations</span>
</div>
</div>
))}
</div>
);
}
