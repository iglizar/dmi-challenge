import { useState } from "react";
import { IMovie } from "interfaces/MoviesInterface";
import CalendarIcon from "components/CalendarIcon";
import CoverNotFound from "components/CoverNotFound";

const MovieThumbnail = ({
  movie,
  imageType = "medium",
  animated = false,
}: {
  movie: IMovie;
  imageType?: string;
  animated?: boolean;
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col rounded-lg shadow-xl ${
        animated
          ? "cursor-pointer hover:scale-101 hover:border-opacity-80 hover:shadow-2xl transition duration-400 w-full"
          : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {movie?.show.image ? (
        <img
          src={
            imageType == "medium"
              ? movie.show.image?.medium
              : movie.show.image?.original
          }
        />
      ) : (
        <>
          <div className="self-center w-11/12 text-center text-xs">
            <CoverNotFound />
            Preview Unavailable
          </div>
          <div className="flex flex-col w-full text-white">
            <div className="flex h-full justify-center font-bold text-xl">
              {movie.show?.name}
            </div>
            <div className="flex h-full justify-center italic text-lg text-yellow-200">
              {movie.show?.status}
            </div>
          </div>
        </>
      )}
      {hover && animated && movie.show?.image && (
        <div className="absolute px-1 py-1">
          <CalendarIcon movie={movie} />
        </div>
      )}
    </div>
  );
};

export default MovieThumbnail;
