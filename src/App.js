
import React, { useState , useEffect} from 'react';
function App() {

  //js start
  

//   //no right script start
// function defeatIE() {if (document) {return false;}}
// function defeatNS(e) {if 
// (document.layers||(document.getElementById&&!document.all)) {
// if (e.which==2||e.which==3) {return false;}}}
// if (document.layers) 
// {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;}
// else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;}
// document.oncontextmenu=new Function("return false")
// //no right click script ends

  

  const [activity,setActivity] = useState([]);
  const [type,setType] = useState([]);
  const [name,setName] = useState('');

  // https://animechan.vercel.app/api/random  hourly requests
  //https://www.boredapi.com/api/activity
  //https://api.rei.my.id/v3/quotes   not working using fetch
useEffect(() => {
fetch("https://animechan.vercel.app/api/random").then(n=>{
   n.json().then(data=>{
     console.log(data);
     setActivity(data.quote);
      setType(data.anime);
      setName(data.character);

   })
}).catch(err=>{console.log("Error"+ err)});
},[])

let test = JSON.stringify(type);
let character = JSON.stringify(name);

  //js end
  return (
   
    <div>
      {/* jsx  start*/}
      <center><h1>The Anime Quote</h1></center>

      <div className = "container">

     <center> <h2><i>{JSON.stringify(activity)}</i></h2></center>
     <center><h3>by:<i className='char'>{character}</i></h3></center>
      <center><h2>{test}</h2></center>
      </div>

      <footer className='footer'>
        <center><p class="more">Made with ❤️ by adhxtya</p></center>
      </footer>



      {/* jsx end */}

    </div>
   
  );
}

export default App;
