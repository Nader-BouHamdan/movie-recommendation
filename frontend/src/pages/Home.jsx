import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "HTF", release_date: "2020" },
        { id: 2, title: "Nader", release_date: "2000" },
        { id: 3, title: "Mr. Clause", release_date: "2008" },
    ];

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );

}

export default Home