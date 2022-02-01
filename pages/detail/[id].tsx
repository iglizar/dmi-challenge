
import { useEffect, useState } from "react";
import DetailCard from "components/card/DetailCard";
import { ShowInterface,IMovie } from "interfaces/MoviesInterface";
import Layout  from "layouts/Layout";

const URL_MOVIE = "https://api.tvmaze.com/shows/";

export const getServerSideProps = async (context: any) => {
  return {
    props: { id: context.params.id }
  };
};

const MovieDetailPage = ({ id }: { id: string }) => {
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetch(URL_MOVIE + id)
      .then((res) => res.json())
      .then((movie: ShowInterface) => {
        setMovie({show: movie})
      });
  }, []);


  return (
    <Layout>
      <DetailCard movie={movie} />
    </Layout>
  );
};

export default MovieDetailPage;
