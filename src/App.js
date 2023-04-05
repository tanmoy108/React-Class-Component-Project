import { Component } from "react";
import CardList from "./component/cardList/CardList.jsx";
import SearchField from "./component/searchField/SearchField.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  //once first load
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monster: users };
        });
      });
  }

  onChangeMethod = (e) => {
    const searchField = e.target.value.toLowerCase(); //lower case
    this.setState(() => {
      return { searchField: searchField }; // return{searchField}
    });
  };

  render() {
    console.log("render");
    const { searchField, monster } = this.state;
    const { onChangeMethod } = this;

    const searchNewArray = monster.filter((value) => {
      return value.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="page-title">Monster Robo Hash</h1>

        {/* input */}
        <SearchField
          onChangeHandlerProps={onChangeMethod}
          placeHolderProps="Search Name"
          classNameProps="monster-search-box"
        />
        {/* show korbe
        {searchNewArray.map((value, index) => {
          return <h2 key={index}>{value.name}</h2>;
        })} */}
        <CardList arrayProps={searchNewArray} />
        {/* upore array ti props akare patai dea holo */}

        <p style={{color:'gray'}} >Copyright @ 2023</p>
      </div>
    );
  }
}

export default App;
