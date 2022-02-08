import Link from "next/link";
import EachThumbnail from "@/components/thumbnails/MovieThumbnail";
import { IMovie } from "@/interfaces/MoviesInterface";

const AllMovies = ({ movies=[] }: { movies: IMovie[] }) => {
  return (
    <div className="flex text-white justify-around flex-wrap grid grid-cols-2 md:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11">
      {movies.map((movie: IMovie, i: number) => (
        <Link key={i} href={`/detail/${movie.show.id}`}>
          <a className="flex justify-center">
            <EachThumbnail movie={movie} animated />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllMovies;
