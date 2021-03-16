import { GenreResponseProps, MovieProps } from '../App'
import { Button } from './Button';
import '../styles/sidebar.scss';

interface SideBarProps {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  setSelectedGenreId(id: number): void;

}

export function SideBar(props: SideBarProps) {
  const {genres, selectedGenreId, setSelectedGenreId} = props;

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map((genre: {id: any; title: any; name: any;}) => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  </nav>
  );
}