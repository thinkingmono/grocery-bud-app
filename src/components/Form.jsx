import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const Form = ({ items, setItems, saveLocalStorage }) => {
    const [listItem, setListItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!listItem) {
            toast.error('Please fill out the form');
            return;
        }
        const newItem = {
            id: nanoid(),
            name: listItem,
            completed: false
        }
        setItems([...items, newItem]);
        saveLocalStorage();
        setListItem('');
        toast.success('Item added to the list');
    }
    return (
        <form onSubmit={handleSubmit} className='form-control'>
            <input type="text" name="" id="" value={listItem} onChange={(e) => setListItem(e.target.value)} className='form-input'/>
            <button type="submit" className='btn'>Add</button>
        </form>
    )
}

export default Form