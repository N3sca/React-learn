import React, {useContext} from "react";
import { UserContext } from "./MyComponent.jsx";

function MyComponent4(){

    const user = useContext(UserContext);
    console.log(user);

    return(<>
            <div className="box">
                <h1>Mycomponent4</h1>
                <h2>{`Bye ${user}`}</h2>
            </div>
    </>);
}
export default MyComponent4