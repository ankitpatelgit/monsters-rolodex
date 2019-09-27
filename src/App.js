import React, { Component } from 'react';
import { CardList }  from './components/card-list/card-list.components';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  
  handleChange = e => {
    this.setState({searchField: e.target.value });
  }

  render(){

    const { monsters, searchField }= this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="App">
        <p></p>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Monster' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonster}/>  
      </div>
    );
  }
}
/* function App() {
  return (
    
  );
} */

export default App;
