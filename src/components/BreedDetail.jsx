import React, { createContext, useState, useEffect } from 'react';

export const BreedContext = createContext();

export function BreedProvider({ children }) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [breedImage, setBreedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // <-- новое состояние
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBreeds() {
      setIsLoading(true);
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        setBreeds(Object.keys(data.message));
        setError(null);
      } catch (err) {
        setError('Ошибка загрузки пород собак.');
      } finally {
        setIsLoading(false);
      }
    }
    fetchBreeds();
  }, []);

  async function selectBreed(breed) {
    setIsLoading(true);
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const data = await res.json();
      setSelectedBreed(breed);
      setBreedImage(data.message);
      setError(null);
    } catch {
      setError('Ошибка при загрузке изображения породы.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BreedContext.Provider
      value={{
        breeds,
        selectedBreed,
        breedImage,
        selectBreed,
        setSelectedBreed,
        isLoading,
        error,
        setError
      }}
    >
      {children}
    </BreedContext.Provider>
  );
}
