import genresIcon from '../assets/icons/genres.png';
import homeIcon from '../assets/icons/home.png';
import movesIcon from '../assets/icons/moves.png';
import searchIcon from '../assets/icons/search.png';
import TVShowsIcon from '../assets/icons/tv_shows.png';
import watchLaterIcon from '../assets/icons/watch_later.png';
import { MenuItems } from '../types';

export const menuItems: MenuItems[] = [
  {
    label: 'Search',
    path: '/search',
    icon: searchIcon,
  },
  {
    label: 'Home',
    path: '/',
    icon: homeIcon,
  },
  {
    label: 'TV Shows',
    path: '/TV-shows',
    icon: TVShowsIcon,
  },
  {
    label: 'Moves',
    path: '/moves',
    icon: movesIcon,
  },
  {
    label: 'Genres',
    path: '/genres',
    icon: genresIcon,
  },
  {
    label: 'Watch Later',
    path: '/watch-later',
    icon: watchLaterIcon,
  },
];
