import React from 'react';

function Item({ item, index, completeItem, removeItem }) {
    return(
        <div 
        className="item"
        // No take-backsies!
        style = {{ opacity: item.complete ? "0.2" : "" }}>
            {item.label}
            <div>
            <button
                className="button-complete" 
                onClick={() => completeItem(index)}>
                Complete
            </button>
            <button
                className="button-remove"
                onClick={() => removeItem(index)}>
                Remove
            </button>
            </div>
        </div>
    )
};
  
export default Item;