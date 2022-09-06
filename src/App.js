import './App.css';
import React, { useState , useEffect} from 'react';
function App() {

  //js start

  const [activity,setActivity] = useState([]);
  const [type,setType] = useState([]);

  // https://animechan.vercel.app/api/random  hourly requests
  //https://www.boredapi.com/api/activity
  //https://api.rei.my.id/v3/quotes
useEffect(() => {
fetch("https://animechan.vercel.app/api/random").then(n=>{
   n.json().then(data=>{
     console.log(data);
     setActivity(data.quote);
      setType(data.anime);

   })
}).catch(err=>{console.log("Error"+ err)});
},[])

let test = JSON.stringify(type);

  //js end
  return (
   
    <div>
      {/* jsx  start*/}
      <center><h1>The Anime Quote Generator</h1></center>

      <h2>{JSON.stringify(activity)}</h2>
      <h2>{test}</h2>

      {/* jsx end */}
    </div>
   
  );
}

export default App;
