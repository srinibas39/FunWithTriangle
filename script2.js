let submit=document.querySelector(".submit");
let form=document.querySelector(".form");
let scoreDiv=document.querySelector(".score");
const correctAnswer=["Obtuse Angle Triangle" , "Right Angle Triangle" , "Acute Angle Triangle","45°","3","9:1","Isosceles and similar","4√3 cm","18cm"];
submit.addEventListener("click",function(e){
    quiz();
})
function quiz(){
   let score=0;
   let index=0;
   const formResult=new FormData(form);
    // console.log(formResult);  
   for(let value of formResult.values()){
       if(value==correctAnswer[index]){
         score++;
       }
       index++;
   }
   scoreDiv.innerText=`Your Score is ${score} !!!`;
}