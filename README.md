# TV Show - React - Next JS - Typescript - FrontEnd Technical Test
The website was designed based on the current movie platforms.

## URL
[DMI TV Show URL](https://dmichallenge.netlify.app/).

## Task
The task is to build a TV show interface using the TVMaze API.
The platform must:
> List the show with reduced information.
> Click on a show and show more information.

## Proposed Solutions
#### Layout Structure:
Classic Header - Body - Footer structure. 
The body of the page is made so that different categories can be added if desired. Currently an example is shown with the movie that had the best rating.
#### Data: 
Fetched from [TV Maze API](https://api.tvmaze.com/search/shows?q=girls).
#### Interface: 
All data is validated with Typescript. The interfaces are in the 'interfaces' folder.
#### Navigation: 
The navigation of the pages is managed with NextJS. It has a main screen and another page called '[id]' which loads the movie requested by the user.
#### Style:
Tailwind CSS. The website adapts to any screen type.






## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
