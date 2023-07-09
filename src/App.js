
import React, { useState , useEffect} from 'react';
function App() {

  //js start
  

//   //no right script start


function defeatIE() {if (document) {return false;}}
function defeatNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=defeatNS;}
else{document.onmouseup=defeatNS;document.oncontextmenu=defeatIE;}
document.oncontextmenu=new Function("return false")


// //no right click script ends

  

  const [activity,setActivity] = useState([]);  //initializing states for each activity
  const [type,setType] = useState([]);
  const [name,setName] = useState('');
  const [pic,setPic] = useState([]);

  // https://animechan.vercel.app/api/random      hourly requests
  //https://www.boredapi.com/api/activity
  //https://api.rei.my.id/v3/quotes       not working using fetch

  //**********************************api fetching for anime quotes starts here***************************************************************************
useEffect(() => {
	const url = 'https://waifu-it.p.rapidapi.com/quote';
const options = {
	method: 'GET',
	headers: {
		Authorization: 'a9383ce376156e792b4fd325457a0165ba8958e8cdee',
		'X-RapidAPI-Key': 'cc7365826amsh843b939188aa9ebp14e9dajsn4316a1950472',
		'X-RapidAPI-Host': 'waifu-it.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
        setActivity(result.quote);
        setType(result.anime);
        setName(data.author); 
	
} catch (error) {
	console.error(error);
}
},[])











	
	

//***************************************api fetching for anime quotes ends here********************************************************************************************************************************

let test = JSON.stringify(type);
let character = JSON.stringify(name);
//let pp="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

//**************************api fecthing for profile starts here************************************************************************************************
useEffect(() => {

let picture =character;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfd23913d6mshcaca5d58482b7a3p1c9e20jsn068bb6e44bd3',
		'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
	}
};

fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${picture}`, options)
	.then(response => response.json())
	.then(response => {
    console.log(response.value[0].thumbnailUrl)
    setPic(response.value[0].thumbnailUrl)
  })
	.catch(err => console.error(err));
},[character])

//************************api fetching for profile ends here********************************************************************************************************************************  


  //js end
  return (
   
    <div>
      {/* jsx  start*/}
      <center><h1>The Anime Quote</h1></center>
      <center ><img className="profile" alt="Loading.." src={pic}></img></center>

      <div className = "container">

     <center> <h2><i>{JSON.stringify(activity)}</i></h2></center>
     <center><h3>by:<i className='char'>{character}</i></h3></center>
      <center><h2>{test}</h2></center>
      </div>

      <footer className='footer'>
        <center><p className="more">Made with ❤️ by adhxtya</p></center>
      </footer>



      {/* jsx end */}

    </div>
   
  );
}

export default App;
