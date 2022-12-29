import React from "react";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";

function App(){
    return (
        <>
            <NavBar/>
            <ItemListContainer
                greeting="Franco"
            />
        </>
    )
}

export default App