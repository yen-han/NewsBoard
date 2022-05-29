import React, { useEffect,  useState } from 'react'
import './App.css';
import NewsList from './components/newsList';
import Axios from 'axios'
//import Pagination from './components/pagination';
import ReactPaginate from 'react-paginate'

function App() {

  const[articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [articlesPerPage] = useState(5);
  const pagesVisited = currentPage * articlesPerPage;
  useEffect(()=> {
      const getArticles = async()=>{
        setLoading(true);
          const res= await Axios.get(
              "https://newsapi.org/v2/top-headlines?country=us&apiKey=3646d87ef0104aecb3697a03108d06af");
          
          setArticles(res.data.articles);
          console.log(res);
          setLoading(false);
      };
      getArticles();
  }, []);
  // const indexOfLastPost = currentPage * articlesPerPage;
  // const indexOfFirstPost = indexOfLastPost - articlesPerPage;
  // const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);
  const currentArticles = articles.slice(pagesVisited, pagesVisited+articlesPerPage);

  //const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(articles.length / articlesPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="App">
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
      {/* <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      /> */}
    </div>
  );
}

export default App;
