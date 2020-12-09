const card = document.querySelector('#card-container');
const main = document.querySelector('.main');
const COUNTRIES = [ // country objects
          {
               name:"PRE",
               container: document.querySelector('#Pre')
          },
          {
               name:"SPAIN",
               container: document.querySelector('#Spa')
          },
          {
               name:"AMERICA",
               container: document.querySelector('#Ame')
          },
          {
               name:"JAPAN",
               container: document.querySelector('#Jap')
          }
          ,
          {
               name:"PRESENT",
               container: document.querySelectorAll('#Post')
          }
     
]
sleep=(ms)=>new Promise(resolve => setTimeout(resolve, ms)); //helper function sleep timeout
isArrayOfDOM=(container)=>container.length === undefined ? true : false; //helper function  to check if DOM array or not

close = (container)=>{ //close function
  let isAnimationFinished = async()=>{
     if(isArrayOfDOM(container)){ //if container is not array of DOM
          container.style.animation = "close 2s linear";      
          await sleep(2000);//wait 2 seconds before return promise
          return false;
     }
          container.forEach((containerElement)=>{ // if container is array of DOM 
          containerElement.style.animation = "close 2s linear";     
     }) 
          await sleep(2000); //wait 2 seconds before return promise
          return true;
}    
isAnimationFinished().then((isArray)=>{
     card.style.display ="flex";
     main.style.animation = "reloadBody 2s linear";// animate body
      if(isArray){
               // check again if array of DOM
               container.forEach((containerElements)=>{
               containerElements.style.display = "none" //hide container elements
               })
               return
     }
          container.style.display = "none";// if is not array of DOM
     })
}
open=(container)=>{ //open function
     card.style.display ="none";
     if(isArrayOfDOM(container)){//if is not array of DOM
     container.style.display = "flex";
     container.style.animation = "open 2s linear";
     return 
}
      container.forEach((containerElement)=>{ // if is array of DOM
          containerElement.style.display = "flex";
          containerElement.style.animation = "open 2s linear";
      })
}
returnToMain=(name)=>{//return function
     COUNTRIES.forEach((country)=>{
          if(country.name === name){ //check if args passed by onClick is equal to country.name on object of countries
               close(country.container)
          }
     })
 }
 readArticle=(name)=>{ //read function
      COUNTRIES.forEach((country)=>{
           if(country.name === name){ //check if args passed by onClick is equal to country.name on object of countries
                open(country.container)
           }
      })
 }
