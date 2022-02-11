![Gif of two people holding trans pride signs](/images/ourtimeisnow.gif)

# Project Overview

## Project Links

- Placeholder for GitHub link when live

## Project Description

For this project, I plan to make a resource to locate and save all-gender bathrooms.  Users will be able to use a form to put in their location, which will return a list of all-gender bathrooms in that area.  Users can then click on an item in the results to obtain more information (exact address, whether the bathroom is also ADA accessible and/or has a changing table).  From that information, users can save the bathroom to their list of locations, which can be accessed through a separate route.

## API

[RefugeRestrooms](https://www.refugerestrooms.org/api/docs/)


```
{
    "id": 55788,
    "name": "The C.H.A.P Store",
    "street": "2020 Highway 13 East",
    "city": "Burnsville",
    "state": "MN",
    "accessible": true,
    "unisex": true,
    "directions": "Go in and turn right",
    "comment": "This is an Evangelical thrift store that plays Christian music, but they have converted their two single-stall restrooms to gender neutral. Free day-old baked goods are often available in the coffee area near the restrooms. ",
    "latitude": 44.7900831,
    "longitude": -93.2432451,
    "created_at": "2020-03-05T23:32:07.491Z",
    "updated_at": "2020-04-14T21:09:46.803Z",
    "downvote": 0,
    "upvote": 0,
    "country": "US",
    "changing_table": true,
    "edit_id": 55788,
    "approved": true
  }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe: Mobile](https://i.imgur.com/rWpiaQj.jpg)
- [Wireframe: Tablet](https://i.imgur.com/eb0OVeu.jpg)
- [Wireframe: Desktop](https://i.imgur.com/IL2kPaG.jpg)
- [React Architecture](https://i.imgur.com/FL7Sak0.jpg)


### MVP/PostMVP

#### MVP
- Fully functional restroom search by city
	- User inputs city name
	- Search returns result list
- Clicking an item in the results list populates a card with additional details
- Card has a button to Add to My List, which adds the result to the My List route
- My List page displays all results added to the My List, in card format, with a button to remove
- Navbar with options that link to their corresponding routes

#### PostMVP

- "About" route that leads to an explanation of why all-gender bathrooms are important
- More specific search functionality (instruct users to input city and state, not just city)

## Components

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Routes for content |
| Restroom Search Form | Renders the search form |
| Restroom Search Results | Renders restroom search results via API call |
| Result Detail Card | Renders a card with additional details from the result and "add to list" button |
| My List | Renders user's results they've added to their list, with a "remove from list" button |
| About | Renders an "about all-gender restrooms" route (Post MVP) |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 2 | | |
| Basic Navbar & Footer | H | 2 | | |
| Hamburger Nav Bar | H | 3 | | |
| Set up basic React routing | H | 1 | | |
| Make restroom API call through search form, parse important data | H | 4 | |  |
| Display results | H | 3 | | |
| Create detailed results card | H | 3 | | |
| Create My List card | H | 2 | | |
| CSS for Restroom Search page | H | 4 | | |
| CSS for My List page | H | 2 | | |
| Create "About" page with more info | L | 2 | | |
| Change search to take in both city and state | L | 4 | | |
| Total | H | 32 | | |

## Additional Libraries
TBD

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```

```
...
```

```
