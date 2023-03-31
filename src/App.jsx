import { useState } from 'react'

  const defaultItems  = [
    {
      id: 1,
      text: "Kupi miljeko",
      done: false,
    },
    {
      id: 2,
      text: "Kupi brašno",
      done: true,
    },
  ];


function App() {
  const [items, setItems] = useState(defaultItems);
  const [formState, setFormState] = useState("");
  const itemComponents = items.map( item => {
    const handleChange = (event) => {

      console.log("handle change for item", item);
      setItems(items.map(newItem => {

        if (newItem.id === item.id) {

          return(  { ...newItem, done: !item.done});
        }
        else {
         return newItem;
        }
      }));
    };
    const handleClick = () => {
      setItems(items.filter(newItem => {
        return newItem.id !== item.id;
      }));
    };



    return ( 
      <div key={item.id} style={{ textDecoration: item.done ? "line-through" : "none"}}><input type="checkbox" checked={item.done} onChange={handleChange} />{item.text}
      <button onClick={handleClick}>x</button></div>
    );
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState("");
    setItems([ ...items,
       {id: Date.now(),
        text: formState,
        done: false,

    }]  );
  }


  function handleInputChange(event) {
    setFormState(event.target.value);
  }


  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={formState} />
        <button type="submit">Add</button>
      </form>
      {itemComponents}
    </div>
  )
}

export default App
