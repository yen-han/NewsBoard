import React, { useEffect,  useState } from 'react'
import './App.css';
import NewsList from './components/newsList';
import Axios from 'axios'
import ReactPaginate from 'react-paginate'

function App() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [articlesPerPage] = useState(5);



const [selects, setSelects] = useState("general");
// const path="https://newsapi.org/v2/top-headlines?country=ca&category="
// const api = "&apiKey=3646d87ef0104aecb3697a03108d06af"
//setSelects("general")
//let url=path+selects+api;
  useEffect(()=> {
      const getArticles = async()=>{
        setLoading(true);
          const res= await Axios.get(
              "https://newsapi.org/v2/top-headlines?country=ca&apiKey=3646d87ef0104aecb3697a03108d06af");
          setArticles(res.data.articles);
          console.log(res);
          setLoading(false);
      };
      getArticles();
  }, []);


  const refetch = ()=>{
    setLoading(true);
    Axios.get(
        `https://newsapi.org/v2/top-headlines?country=ca&category=${selects}&apiKey=3646d87ef0104aecb3697a03108d06af`
        ).then(response=>setArticles(response.data.articles));
        setLoading(false);
  }

  // const indexOfLastPost = currentPage * articlesPerPage;
  // const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  // const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);
  const pagesVisited = currentPage * articlesPerPage;
  const currentArticles = articles.slice(pagesVisited, pagesVisited+articlesPerPage);

  //const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="App">
        <div id = "topic-wrapper">
        <label for="topics">By Topic </label>
        <h3>{selects}</h3>
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
          <option value="general">--------</option>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="health">Health</option>
          <option value="technology">Technology</option>
        </select>
        <input id="search" name="submit" type="submit" value="Search" onClick={refetch}/>
        </div> 
      <NewsList articles={currentArticles} loading={loading}/>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
    </div>
  );
}

export default App;
