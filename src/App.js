// note added {Component} to use classes and other methods
import React, { Component } from 'react';
import './App.css';
// Enable CardList component 
import { CardList } from './components/card-list/card-list.component';
// Import SearchBox component
import { SearchBox } from './components/search-box/search-box.component'


// Creating a class instead of using a function 
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // this is same as: const monsters = this.state.monsters; searchField = this.state.searchFiled
    const { monsters, searchField } = this.state;
    // create array to filter out monsters from searchField user input
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* Instead of having the input search box here, created a new component and imported in SearchBox instead */}
        {/* handleChange = how you grab user data  */}
        <SearchBox
          placeholder='Search Name'
          handleChange={this.handleChange}
        />

        {/* name="Joey" is just an example when you console.log (props) from it's main component file */}
        <CardList name="Joey" monsters={filteredMonsters}>
          {/* Anything inside component are called "children" */}

        </CardList>

      </div>
    );
  }

} // end class





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello everyone!
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
