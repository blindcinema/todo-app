import { useState } from 'react'

function App() {
  const [ items, setItems ] = useState([]);
  const [ formState, setFormState ] = useState("");
  const [ sort, setSort ] = useState("createdAtDesc");

  const itemComponents = items
  .sort((a,b) => {
    if (sort === "createdAtAsc") {
    return a.createdAt - b.createdAt;
    }
    else return b.createdAt - a.createdAt
  })
  .map( item => {
    const handleChange = (event) => {
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
      <div key={item.id} style={{ textDecoration: item.done ? "line-through" : "none"}}>
        <input type="checkbox" checked={item.done} onChange={handleChange} />
        {item.text} ({ new Date(item.createdAt).toUTCString()})
        <button onClick={handleClick}>x</button>
      </div>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState("");
    setItems([ ...items,
       {id: Date.now(),
        text: formState,
        done: false,
        createdAt: Date.now(),

    }]  );
  }


  function handleInputChange(event) {
    setFormState(event.target.value);
  }

  function handleSort(event) {
    setSort(event.target.value);
  }

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={formState} />
        <button type="submit">Add</button>
      </form>
      <select onChange={handleSort} defaultValue={sort}>
        <option value="createdAtAsc">Created at (Ascending)</option>
        <option value="createdAtDesc"> Created at (Descending)</option>
      </select>
      {itemComponents}
    </div>
  )
}

export default App
