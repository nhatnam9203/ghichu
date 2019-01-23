import React, { Component } from 'react';
import './App.css';
import Menu from './component/menu'
import ListNote from './component/listnote'
import {Switch,Route} from 'react-router-dom'
import AddNote from './component/addNote'
import EditNote from './component/editNote'
class App extends Component {
  render() {
    return (
      <div className="">
        <Menu />
        <Switch>
          <Route exact path="/" component={ListNote} />
          <Route path="/note" component={AddNote} />
          <Route path="/editNote/:id/" component={EditNote} />
        </Switch>
      </div>
    );
  }
}

export default App;
