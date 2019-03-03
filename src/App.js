import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import UserList from './components/users/UserList';
import ReposList from './components/users/Repositories/ReposList';
import Principal from './components/Principal';
import history from './components/history';

const App = ()=>{  
   //<Route path='/:user/repos' exact component={UserList}/>
    return (      
      <div className="container">        
        <Router history={history}>
          <Switch>
                <Route path='/' exact component={Principal}/>
                <Route path='/users' exact component={UserList}/>
                <Route path='/users/:userId/repos' exact component={ReposList}/>
          </Switch>
        </Router>
      </div>      
    );  
}

export default App;
