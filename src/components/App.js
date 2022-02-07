// create your App component here
import React, { useEffect, useState } from 'react';


function App() {
    const [imgSource, setimgSource] = useState("")
    

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(setimgSource)    
    }, [] )  

    if (imgSource === "") {
        console.log("Loading...")
        return <p>Loading...</p>
    } else {
        return <img src={imgSource.message} alt="A Random Dog"/>
    }
    
}

export default App;
