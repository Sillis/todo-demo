import React from 'react';
import logo from './logo.svg';
import './App.css';

function Item({ item, index, completeItem, removeItem }) {
  return(
    <div 
      className="item"
      style = {{ opacity: item.complete ? "0.2" : "" }}>
        {item.label}
        <div>
          <button 
            onClick={() => completeItem(index)}>
              Complete
          </button>
          <button
            onClick={() => removeItem(index)}>
              Remove
          </button>
        </div>
    </div>
  )
};

function ItemForm({ addItem }) {
  const [value, setValue] = React.useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

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