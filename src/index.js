import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Compare from './Pages/Graphics/Compare';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/Compare' component={Compare} />
            <Route component={NotFound} />

        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));


serviceWorker.unregister();
