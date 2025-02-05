import './App.css';
import MovieCard from './components/MovieCard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
    </>
  )
}

function Text({message}) {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default App
