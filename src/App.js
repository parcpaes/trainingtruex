import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserList from './components/users/UserList';

const App = ()=>{  
   //<Route path='/:user/repos' exact component={UserList}/>
    return (      
      <div className="container">
        <BrowserRouter>
          <Switch>
              <Route path='/' exact component={UserList}/>
              
          </Switch>
        </BrowserRouter>
      </div>
    );  
}

export default App;
