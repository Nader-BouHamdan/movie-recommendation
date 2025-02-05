import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Nader's Film", release_date: "2024"}}/>
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
