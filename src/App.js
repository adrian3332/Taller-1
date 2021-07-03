import React, {Component} from 'react';
import './App.css';
import Users from "./Components/cards/usuarios"
class App extends Component {
render (){
  return (
    <div className = 'App'>
      <Users/>
  </div>
  );
}
}

export default App;
