import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes'

const episodeData = [
    {
        "id": 2993,
        "url": "https://www.tvmaze.com/shows/2993/stranger-things",
        "name": "Stranger Things",
        "type": "Scripted",
        "language": "English",
        "genres": [
          "Drama",
          "Fantasy",
          "Science-Fiction"
        ],
        "status": "Running",
        "runtime": 60,
        "premiered": "2016-07-15",
        "officialSite": "https://www.netflix.com/title/80057281",
        "schedule": {
          "time": "",
          "days": []
        },
        "rating": {
          "average": 8.7
        },
        "weight": 98,
        "network": null,
        "webChannel": {
          "id": 1,
          "name": "Netflix",
          "country": null
        },
        "externals": {
          "tvrage": 48493,
          "thetvdb": 305288,
          "imdb": "tt4574334"
        },
        "image": {
          "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
          "original": "https://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
        },
        "summary": "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
        "updated": 1604039949,
        "_links": {
          "self": {
            "href": "https://api.tvmaze.com/shows/2993"
          },
          "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/1576476"
          }
        },
        "_embedded": {
          "episodes": [
            {
              "id": 553946,
              "url": "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
              "name": "Chapter One: The Vanishing of Will Byers",
              "season": 1,
              "number": 1,
              "type": "regular",
              "airdate": "2016-07-15",
              "airtime": "",
              "airstamp": "2016-07-15T12:00:00+00:00",
              "runtime": 60,
              "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
              },
              "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
              "_links": {
                "self": {
                  "href": "https://api.tvmaze.com/episodes/553946"
                }
              }
            },
            {
              "id": 578663,
              "url": "https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
              "name": "Chapter Two: The Weirdo on Maple Street",
              "season": 1,
              "number": 2,
              "type": "regular",
              "airdate": "2016-07-15",
              "airtime": "",
              "airstamp": "2016-07-15T12:00:00+00:00",
              "runtime": 60,
              "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
              },
              "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
              "_links": {
                "self": {
                  "href": "https://api.tvmaze.com/episodes/578663"
                }
              }
            },
            {
              "id": 578664,
              "url": "https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",
              "name": "Chapter Three: Holly, Jolly",
              "season": 1,
              "number": 3,
              "type": "regular",
              "airdate": "2016-07-15",
              "airtime": "",
              "airstamp": "2016-07-15T12:00:00+00:00",
              "runtime": 60,
              "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"
              }
            }
          ]
        }
      }
    ];

test("re-renders correctly with list of episodes", () => {
    // arrange - usually when we render the component and set up data

    const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />)

    // act (re-render the component with episodes data passed in)
    rerender(<Episodes episodes={episodeData}/>)
    const episodes = getAllByTestId(/episode/i)

    // assert
    expect(episodes).toHaveLength(1)
})

// test("displays an error message if an error is passed in", () => {
//     // render the component with no error (don't forget to pass in teh missions prop)
//     // assert taht there is no error message displayed
//     // re-render the component WITH an error passed down 
//     // assert that it now renders the error message 

//     // arrange
//     const { rerender, queryByText, getByText } = render(
//         <Episodes episodes={[]} />
//         );
//        screen.debug()

//     // act
//     const errors = queryByText(/some error message/i);
//     expect(errors).toBeNull();
//     rerender(<Episodes episodes={[]} error="Some error message"/>)

//     // assert
//     const error = getByText(/some error message/i)
//     expect(error).toBeInTheDocument();
// })

test("Episodes.js rerenders", () => {
    const { rerender } = render(<Episodes episodes={[]} />);
    const updatedData = [
      {
        id: 1,
        season: 1,
        name: "Episode 1",
      },
      {
        id: 2,
        season: 1,
        name: "Episode 2",
      },
      {
        id: 3,
        season: 1,
        name: "Episode 3",
      },
    ];
    rerender(<Episodes episodes={updatedData} />);
  });