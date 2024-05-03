import React, { useState, createContext } from "react";
import MyComponent2 from "./MyComponent2.jsx";

export const UserContext = createContext();

function MyComponent(){

    const [user, setUser] = useState("Bro");

    return(<>

            <div className="box">
                <h1>Mycomponent</h1>
                <h2>{`Hello ${user}`}</h2>
                <UserContext.Provider value={user}>
                    <MyComponent2 user={user}/>
                </UserContext.Provider>
            </div>
    </>);
}
export default MyComponent