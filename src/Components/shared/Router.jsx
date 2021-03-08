import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
// import News from '../News';
import LocalNews from '../LocalNews';
import Sort from '../Sort';
const Router = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/LocalNews" component={LocalNews}/>
            <Route exact path="/Sort" component={Sort}/>
        </Switch>
     );
}
 
export default Router;