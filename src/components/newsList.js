import NewsItem from './newsItem'
//import React, { useEffect,  useState } from 'react'
//import Axios from 'axios'


const NewsList = ({articles, loading}) => {
    // const[articles, setArticles] = useState([]);

    // useEffect(()=> {
    //     const getArticles = async()=>{
    //         const res= await Axios.get(
    //             "https://newsapi.org/v2/top-headlines?country=us&apiKey=3646d87ef0104aecb3697a03108d06af");
            
    //         setArticles(res.data.articles);
    //         console.log(res);
    //     };
    //     getArticles();
    // }, []);
    if (loading) {
        return <h2>Loading...</h2>;
      }
    return (
    <div className="news-list">
        {articles.map(article =>(
            <NewsItem 
            title={article.title} 
            description={article.description} 
            url={article.url} 
            urlToImage={article.urlToImage}/>
        ))}
    </div>
    );

};
export default NewsList