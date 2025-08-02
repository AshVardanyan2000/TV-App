# React.js TV Application

## Task Description

Create a web app based on the given design using React.js. The app will function as a TV application, showcasing the following features:

### Pages
- **Home Page**
- **Home Page Menu**

The provided assets include:
- Images
- Videos
- JSON data for all necessary video information

### Main Features

#### 1. Main Menu with Icons
- The menu is located on the left side of the screen, displaying icons for:
    - Search
    - Home
    - TV Shows
    - Movies
    - Genres
    - Watch Later
- On hover, the menu expands with a floating animation (from left to right), and the background opacity transitions from 0% to 80%.
- When expanded, the menu displays user profile information, including icons and name, as well as additional menu options at the bottom (e.g., Language, Get Help, Exit).

#### 2. Main Featured Video
- The top-left section showcases the last featured movie.
- The featured block contains:
    - Video cover image
    - Category name (e.g., Movie)
    - Transparent PNG movie logo
    - Release year
    - MPA rating
    - Duration
    - Short description
    - Two buttons: Play and More Info

#### 3. Trending Now Section
- Displays a carousel of trending videos (maximum 50 items), sorted by the latest added or created.
- Initially, only the first 8 videos are visible, and users can scroll or drag to reveal more.
- The carousel only shows movie covers.

### User Interaction
- When a user clicks on a movie, the **Main Featured Video** section updates to display the selected movie's information (cover image, category, title, description).
- After clicking, the background of the featured section changes to a video player (without controls) after a 2-second delay. The video starts playing automatically using the URL from the JSON file.
- The movie ID is saved in `sessionStorage`, and on the next page refresh, the movie list is sorted so that the last clicked (or seen) video appears first, followed by the remaining movies in their default order.

### Design Files
- Adobe XD designs:
    - [Design 1](https://xd.adobe.com/view/dd63b338-292e-4e68-924e-157ad53f2151-8830/)
    - [Design 2](https://xd.adobe.com/view/a8d070e9-3db2-4834-bce7-e7dbcbb243da-fd83/)
