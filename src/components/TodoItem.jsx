export function TodoItem(props) {

    



        const handleChange = ()  => {
            props.onMarkItemAsDone(props.id, props.done);
        }
        const handleClick = () => {
            props.onDeleteItem(props.id);
          };
      
      
          return ( 
            <div key={props.id} style={{ textDecoration: props.done ? "line-through" : "none"}}>
              <input type="checkbox" checked={props.done} onChange={handleChange} />
              {props.text} ({ new Date(props.createdAt).toUTCString()})
              <button onClick={handleClick}>x</button>
            </div>
          );
}