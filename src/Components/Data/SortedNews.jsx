import React from 'react';
import RenderStories from '../shared/RenderStories';

const SortedNews = (props) => {

    console.log(props.news);
    let total = props.news.totalResults;

    let news = props.news.articles;
    let temp;
    function sortAlphabetically(news) { 
        
        for (let i= 0; i < total; i++){
            for (let j=0; j< total - i -j; j++){
                if(news[j].title > news[j+1].title){
                    temp = news[j];
                    news[j] = news[j+1];
                    news[j+1] = temp;
                }
            }
        }
        console.log("e");
        return news;
    }

    news = sortAlphabetically(news);

    if (props.reverse)
    {
        news.reverse();
    }

    return ( 
        <div>
        {news.map((story, i) => (
            <div key={i}>
                {
                    <RenderStories story={story} key={i}></RenderStories>
                    }                       
            </div>
        ))}
    </div>
    );
}
 
export default SortedNews;