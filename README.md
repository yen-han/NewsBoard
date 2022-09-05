# News Board   
   
News board project displays a list of news articles from [News API](https://newsapi.org/). It shows 5 articles on each page. By clicking the title of the article, it directly moves to the hosting website. The articles can be searched by a topic including general, business, health and technology.    
   
React, CSS and Rest API are used to complete the project.    
   
    
## Features   
- Rest API   
The articles are requested using 'axios.get' method from [News API](https://newsapi.org/). API is re-fetched when the user selects a specific topic.   
   
- Pagination    
Pagination is implemented using 'react-paginate'. Array of articles is sliced by every 5 articles. Depending on the number of page is clicked, the page shows different 5 articles. 
   

## How to run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

