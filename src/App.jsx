import { useState } from 'react'
import { TodoItem } from "./components/TodoItem";
import { TodoItemForm } from './components/TodoItemForm';

function App() {
  const [ items, setItems ] = useState([]);
  const [ formState, setFormState ] = useState("");
  const [ sort, setSort ] = useState("createdAtDesc");

  const handleMarkItemAsDone = (id, done) => {
    setItems(items.map(newItem => {
      if (newItem.id === id) {

        return(  { ...newItem, done: !done});
      }
      else {
       return newItem;
      }
    }));
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(newItem => {
      return newItem.id !== id;
    }));
  };

  const itemComponents = items
  .sort((a,b) => {
    if (sort === "createdAtAsc") {
    return a.createdAt - b.createdAt;
    }
    else return b.createdAt - a.createdAt
  })
  .map( item => {
      return <TodoItem key={item.id} id={item.id} done={item.done} text={item.text} createdAt={item.createdAt} onDeleteItem={handleDeleteItem} onMarkItemAsDone={handleMarkItemAsDone}></TodoItem>
  });

  const handleCreateItem = (item) => {
    setItems([ ...items, item ]);
  }

  function handleSort(event) {
    setSort(event.target.value);
  }
  function handleClearItems() {
    setItems([]);
  }
  return (
    <div className="App">
      <h1>TODO APP</h1>
    <TodoItemForm onCreateItem={handleCreateItem} ></TodoItemForm>
    <button onClick={handleClearItems}>Clear All</button>
      <select onChange={handleSort} defaultValue={sort}>
        <option value="createdAtAsc">Created at (Ascending)</option>
        <option value="createdAtDesc"> Created at (Descending)</option>
      </select>
      {itemComponents}
    </div>
  )
}

export default App
