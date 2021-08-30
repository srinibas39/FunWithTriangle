let buttonArea=document.querySelector(".buttonArea");
let baseArea=document.querySelector(".baseArea");
let heightArea=document.querySelector(".heightArea");
let calculatedArea=document.querySelector(".calculatedArea");
buttonArea.addEventListener("click",function(e){
  if(baseArea.value!=""&&heightArea.value!=""){
    if(baseArea.value>0&&heightArea.value>0){

      let Area=(0.5*parseFloat(baseArea.value)*parseFloat(heightArea.value)).toFixed(2);
     calculatedArea.innerText=`Area= ${Area}`;
    }
  }

})