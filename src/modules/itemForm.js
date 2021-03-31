import React from 'react';

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
            placeholder="Press Enter to submit"
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        </form>
    );
}

  export default ItemForm;