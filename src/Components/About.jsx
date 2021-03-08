import React from 'react';
import Header from './shared/Header';
const About = () => {
    return (
        <div>
            <Header title="About"/>
            <div className="paragraph-text">
                <p>My application has functionality to search for keywords in article headlines, as well as the ability to sort the data alphabetically.
                For searching / filtering by keyword, the user just needs to type in a keyword they would like to see news for and the page will update accordingly.
                To sort the user will click a button, and then the stories will be sorted alphabetically. They can then reverse the sort.
                Regretably, I couldn't get the sort and the search to work together on the same page so I have made two seperate ones. Just to show both operations.</p>
            </div>
        </div>
    ); 
}
 
export default About;