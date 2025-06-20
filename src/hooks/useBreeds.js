import { useContext, useEffect, useState } from 'react';
import { BreedContext } from '../context/BreedContext';

export const useBreeds = () => {
  const { breeds, selectedBreed, setSelectedBreed, loading, error } = useContext(BreedContext);
  const [breedImage, setBreedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(null);

  useEffect(() => {
    if (!selectedBreed) {
      setBreedImage(null);
      return;
    }

    const fetchBreedImage = async () => {
      setImageLoading(true);
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
        const data = await res.json();
        setBreedImage(data.message);
        setImageError(null);
      } catch (err) {
        setImageError('Ошибка загрузки изображения породы');
      } finally {
        setImageLoading(false);
      }
    };

    fetchBreedImage();
  }, [selectedBreed]);

  return {
    breeds,
    selectedBreed,
    setSelectedBreed,
    loading,
    error,
    breedImage,
    imageLoading,
    imageError,
  };
};
