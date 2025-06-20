import React, { createContext, useState, useEffect } from 'react';

export const BreedContext = createContext();

export function BreedProvider({ children }) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Функция загрузки списка пород
  useEffect(() => {
    async function fetchBreeds() {
      setLoading(true);
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        setBreeds(Object.keys(data.message));
        setError(null);
      } catch (err) {
        setError('Ошибка при загрузке пород собак');
      } finally {
        setLoading(false);
      }
    }
    fetchBreeds();
  }, []);

  return (
    <BreedContext.Provider value={{ breeds, selectedBreed, setSelectedBreed, loading, error }}>
      {children}
    </BreedContext.Provider>
  );
}
