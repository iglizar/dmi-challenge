import { useEffect, useState } from "react";
import TopRatedMovie from "components/TopRatedMovie";
import AllMovies from "components/AllMovies";
import MainPageSection from "pages/detail/components/MainPageSection";
import { IMovie } from "interfaces/MoviesInterface";

function MoviesCollection({ movies= [] }: { movies: IMovie[]  }) {
  const [topMovie, setTopMovie] = useState<IMovie>();

  const getFeaturedMovie = (data: IMovie[]) => {
    const filtered = data.filter((movie) => movie.show.rating.average !== null);
    let maxObj = filtered.reduce((max: any, obj: any) =>
      max.show.rating.average > obj.show.rating.average ? max : obj
    );
    return maxObj;
  };

  useEffect(() => {
    if (movies.length == 0) { return;}
    const featuredMovie = getFeaturedMovie(movies);
    setTopMovie(featuredMovie);
  }, [movies]);

  return (
    <>
      <MainPageSection title="Top rated movie">
        <TopRatedMovie topMovie={topMovie} />
      </MainPageSection>
      <MainPageSection title="All movies">
        <AllMovies
          movies={movies.filter((obj: IMovie) => {
            return obj.show.id !== topMovie?.show.id;
          })}
        />
      </MainPageSection>
    </>
  );
}

export default MoviesCollection;
