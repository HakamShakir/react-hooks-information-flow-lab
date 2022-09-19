import Item from "./Item";

function Filter({ onCategoryChange, items }) {
  const itemsToDisplay = items.filter((item) => {
    if (onCategoryChange === "All") return true;

    return item.category === onCategoryChange;
  });

  return (
    <ul className="Items">
      {itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  );
}

export default Filter;
