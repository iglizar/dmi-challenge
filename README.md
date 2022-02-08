# TV Show - Next JS - Typescript - FrontEnd Technical Test
The website design was inspired by popular movie platforms.

## Public URL
[DMI TV Show URL](https://dmichallenge.netlify.app/)

## Task
The task is to build a TV show interface using the TVMaze API.
The platform must:
> List the show with reduced information.
> Click on a show and see more information.

## Proposed Solutions
#### Layout Structure:
Classic Header - Body - Footer structure. 
The body of the page is made so that different categories can be added if desired. Currently an example is shown with the movie that has the best rating.
#### Data: 
Fetched from [TV Maze API](https://api.tvmaze.com/search/shows?q=girls).
#### Interface: 
All data is validated with Typescript. The interfaces are located in the 'interfaces' folder.
#### Navigation: 
The navigation of the pages is managed with NextJS. It has a main screen and another page called '[id]' which loads the movie requested by the user.
#### Style:
Tailwind CSS. The website adapts to any screen type.

## Run the project

First, install all the required dependencies:

```
npm install
```

Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
