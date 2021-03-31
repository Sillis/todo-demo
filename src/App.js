import React from 'react';
import './App.css';

import ItemForm from './modules/itemForm';
import Item from './modules/item';

function App() {
  
  const [todos, setTodos] = React.useState([
    { label: "Go to the supermarket", complete: false },
    { label: "Call Alice", complete: false },
    { label: "Ask Alice to call Bob", complete: false },
    { label: "Do the dishes", complete: false },
    { label: "Change car tyres", complete: false }
  ]);

  const addItem = label => {
    const newTodos = [...todos, {label}];
    setTodos(newTodos);
  };

  const completeItem = index => {
    const newTodos = [...todos];
    newTodos[index].complete = true;
    setTodos(newTodos);
  };

  const removeItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="list">
        {todos.map((item, index) => (
          <Item 
            key={index}
            index={index}
            item={item}
            completeItem={completeItem}
            removeItem={removeItem}
          />
        ))}
        <div className="add-item-container">
          <ItemForm addItem={addItem} />
        </div>
      </div>
    </div>
  );
}

export default App;