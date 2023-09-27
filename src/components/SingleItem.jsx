import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <article className="single-item">
      <input type="checkbox" value={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
      <p style={{textDecoration: isChecked && 'line-through'}}>{name}</p>
      <button type="button" className='btn remove-btn' onClick={()  => removeItem(id)}>Delete</button>
    </article>
  )
}

export default SingleItem