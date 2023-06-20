import React, { useState } from 'react';

function EditableWidget() {
  const [text, setText] = useState('Luca');
  const [editable, setEditable] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setEditable(!editable);
  };

  return (
    <div>
      {editable ? (
        <input type="text" value={text} onChange={handleChange} />
      ) : (
        <p>{text}</p>
      )}
      <button onClick={handleButtonClick}>
        {editable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
}

export default EditableWidget;
