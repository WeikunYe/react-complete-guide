import React, { useState, useEffect, useCallback } from "react";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMoviesHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await fetch(
				"https://react-complete-guide-1d7f9-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
			);
			if (!res.ok) {
				throw new Error("Wrong");
			}
			const data = await res.json();

      const loadedMovies = [];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText:data[key].openingText,
					releaseDate: data[key].releaseDate,
        })
      }

			setMovies(loadedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMoviesHandler();
	}, [fetchMoviesHandler]);

	const addMovieHandler = async (movie) => {
		const res = await fetch(
			"https://react-complete-guide-1d7f9-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
			{
				method: "POST",
				body: JSON.stringify(movie),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const data = await res.json();
		console.log(data);
	};

	let content = <p>Found no movies.</p>;
	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}
	if (error) {
		content = <p>Error</p>;
	}
	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;
