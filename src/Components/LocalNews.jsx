import React, { useState } from 'react';
import Filter from './Filter';
import Header from './shared/Header';



const LocalNews = (props) => {
    // const stories = useMemo(() => NewStories, []);
    // const news = stories.articles;
    const [keyword,setKeyword]=useState();

    return (

        <div>
            <Header title="News by keyword"/>
            <div className="articles">
                <div>
                    <div className="align-middle">
                    <input 
                        type="text" 
                        name="filter" 
                        id="filter"
                        onChange={({target: {value}}) => setKeyword(value)}
                        placeholder="Type a keyword"
                        />
                    </div>
                    <Filter keyword={keyword}/>       
                </div> 
            </div>
        </div>
    )
}
// https://stackoverflow.com/a/60150877
export default LocalNews;