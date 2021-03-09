import React from 'react';

const RenderStories = (props) => {
    const story = props.story;
    return ( 
        <div className="article">
            <h1>{story.title}</h1>
            <img src={story.urlToImage} alt="" width="350"></img>
            <p>{story.description}</p>
            <a href={story.url} >Link to full article</a>
        </div>
     );
}
 
export default RenderStories;