let hypotenusButton=document.querySelector(".hypotenusButton");
let base=document.querySelector("#base");
let perpendicular=document.querySelector("#perpendicular");
let getHypotenusDiv=document.querySelector(".getHypotenus");


hypotenusButton.addEventListener("click",function(e){
   baseValue=parseFloat(base.value);
   perpendicularValue=parseFloat(perpendicular.value);
   let hypotenus=(Math.sqrt(Math.pow(baseValue,2)+Math.pow(perpendicularValue,2))).toFixed(2);
   getHypotenusDiv.innerText=`Hypotenus=${hypotenus}`;
      
})