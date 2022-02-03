## Introduction

This website was created to show my knowledge of basic webdevelopment. I decided not to use fanzy external JavaScript packages or frameworks even though I was very tempted to just use a basic `create-react-app`. The aplication spesification descriped a simple system and I didn't wanna over-engineer it.

## Improvement

The system is perfect and need no impovements! ... That's what i would say in a perfect world. Of course the system can improve, both in functionality and implimetation.

### Functionality

1. Make use of `callAtMidnight` function to automaticly send API requests to fetch matches for the competition user allredy has loaded. This will help users who are using the application at midnight.

2. On loading the site, there should be a table with all comming matches. This functionallity will show the users that there is usefull infromation on this site, and they don't have to click on what competition they are want to see. This would also save me form making alot of requests to the endpoint. (Important)

3. Users can click on a match to get more details.

### Implementation

1. **To many API requests!** As i mentioned briefly in "functionality" there are potentially alot of API requests. To cinda solve this issue I used localStorage and stored the date the data was fetched. BUT with alot of users there would be alot more API requests... To solve this I would have implemented static site generation with _Gatsby_ and _Netlify_. This solution would be mutch more scalible beacouse it would only require me to fetch the data once per day. (This would also resolve an issue with my private API-key beeing public)

2. localStorage (っ °Д °;)っ My implementation of the API data heavily relies on localStorage. This is not optimal for users who have disable this feature, but this is not a consern for most users.
