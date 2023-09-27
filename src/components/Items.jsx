import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
    return (
        <section className="items">
            {items && items.map((item) => {
                const { id } = item;
                return <SingleItem key={id} item={item} editItem={editItem} removeItem={removeItem}/>
            })}
        </section>
    )
}

export default Items