import './App.css';
import { BreedProvider } from './context/BreedContext';
import BreedList from './components/BreedList';
import BreedDetail from './components/BreedDetail';
import Footer from './components/Footer';

export default function App() {
  return (
    <BreedProvider>
      <h1>Породы собак</h1>
      <BreedDetail />
      <BreedList />
      <Footer />
    </BreedProvider>
  );
}
