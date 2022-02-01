import { IMovie } from "interfaces/MoviesInterface";
import StarRatingComponent from "react-star-rating-component";
import CalendarIcon from "components/CalendarIcon";
import Link from "next/link";

const TextCardMovie = ({
  movie,
  extendDetails =false,
}: {
  movie: IMovie;
  extendDetails?: boolean;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col h-full">
        <div className="flex flex-col divide-y">
          <div className="w-full h-2/12 flex flex-row flex-wrap md:flex-nowrap justify-between py-2">
            <div className="flex whitespace-nowrap justify-center md:justify-start text-2xl md:text-3xl lg:text-4xl font-bold text-white uppercase">
              {movie?.show.name}
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-start md:justify-end">
              <div className="flex text-xl flex-wrap md:flex-nowrap items-center justify-start md:justify-end md:ml-2 md:pr-3 select-none">
                {movie.show.rating.average && (
                  <StarRatingComponent
                    name="rate movie"
                    value={Math.round((movie.show.rating.average * 10) / 2)}
                    editing={false}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-4/12 flex flex-col md:flex-row gap-y-4 md:space-y-0 tracking-wide text-white italic py-2 justify-between">
            {movie.show.premiered} • {movie.show.language} •{" "}
            {movie.show.genres.join(", ")}
            {movie.show.schedule.days.length > 0 && (
              <div className="self-end w-1/2 md:w-auto"><CalendarIcon movie={movie} /></div>
            )}
          </div>
        </div>
        <div className="flex flex-col pt-2 py-2 gap-y-3 w-full justify-between h-full md:leading-loose">
          <div
            className="content-start pr-5 md:pr-0 text-sm md:text-md lg:text-lg text-gray-300 h-full text-justify  content-center md:leading-6"
            dangerouslySetInnerHTML={{
              __html: movie.show.summary || "No summary available",
            }}
          ></div>
        </div>
      </div>
      <div className="self-end mt-6">
        <Link
          href={!extendDetails ? `/detail/${movie.show.id}` : movie?.show.url}
        >
          <a
            href={extendDetails ? movie?.show.url : ""}
            className="text-sm text-white p-3 link link-underline link-underline-black"
          >
            {!extendDetails ? "See more" : "Open in TV Maze"}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TextCardMovie;
