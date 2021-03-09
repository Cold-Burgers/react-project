import React from 'react';
import NewStories from './NewStories.json';
import RenderStories from '../shared/RenderStories';

const Filter = (props) => {
    const keyword = props.keyword;
    // const stories = useMemo(() => NewStories, []);
    const stories =  NewStories;
    const news = stories.articles;
    
    
    return (
            <div>
                {news.map((story, i) => (
                    <div key={i}>
                        {story.title.includes(keyword) ?
                            <RenderStories story={story} key={i}></RenderStories>
                        :null}                       
                    </div>
                ))}
            </div>
        );
}
 
export default Filter;