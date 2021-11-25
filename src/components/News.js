import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotaResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=89b4ceb678d840a2aa99fc55f1ec6281&page=${page}&pageSize=${props.pages}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotaResults(parsedData.totaResults);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=89b4ceb678d840a2aa99fc55f1ec6281&page=${page + 1}&pageSize=${props.pages}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotaResults(parsedData.totaResults);
    };
    return (
        <>
            <h1 className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>myNews.com | Top-Headings | {props.category}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                    <div className="row my-3">
                        {articles.map((elem) => {
                            return <div className="col-md-3" key={elem.url}>
                                <Newsitem title={elem.title ? elem.title.slice(0, 55) : "Click on Read More"} description={elem.description ? elem.description.slice(0, 80) : "Click on read more"} imgUrl={!elem.urlToImage ? "https://source.unsplash.com/random/800x600" : elem.urlToImage} newsUrl={elem.url} mode={props.mode} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.defaultProps = {
    country: 'in',
    pages: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pages: PropTypes.number,
    category: PropTypes.string
}


export default News
