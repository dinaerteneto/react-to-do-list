import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import TodoList from './containers/TodosList'
import AboutMe from './containers/AboutMe'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>         
          <nav>
            <ul>
              <li><Link to="/">Tarefas</Link></li>
              <li><Link to="/about-me">Sobre mim</Link></li>
            </ul>
          </nav>
        
          <Switch>
            <Route exact path="/">
              <TodoList />
            </Route>
            <Route path="/about-me">
              <AboutMe />
            </Route>
          </Switch>   

        </Router>    
      </div>
    )
  }
}
