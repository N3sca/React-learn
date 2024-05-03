import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    
    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT REENDERED");
    });


    function handleClick(){
        ref.current = ref.current + 1;
    }

    return(<>
        <button onClick={handleClick}>
            Click Me!
        </button>
    </>);
}
export default MyComponent