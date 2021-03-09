import React, { useMemo, useState, useEffect } from 'react';
import NewStories from '../Data/NewStories.json';
import Header from '../shared/Header';
import SortedNews from '../Data/SortedNews';
const Sort = () => {
    const stories = useMemo(() => NewStories, []);
    //const [data, setData] = useState([]);
    console.log(stories);
    const [button, setClicked] = useState(false);
    const [buttonText, setButtonText] = useState("Reverse"); 
    
    // useEffect(() => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=ca&apiKey=9d4ca65c88f54dc0816c482e438e5c51")
    //     .then(resp => {
    //       setData(resp.data);
    //     });
    //   }, []);

     
    const buttonClick = () =>{
        //if clicked, set unclicked. If unclicked, set clicked.
        setClicked( clicked => !clicked)
        //Alternate between sort and reverse on each click
        button ? setButtonText("Sort") : setButtonText("Reverse");
    }

    useEffect(()=>{
        
    },[button]);

    return(
            <div>
                <Header title="Sorted news"/>
                <div className="articles">
                    <button
                        onClick={buttonClick}
                    >
                        {buttonText}
                    </button>
                    {button ? <SortedNews news={stories} reverse={true}></SortedNews> : <SortedNews news={stories} reverse={false}></SortedNews> }
                </div>
            </div>
        );
}
 
export default Sort;