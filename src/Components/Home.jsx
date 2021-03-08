import React from 'react';
import Header from './shared/Header';

const Home = () => {
    return (
        <div className="page-body">
            <Header title="Home"/>
            <div className="paragraph-text">
                <div >
                    <p>My application is one for viewing news stories taken from <a href="https://newsapi.org/docs/endpoints/top-headlines">https://newsapi.org/docs/endpoints/top-headlines</a>
                    It ended up being easier to (in my opinion) to use data from a local file than live from an api, so I put data from an api call in a json file locally. I was also getting rate limited.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;