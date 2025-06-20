import React, { useEffect, useState, useContext } from 'react';
import { BreedContext } from '../context/BreedContext';

export default function BreedDetail() {
  const { selectedBreed, setSelectedBreed } = useContext(BreedContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedBreed) return;

    async function fetchImage() {
      setLoading(true);
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
        const data = await res.json();
        setImage(data.message);
        setError(null);
      } catch {
        setError('Ошибка загрузки изображения');
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [selectedBreed]);

  if (!selectedBreed) return null;

  return (
    <div>
      <h2>{selectedBreed}</h2>
      {loading && <p>Загрузка изображения...</p>}
      {error && <p>{error}</p>}
      {image && <img src={image} alt={`Порода ${selectedBreed}`} width="400" />}
      <br />
      <button onClick={() => setSelectedBreed(null)}>Назад к списку</button>
    </div>
  );
}
