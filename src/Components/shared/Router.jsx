import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About'
// import News from '../News';
import LocalNews from '../pages/LocalNews';
import Sort from '../pages/Sort';
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