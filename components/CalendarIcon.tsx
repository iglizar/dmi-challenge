import { IMovie } from "@/interfaces/MoviesInterface";

const CalendarIcon = ({ movie }: { movie: IMovie  }) => {
  return (
    <div className="flex flex-col justify-between border-white">
      <div className="flex rounded rounded-b-none m-0 flex-wrap justify-center w-full bg-red-400 text-xs md:text-md px-3">
        Every {movie?.show.schedule.days}
      </div>
      <div className="flex rounded rounded-t-none justify-center w-full bg-gray-100 mt-0 text-black font-bold text-xs md:text-md">
        {movie?.show.schedule.time ? movie.show.schedule.time:"Every hour"}
      </div>
    </div>
  );
};

export default CalendarIcon;
