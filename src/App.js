import './App.css';

function App() {
  const color = {
    color : "red",
    backgroundColor: "yellow",
    border: "5px solid red"
  }

  const products = [
    {name: "Adobe PhotoShop", price: "$99.32"},
    {name: "Adobe Illustrations", price: "$44.87"}
  ]
  return (
    <div className="App">
      <header className="App-header">
 <h1 style={color}>This is a heading</h1>
 <h1 style={{color: "red", backgroundColor: "cyan", border: "10px solid black"}}>This is another heading</h1>
 <Person name="Justin Bieber" profession="Singer" country="Canada"></Person>
 <Person name="Eminem" profession="Rapper" country="USA"></Person>
 <Person name="Obama" profession="Politician" country="USA"></Person>
 <Person name="Messi" profession="Soccer Player" country="Argentina"></Person>
 <Product product={products[0]}></Product>
 <Product product={products[1]}></Product>
 

      </header>
    </div>
  );
}
function Person(props) {
  const personStyle = {
    color: "blue",
    backgroundColor: "grey",
    border: "1px solid red",
    margin: "5px",
    padding: "5px",
    borderRadius: "10px",
  }
  const nameColor = {
    color: "green"
  }
  return (
    <div style={personStyle}>
      <h1 style={nameColor}>My name is {props.name}</h1>
      <h2>I am {props.profession}</h2>
      <p>I am from {props.country}</p>
    </div>
  )
}

const Product = (props) => {
  const style ={
    backgroundColor: "lightGrey",
    color: "green",
    border: "1px solid red",
    float: "left",
    margin: "5px",
  }
  const {name, price} = props.product;
  return(
    <div style={style}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

export default App;
