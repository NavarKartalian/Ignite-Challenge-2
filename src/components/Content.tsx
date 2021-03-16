import { GenreResponseProps, MovieProps } from '../App'
import { MovieCard } from './MovieCard';
import '../styles/content.scss';

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  const {movies, selectedGenre} = props;

  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}