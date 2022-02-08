import MovieThumbnail from "@/components/thumbnails/MovieThumbnail";
import { IMovie } from '@/interfaces/MoviesInterface';
import DescriptionCard from './DescriptionCard';

const DetailCard = ({movie}: {movie: IMovie | undefined}) => {
  if (!movie) return <></>;
  
  return (
    <div className="flex flex-col flex-wrap mx-auto justify-center bg-blue-custom-200 h-full text-white">
      <div className="self-center w-4/12">
        <MovieThumbnail
          movie={movie}
          imageType="original"
        />
      </div>
      <div className="flex flex-col md:h-full justify-center mr-0 md:mr-5">
        <DescriptionCard movie={movie} extendDetails />
      </div>
    </div>
  );
};

export default DetailCard
