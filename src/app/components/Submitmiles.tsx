'use client';

import { useState } from "react";

export default function SubmitMilesForm() {
  const [name, setName] = useState('');
  const [miles, setMiles] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/miles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, miles }),
    });

    setName('');
    setMiles('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={miles} onChange={e => setMiles(e.target.value)} placeholder="Miles" />
      <button type="submit">Submit</button>
    </form>
  );
}
