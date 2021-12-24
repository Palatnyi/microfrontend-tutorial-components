import React, { useState } from 'react';

function CustomInput({ label = '', value = '' }) {
  const [inputValue, setValue] = useState(value);
  const onInputChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div className="components-customInput">
      <p>{label}</p>
      <input onChange={onInputChange} value={inputValue}/>
    </div>
  );
}

export default CustomInput;