
function List(){

    const cars = ["opel", "porsche", "bmw", "audi", "mercedes"];

    const listItems = cars.map(car => <li key={car}>{car}</li>);





    const fruits = [{id: 1, name: "apple", calories: 95},
                     {id: 2, name: "orange", calories: 45},
                     {id: 3, name: "banana", calories: 105},
                     {id: 4, name: "coconut", calories: 159},
                     {id: 5, name: "pinapple", calories: 37}];

    //ALPHABETICAL ORDER
    fruits.sort((a, b) => a.name.localeCompare(b.name));
    //NUMERIC ORDER
    //fruits.sort((a, b) => a.calories - b.calories);

    const listItems2 = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);



    //FILTER fruits less 100 calories
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems3 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);



    return(
        <>
            <ul>{listItems}</ul> 
            <ul>{listItems2}</ul>
            <ul>{listItems3}</ul>
        </>
    );
}
export default List