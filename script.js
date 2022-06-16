  let giphy_form=document.querySelector("form");
const giphy_key="pcQ5NWNCpC7Ym16roiH4y5e2jDgcoWsp";
const responsedata=document.getElementById("gif");
const limit= 9;
const rating="g";
const giphy_url= 'http://api.giphy.com/v1/gifs/search?api_key=${giphy_key}&q=${responsedata}' ;
console.log(responsedata);
function getResults(responsedata){
    
var result=fetch(giphy_url)
  .then(response => response.json())
  .then(data => console.log(data));
  console.log(result);
}

function displayResults(responsedata){

    //const gifs=inputdata[giphy_url];
responsedata.foreach((responsedata,i)){
    document.getElementById("here").innerHTML+= <img src=" ${giphy_url}" alt="GIPHY image" />
}
}

function handleFormSubmit(){
var term=responsedata;
}
    
   window.onload=function(){
    
   }

