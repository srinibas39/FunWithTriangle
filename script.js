let button=document.querySelector(".check");
let angle1=document.querySelector("#angle1");
let angle2=document.querySelector("#angle2");
let angle3=document.querySelector("#angle3");
let output=document.querySelector(".output");
button.addEventListener("click",function(e){
    if(angle1.value!=""&&angle2.value!=""&&angle3.value!=""){
        
        angle1Value=Number(angle1.value);
        angle2Value=Number(angle2.value);
        angle3Value=Number(angle3.value);

        

            if((angle1Value<180 && angle2Value<180 && angle3Value<180)&&((angle1Value>0 && angle2Value>0 && angle3Value>0))){
    
                
                 if(angle1Value+angle2Value+angle3Value==180){
                     output.innerText=`Triangle is possible`;
                 }
                 else{
                     output.innerText=`Triangle is not possible`;
                 }
            }
            else{
                output.innerText=`Triangle is not possible`;
            }
        

    }
})