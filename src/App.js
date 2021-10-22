import { useEffect, useState } from 'react';
import './App.css';

function App() {
const fontStyle = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: "10px",
  padding: "10px",
}
const actor = {
  name: "Tom Cruise",
  age: 50, 
  movie: "Mission Impossible"
}

const scientists = [
  {name: "Albert Einstein", invention: "Theory Of Relativity", nationality: "Germany"},
  {name: "Issac Newton", invention: "Gravity", nationality: "England"},
  {name: "Nikola Tesla", invention: "Alternative Current", nationality: "USA"},
  {name: "Galileo Galilei", invention: "Telescope", nationality: "Italy"},
  {name: "Dr. Jamal Nazrul Islam", invention: "Recreate Big Bang Theory", nationality: "Bangladeshi"},
  {name: "Stephen Hawking", invention: "Theory Of Everything", nationality: "UK"},
]

const singers = ["Justin Bieber", "Ed Sheeran", "Eminem", "Rihanna", "Taylor Swift", "Dooja Cat"]


  return (
    <div className="App">
      <header className="App-header">
    
    <Counter></Counter>

    <h1 style={fontStyle}>this is a heading</h1>
    <h2 style={fontStyle}>This is heading2</h2>
    <p style={{color: "red", backgroundColor: "orange"}}>This is a paragraph</p>

    <h2>Name: {actor.name}</h2>
    <h2>Age: {actor.age}</h2>
    <h3>Movie: {actor.movie}</h3>

    {/* <Scientist scientist={scientists[0]}></Scientist>
    <Scientist scientist={scientists[1]}></Scientist>
    <Scientist scientist={scientists[2]}></Scientist>
    <Scientist scientist={scientists[3]}></Scientist>
    <Scientist scientist={scientists[4]}></Scientist> */}

    {
      scientists.map(s => 
        <Scientist scientist={s}></Scientist>
        )
    }


    {
      singers.map(singer => 
        <ul>
        <li>{singer}</li>
        </ul>
      )
    }

    <User></User>
    
      </header>
    </div>
  );
}

const divStyle ={
  backgroundColor: "lightgrey",
  margin: "10px",
  padding: "10px",
  color: "black"
}

function Scientist (props) {
  const {name, invention, nationality} = props.scientist;
  return (
    <div style={divStyle}>
    <h1>Name: {name}</h1>
    <h2>Invention: {invention}</h2>
    <h3>Nationality: {nationality}</h3>
    {console.log(props)}
  </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const increaseHandler = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const decreaseHandler = () => {
    const decreaseCount = count - 1;
    setCount(decreaseCount)
  }
  return (
    <div>
      <button onMouseOver={decreaseHandler}>Decrease</button>
      <h1>Count: {count}</h1>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  )
}

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(res => res.json())
    .then(res => setUsers(res));
  }, [])
  return (
    <div>
      <h1>Dynamic Users {users.length}</h1>
      {
        users.map(user => <li>{user.title}</li>)
      }
    </div>
  )
}






export default App;
