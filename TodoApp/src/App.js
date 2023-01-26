import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () =>{
  const [Ctodo, Settodo] = useState("");
  const [Items,setItems] = useState([]);

  const itemEvent = (event) =>{
    Settodo(event.target.value);
  }

  const register = () =>{
    setItems((oldItems) => {
      return [...oldItems, Ctodo]
    });
    Settodo('');
  };

  const deleteItems = (id) =>{
    console.log("deleted");

    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index)=>{
        return index !==  id;
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input 
            type="text" 
            placeholder="Add items"
            name = "Ctodo"
            onChange={itemEvent}
            value = {Ctodo}
          />
          <button onClick={register}>+</button>

          <ol>
            {/* <li>{Ctodo}</li> */}
            {Items.map((itemval, index) => {
              return <TodoList 
              key={index} 
              id={index} 
              text ={itemval}
              onSelect = {deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App;