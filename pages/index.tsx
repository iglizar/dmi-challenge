import { useEffect, useState } from "react";
import TopRatedMovie from "@/components/TopRatedMovie";
import AllMovies from "@/components/AllMovies";
import MainPageSection from "@/components/MainPageSection";
import { IMovie } from "@/interfaces/MoviesInterface";
import Layout from "@/layouts/Layout";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const URL_MOVIES = "https://api.tvmaze.com/search/shows?q=girls";
  
const DmiMovies = () => {
  const { data:movies, error } = useSWR(URL_MOVIES, fetcher);
  const [topMovie, setTopMovie] = useState<IMovie>();
  const [inOrderMovies, setInOrderMovies] = useState<IMovie[]>([]);

  const getFeaturedMovie = () => {
    const filtered = movies?.filter((movie) => movie.show.rating.average !== null);
    const maxObj = filtered?.reduce((max: any, obj: any) =>
      max.show.rating.average > obj.show.rating.average ? max : obj
    );
    return maxObj;
  };
  
  const getInOrderMovies = () => {
    return movies?.sort((a: IMovie, b: IMovie) => {
      if (
        a?.show !== undefined &&
        b?.show !== undefined &&
        a?.show?.image?.medium !== undefined &&
        b?.show?.image?.medium === undefined
      ) {
        return -1;
      }
      return 0;
    }).filter((obj: IMovie) => {
        return obj.show.id !== topMovie?.show.id;
    });
}

  useEffect(() => {
    if (movies?.length == 0) return;
    const featuredMovie = getFeaturedMovie(movies);
    setTopMovie(featuredMovie);
    console.log(featuredMovie);
    const inOrderMovies = getInOrderMovies(movies);
    setInOrderMovies(inOrderMovies);  
  }, [movies]);

  return (
    <Layout>
      <MainPageSection title="Top rated movie">
        <TopRatedMovie movie={topMovie} />
      </MainPageSection>
      <MainPageSection title="All movies">
        <AllMovies
          movies={inOrderMovies}
        />
      </MainPageSection>
    </Layout>
  );
};

export default DmiMovies;

