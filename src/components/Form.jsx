import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
    const [listItem, setListItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!listItem) {
            toast.error('Please fill out the form');
            return;
        }
        addItem(listItem);
        setListItem('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className="div form-control">
                <input type="text" name="" id="" value={listItem} onChange={(e) => setListItem(e.target.value)} className='form-input' />
                <button type="submit" className='btn'>Add Item</button>
            </div>
        </form>
    )
}

export default Form