import MovieThumbnail from '@/components/thumbnails/MovieThumbnail';
import { IMovie } from '@/interfaces/MoviesInterface';
import DescriptionCard from "@/components/card/DescriptionCard";

const TopRatedMovie = ({ movie }: { movie: IMovie | undefined }) => {
  if (!movie) return <></>;

  return (
    <div className="flex flex-col sm:flex-row w-full justify-around space-x-5">
      <div className="w-1/2 sm:w-auto self-center">
        <MovieThumbnail
          movie={movie}
          imageType="original"
        />
      </div>
        <DescriptionCard movie={movie}/>
      </div>
  );
}

export default TopRatedMovie
