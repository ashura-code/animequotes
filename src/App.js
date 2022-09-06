import './App.css';
import React, { useState} from 'react';
function App() {

  //js start

  const [end,setEnd] = useState([]);



fetch("https://animechan.vercel.app/api/random").then(n=>{
   n.json().then(data=>{
     console.log(data);
    //  setEnd(data);

   })
}).catch(err=>{console.log("Error"+ err)});





  //js end
  return (
   
    <div>
      {/* jsx  start*/}
      <center><h1>The Anime Quote Generator</h1></center>

      {/* <h2>{JSON.stringify(end)}</h2> */}

      {/* jsx end */}
    </div>
   
  );
}

export default App;
