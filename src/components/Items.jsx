import SingleItem from "./SingleItem";

const Items = ({ items, removeItem }) => {
    return (
        <section className="items">
            {items && items.map((item) => {
                const { id } = item;
                return <SingleItem key={id} item={item} removeItem={removeItem}/>
            })}
        </section>
    )
}

export default Items