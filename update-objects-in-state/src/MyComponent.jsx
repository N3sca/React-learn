import React, {useState} from "react";

function MyComponent(){
    
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleYearChange(event){
        setCar(prevcar => ({...prevcar, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(prevcar => ({...prevcar, make: event.target.value}));
    }
    function handleModelChange(event){
        setCar(prevcar => ({...prevcar, model: event.target.value}));
    }
    return (
    <>
        <div>
            <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={(event) => handleYearChange(event)}/>
            <input type="text" value={car.make} onChange={(event) => handleMakeChange(event)}/>
            <input type="text" value={car.model} onChange={(event) => handleModelChange(event)}/>
        </div>
    </>
    );
}
export default MyComponent