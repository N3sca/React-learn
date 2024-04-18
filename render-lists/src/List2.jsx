import propTypes from 'prop-types'
function List2(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>);

    return(<><h3>{category}</h3><ul>{listItems}</ul></>);
}
List2.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number, 
        name: propTypes.string,
        calories: propTypes.number,
    }))
}
List2.defaultProps = {
    category: "Category",
    itens: [], 
}
export default List2