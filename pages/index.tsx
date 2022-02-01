import MoviesCollection from "pages/detail/components/MoviesCollection";
import { IMovie } from "interfaces/MoviesInterface";
import Layout from "layouts/Layout";
import { useEffect, useState } from "react";

const URL_MOVIES = "https://api.tvmaze.com/search/shows?q=girls";

const DmiMovies = () => {
  const [moviesArray, setMoviesArray] = useState<IMovie[]>([]);

  const orderMovies = (movies: IMovie[]) => {
    return movies.sort((a: IMovie, b: IMovie) => {
    if (
      a?.show !== undefined &&
      b?.show !== undefined &&
      a?.show?.image?.medium !== undefined &&
      b?.show?.image?.medium === undefined
    ) {
      return -1;
    }
    return 0;
  })
}
  
  useEffect(() => {
    fetch(URL_MOVIES)
      .then((res)=>res.json())
      .then((movies: IMovie[]) => {
        const orderedMovies = orderMovies(movies)
        setMoviesArray(orderedMovies);
    });
  }, []);

  return (
    <Layout>
      <MoviesCollection movies={moviesArray} />
    </Layout>
  );
};

export default DmiMovies;
