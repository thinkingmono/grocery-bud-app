import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from "./components/Form";
import Items from "./components/Items";

const saveLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
}

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('list')) || []);

  const addItem = (item) => {
    const newItem = {
      id: nanoid(),
      name: item,
      completed: false
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    saveLocalStorage(newItems);
    toast.success('Item added to the list');
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    saveLocalStorage(newItems);
    toast.success('Item removed from the list');
  }

  const editItem = (id) => {
    const newItems = items.map((item) => {
      const {completed} = item;
      if(item.id === id ){
        const editedItem = {...item, completed: !completed};
        return editedItem;
      }
      return item;
    });
    setItems(newItems);
    saveLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} removeItem={removeItem} />
      <ToastContainer position='bottom-center' />
    </section>
  );
};

export default App;
