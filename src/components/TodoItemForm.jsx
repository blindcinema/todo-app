import { useState } from "react";

export function TodoItemForm(props) {
    const [ formState, setFormState ] = useState("");

    const handleSubmit = (event) => {
        props.onCreateItem(
                {id: Date.now(),
                 text: formState,
                 done: false,
                 createdAt: Date.now(),
             });
        event.preventDefault();
        setFormState("");

      }

    function handleInputChange(event) {
        setFormState(event.target.value);
      }
    


    return (
<form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={formState} />
        <button type="submit">Add</button>
      </form>
    );
}