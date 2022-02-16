![Animated gif with art of two people of color holding trans pride signs that read 'our time now' and 'for trans lives'](/src/images/ourtimeisnow.gif)

# Project Overview

## Project Links

- Placeholder for GitHub link when live

## Project Description

This project is a resource to locate and save all-gender bathrooms.  Users can use a form to put in their location, which returns a list of all-gender bathrooms in that area.  Users can then click on an item in the results to obtain more information (exact address, whether the bathroom is also ADA accessible and/or has a changing table).  From that information, users can save the bathroom to their list of locations, which can be accessed through a separate route.  The saved list contains additional information, such as specific directions or comments, when applicable.

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

- [Wireframe: Mobile](https://i.imgur.com/rWpiaQj.jpg)
- [Wireframe: Tablet](https://i.imgur.com/eb0OVeu.jpg)
- [Wireframe: Desktop](https://i.imgur.com/IL2kPaG.jpg)
- [React Architecture](https://i.imgur.com/FL7Sak0.jpg)


### MVP/PostMVP

#### MVP

- Fully functional restroom search by keyword
	- User inputs keyword (e.g., name of city or state)
	- Search returns result list
- Clicking an item in the results list populates a card with additional details
- Card has a button to Add to My List, which adds the result to the My List route
- My List route displays all results added to the My List, in card format, with a button to remove
- Navbar with options that link to their corresponding routes

#### PostMVP

- "About" route that leads to an explanation of why all-gender bathrooms are important
- Additional instructions for obtaining more specific search results
- Clear search results button
- My List card contains additional information

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


Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create React app and files for all components | H | 2 | 1.5 |
| Basic Navbar & Footer | H | 2 | 1 |
| Set up basic React routing | H | 1 | 30 min |
| Make restroom API call through search form, parse important data | H | 4 | 3 |
| Display results | H | 3 | 2 |
| Create detailed results card | H | 3 | 4 |
| Create My List card | H | 2 | 1 |
| CSS for Restroom Search page | H | 4 | 3 |
| CSS for My List page | H | 2 | 1 |
| Create "About" page with more info | L | 2 | 2 |
| Add search functionality for loading and clear search | L | 4 | 4 |
| Total | H | 32 | |

## Additional Libraries
N/A

## Citations of Outside Sources

### Case 1: Changing outline color on input/textarea focus

To change the `outline color` on my `input:focus` and `textarea:focus` in CSS, I followed this guide from StackOverflow: [link](https://stackoverflow.com/questions/16156594/how-to-change-border-color-of-textarea-on-focus).

### Case 2: Using `useEffect` to set up `localStorage`

To save the data from the form submit when changing between my routes, I followed this guide from Gautham Vijayan: [link](https://dev.to/gautham495/how-to-persist-data-to-localstorage-in-react-with-hooks-6ma) -- see below for code snippet.

### Case 3: Using images in React

I followed this guide [link](https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react) to import images into React in order to use local images instead of internet hosting.

## Code Snippet

Here are some brief code snippets of functionality that I'm proud of and a brief description.

Using `useEffect` to set up `localStorage` to store form data between routes:
```js
useEffect(()=>{

        const restroomData = localStorage.getItem('restroomData')
        
        if(restroomData){
          setRestrooms(JSON.parse(restroomData))
         }
        
        },[])
        
    useEffect(()=>{
        
          localStorage.setItem('restroomData',JSON.stringify(restrooms))
        
        })
```

Using ternary statements to show/hide text and icons
```js
 <div className="list-card" key={id}>
    <li className="li-my-list, bold">{restroom.name}</li>
    <li className="li-my-list">{restroom.street}</li>
    <li className="li-my-list">{restroom.city}</li>
    <li className="li-my-list">{restroom.state}</li>
    <li className="li-my-list">{restroom.directions ? "Directions: " + restroom.directions : ''}</li>
    <li className="li-my-list">{restroom.comment ? "Comment: " + restroom.comment : ''}</li>
    <div className="icon-container">
        <img src={wheelchair} alt="Icon of an active wheelchair user" className="card-icon" title="Accessible" style={{ display: (restroom.accessible === true) ? "block" : "none" }} />
        <img src={transsymbol} alt="Icon of the transgender symbol" className="card-icon" title="Unisex / Gender Neutral" style={{ display: (restroom.unisex === true) ? "block" : "none" }} />
        <img src={child} alt="Icon of a child" className="card-icon" title="Changing Table" style={{ display: (restroom.changing_table === true) ? "block" : "none" }} />
    </div>
```
