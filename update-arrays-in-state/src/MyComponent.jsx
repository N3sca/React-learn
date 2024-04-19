import React, {useState} from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";

        setFoods(prevfoods => [...prevfoods, newFood]);
    }
    function handleRemoveFood(index){
        
        setFoods(foods.filter((element, i) => i !== index));
    }

    return(
        <>
            <div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food} = {index}</li>)}
                </ul>
                <input type="text" id="foodinput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    );
}
export default MyComponent