import { render, screen, waitFor } from '@testing-library/react'
import DmiMovies from '../pages/index'
import TopRatedMovie from '@/components/TopRatedMovie';

const DEMO_FEATURED_MOVIE = {
    "score": 0.69965124,
    "show": {
        "id": 1073,
        "url": "https://www.tvmaze.com/shows/1073/bomb-girls",
        "name": "Bomb Girls",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Romance",
            "War"
        ],
        "status": "Ended",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2012-01-04",
        "ended": "2013-04-29",
        "officialSite": null,
        "schedule": {
            "time": "20:00",
            "days": [
                "Monday"
            ]
        },
        "rating": {
            "average": 8.8
        },
        "weight": 47,
        "network": {
            "id": 67,
            "name": "Global",
            "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
            }
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": 30600,
            "thetvdb": 254378,
            "imdb": "tt1955311"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/7/17549.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/7/17549.jpg"
        },
        "summary": "<p>Set in the 1940s, <b>Bomb Girls</b> tells the remarkable stories of the women who risked their lives in a munitions factory building bombs for the Allied forces fighting on the European front. The series delves into the lives of these exceptional women – peers, friends and rivals – who find themselves thrust into new worlds and changed profoundly as they are liberated from their home and social restrictions.</p>",
        "updated": 1592496010,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/1073"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/108024"
            }
        }
    }
}

describe('DmiMovies', () => {
  it('it should render the heading', () => {
    render(<DmiMovies />)

    const heading = screen.getByText("DMI Movies");

    expect(heading).toBeInTheDocument()
  }),
  it('it should render the footer', () => {
    render(<DmiMovies />)

    const footer = screen.getByText("DMI TECHNICAL TEST");

    expect(footer).toBeInTheDocument();
  }),
  it('it should render the top rated movie correctly', () => {
    render(<TopRatedMovie movie={DEMO_FEATURED_MOVIE}/>)
    
    const title = screen.queryAllByText("Bomb Girls");

    expect(title.length).toBeGreaterThanOrEqual(1);
  })
})