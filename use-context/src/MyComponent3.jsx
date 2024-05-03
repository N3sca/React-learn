import MyComponent4 from "./MyComponent4.jsx";
import React, {useContext} from "react";
import { UserContext } from "./MyComponent.jsx";

function MyComponent3(){

    const user = useContext(UserContext);

    return(<>
            <div className="box">
                <h1>Mycomponent3</h1>
                <h2>{`Hello again ${user}`}</h2>
                <MyComponent4/>
            </div>
    </>);
}
export default MyComponent3