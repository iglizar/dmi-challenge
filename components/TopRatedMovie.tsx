import MovieThumbnail from 'components/thumbnails/MovieThumbnail';
import { IMovie} from 'interfaces/MoviesInterface';
import DescriptionCard from "./card/DescriptionCard";

const TopRatedMovie = ({ topMovie }: { topMovie: IMovie | undefined }) => {
  if (!topMovie) return <></>;

  return (
    <div className="flex flex-col sm:flex-row w-full justify-around space-x-5">
      <div className="w-1/2 sm:w-auto self-center">
        <MovieThumbnail
          movie={topMovie}
          imageType="original"
        />
      </div>
        <DescriptionCard movie={topMovie}/>
      </div>
  );
}

export default TopRatedMovie
