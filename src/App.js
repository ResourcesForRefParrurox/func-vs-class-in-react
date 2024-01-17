// import logo from "./logo.svg";

import { useState, useEffect } from "react"; // hook
import "./App.css";
// import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// functional component
const App = () => {
  const [searchField, setSearchField] = useState(""); // [value,setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // console.log("render");

  useEffect(() => {
    // console.log("render fetch");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    //only runs when the state 'value' changes

    <div className="App">
      <h1 className="app-title">Monsters Watchlist</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//---------------------------------------------
// ! class

// class App extends Component {
//   constructor() {
//     // 1 // order of execution when the app loads
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   // whenever we have a class component that needs to leverage some kind of API call in order to get the data that it needs to display in UI we gotta put that in --> componentDidMount() life cycle method
//   componentDidMount() {
//     // 3 // order of execution when the app loads
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     // console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();

//     // setting new array to it monsters
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // 2 // order of execution when the app loads
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Watchlist</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
