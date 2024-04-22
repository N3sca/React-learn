import React, {useState, useEffect} from "react";

function MyComponent2() {
 
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("added");

        return() => {//when dismantle do this;
            window.removeEventListener("resize", handleResize);
            console.log("removed");
        }

    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);


    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p>Windows Width: {width} px</p>
            <p>Windows Height: {height} px</p>
        </>
    );
}
export default MyComponent2;