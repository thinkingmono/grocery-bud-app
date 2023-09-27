import { useState } from "react";
import { ToastContainer, toast} from 'react-toastify';
import Form from "./components/Form";
import Items from "./components/Items";

const App = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('list')) || []);

  const saveLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(items));
  }

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    saveLocalStorage();
    toast.success('Item removed from the list')
  }

  return(
    <section className="section-center">
      <Form items={items} setItems={setItems} saveLocalStorage={saveLocalStorage}/>
      <Items items={items} removeItem={removeItem}/>
      <ToastContainer position='bottom-center' />
    </section>
  );
};

export default App;
