import React, { useContext } from 'react';
import { BreedContext } from '../context/BreedContext';

export default function BreedList() {
  const { breeds, setSelectedBreed, loading, error } = useContext(BreedContext);

  if (loading) return <p>Загрузка пород...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {breeds.map(breed => (
        <li
          key={breed}
          style={{ cursor: 'pointer', marginBottom: '0.5rem', borderBottom: '1px solid #ccc' }}
          onClick={() => setSelectedBreed(breed)}
        >
          {breed}
        </li>
      ))}
    </ul>
  );
}
