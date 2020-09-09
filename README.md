## grow-and-bloom-nursery

Grow and Bloom Nursery

## Description

This is a mock website for a plant nursery. There will be a section that contains the nursery and contact information. In another section, users will be able to see the selection of plants the nursery has in stock and find more information on each one. If the nursery does not have the user's wanted plant they will be able to create a request using a form. The website will have functionality for both mobile and desktop.

## Wireframes
![mobile](https://iili.io/dmj7Lu.png)
![tablet](https://iili.io/dmjaqb.md.png)
![desktop](https://iili.io/dmj5Xe.md.png)


## Component Hierarchy
- Frame
  - Navigation
    - Title
    - Selection
  - Feature Photo
      - Page Title
  - Plant Container 
    - Image

## Data Sample from Airtable API

```
records: [
  {
    createdTime: "2020-09-03T19:10:02.000Z",
    fields: {
      description: "The golden pothos is also known in Britain as the devils ivy. It's a climbing species that grows well indoors with the correct care given.",
      image: "https://www.houseplantsexpert.com/image-files/Devils_Ivy.jpg",
      inCart: ["recLZkEbfQHZux6Ag"],
      link: "https://www.houseplantsexpert.com/golden-pothos-plant.html",
      name: "golden pothos",
      petSafe: "Toxic to cats, dogs and horses.",
      scientificName: "Epipremnum aureum",
    },
    id: "recAALmHuvySX3Y6f"
  }
];
```

## MVP 
- View more information upon clicking plant.
- Route to home and about page.
- Request form implemented. 

## Post-MVP
- Allow users to add items to cart.

## SWOT Analysis
#### Strengths
- I have a good understanding of how to work with JSX.
- I can use the map function and know React components need unique keys.

#### Weaknesses 
- Understanding the component lifecycle.
- Knowing where to put pieces of code. i.e. styled components, useState and useEffect.

#### Opportunities
- When writing code there is bound to be a time where I run into something I will not understand and I have the support to learn a new concept. 
- Use this for a portfolio piece and display my new skills in the job market.

#### Threats
- Website may not work in all browsers.
- Technology is no longer supported. 

#### Ways to overcome
- As I come across concepts I am unsure of I will research and ask for help. 
- I will ensure that I test and plan for different browsers.
- I will make sure my technology is updated and test after each update. 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sep 4| Prompt / Wireframes / Timeframes | Complete
|Sep 5| Project Approval / Core Application Structure | Complete
|Sep 6| Get Data / Routes & Links | Complete
|Sep 7| Styling | Complete
|Sep 8| Create Form | Complete
|Sep 9| MVP | Complete
|Sep 9| Deployment | Complete
|Sep 10| Post-MVP | Incomplete
|Sep 11| Presentations | Incomplete