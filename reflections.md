## Introduction

This website was created to show my knowledge of basic webdevelopment. I decided not to use fanzy external JavaScript packages or frameworks even though I was very tempted to just use a basic `create-react-app`. The aplication spesification descriped a simple system, and I didn't wanna over-engineer it.

## Improvement

The system is perfect and need no impovements! ... That's what i would say in a perfect world. Of course the system can improve, both in functionality and implimetation.

### Functionality

1. Make use of the `callAtMidnight` function to automaticly send API requests to fetch competition matches for the competition the user allredy has open in tab menue. This will help users who are using the application at midnight.

2. Send an API request to fetch all matches in the avalible competitions. This data is fetched after the page has loaded, and would show as a table under the tab menue. This functionallity will show the users that there is usefull infromation on this site, and they don't have to click on what competition they are want to see. This would also save me form making alot of requests to the endpoint. (Important)

3. Users can click on a match to get more details.

### Implementation 
1. localStorage (っ °Д °;)っ My implementation of the API data heavily uses localStorage. This is not optimal for users who uses an extentions that disable this feature, but this is not a consern for most users.

2. To many API requests! As i mentioned briefly in "functionality" there are potentially alot of API requests. To solve this issue I used localStorage and stored the date the data was fetched, BUT with alot of users API request the amount could be a problem... To solve this i would have used somthing like Gatsby and build the site every on day with Netlify. With this i could implement a fully working and scalable site width the free API that could serve alot of users FREE!


