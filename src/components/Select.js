import React from 'react';
import '../styles/Select.css';

const Select = (props) => {
  const items = props.items,
        list = items.map((item, i) => <option key={item.id} value={item.id}>{`${i + 1} value`}</option>);
        
  return (
    <select defaultValue="default" className="select" onChange={(e) => props.changeHandler(e.target.value)}>
      <option value="default" disabled>Select a value</option>
      {list}
    </select>
  );
}

export default Select;
