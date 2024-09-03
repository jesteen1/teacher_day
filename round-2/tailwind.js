var wronganwser=document.querySelectorAll("#wrong_answer")
var green_answer=document.querySelectorAll("#green_answer")
var blue_answer=document.querySelectorAll("#blue_answer")
var pink_answer=document.querySelectorAll("#pink_answer")
var orange_score=0
var blue_score=0
var pink_score=0
var green_score=0
var time_of_close=16
var timed
var pink_point=document.querySelectorAll("#pink_point")
var blue_point=document.querySelectorAll("#blue_point")
var orange_point=document.querySelectorAll("#orange_point")
var green_point=document.querySelectorAll("#green_point")
var data_set=document.querySelectorAll("#data_set")
var data=["greenteam:28","blueteam:52","pinkteam:72"]

for(let j=0; j<green_answer.length; j++){
    green_answer[j].addEventListener("click",()=>{
     
        green_answer[j].classList.remove("bg-yellow-500")
        green_answer[j].classList.remove("hover:bg-red-500")
        green_answer[j].classList.add("correct")
       
        

    })
}
for(let i=0; i<wronganwser.length;i++){
    wronganwser[i].onclick=()=>{
        wronganwser[i].classList.add("bg-red-500")
        wronganwser[i].classList.remove("hover:bg-red-500")
        wronganwser[i].classList.remove("bg-yellow-500")
        
        
    }
}

for(let o=0; o<orange_point.length; o++){


    orange_point[o].addEventListener("click",()=>{

        if(localStorage.getItem("orangescore")){
            var update=JSON.parse(localStorage.getItem("orangescore") )+1
            
            localStorage.setItem("orangescore",update)
         //   alert(localStorage.getItem("orangescore"))
         
           // alert(localStorage.getItem("bluescore"))
            var green_display=document.getElementById("green_display")
var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                    else{
                        orange_score=orange_score+1
                        localStorage.setItem("orangescore",orange_score)
                     //   alert(localStorage.getItem("orangescore"))
                        var orange_display=document.getElementById("orange_display")
                        var green_display=document.getElementById("green_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                   
                    if(orange_point.length==o+1){
                        hided.classList.remove("hidden")
                        var total_point=[JSON.parse(localStorage.getItem("greenscore")) ,JSON.parse(localStorage.getItem("pinkscore")) ,JSON.parse(localStorage.getItem("orangescore")) ,JSON.parse(localStorage.getItem("bluescore")) ]
                    var maximum=Math.max(total_point[0],total_point[1],total_point[2],total_point[3])
                    if(maximum==JSON.parse(localStorage.getItem("greenscore"))){
                     team_name.innerHTML=`<div><p>green Team</p><p>score:${localStorage.getItem("greenscore")}</p></div>`
                    }
                    else if(maximum==JSON.parse(localStorage.getItem("pinkscore"))){
                        team_name.innerHTML=`<div><p> pink Team</p><p>score:${localStorage.getItem("pinkscore")}</p></div>`
                       }
                    else  if(maximum==JSON.parse(localStorage.getItem("orangescore"))){
                        team_name.innerHTML=`<div><p>orange Team</p><p>score:${localStorage.getItem("orangescore")}</p></div>`
                       }
                    else if(maximum==JSON.parse(localStorage.getItem("bluescore"))){
                        team_name.innerHTML=`<div><p> blue Team</p><p>score:${localStorage.getItem("bluescore")}</p></div>`
                       }
                    }
                    else{
                        var pointed_data=document.getElementById("pointed")
                        pointed_data.classList.remove("hidden")
      
                        var time=time_of_close
                      timed= setInterval(work,1000)
                      var close_team_1=document.getElementById("close_team")
                        var Orange_pointed=document.getElementById("Orange_pointed")
                        var blue_pointed=document.getElementById("blue_pointed")
                        var pink_pointed=document.getElementById("pink_pointed")
                        var green_pointed=document.getElementById("green_pointed")
                        Orange_pointed.innerHTML=localStorage.getItem("orangescore")
                        blue_pointed.innerHTML=localStorage.getItem("bluescore")
                        pink_pointed.innerHTML=localStorage.getItem("pinkscore")
                        green_pointed.innerHTML=localStorage.getItem("greenscore")

                      function work(){
                       
                      
                            time=time-1
                            if(time==0){
                                clearInterval(timed)
                                pointed_data.classList.add("hidden")
                              }
                           close_team_1.innerHTML="closed in  "+time+"(s)"
                           
                             
                      }     
                        

                    }

    })
}

for(let p=0; p<pink_point.length; p++){


    pink_point[p].addEventListener("click",()=>{

        if(localStorage.getItem("pinkscore")){
            var update=JSON.parse(localStorage.getItem("pinkscore") )+1
            
            localStorage.setItem("pinkscore",update)
           // alert(localStorage.getItem("pinkscore"))
          
          //  alert(localStorage.getItem("bluescore"))
            var green_display=document.getElementById("green_display")
var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")

green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                    else{
                        pink_score=pink_score+1
                        localStorage.setItem("pinkscore",pink_score)
                       // alert(localStorage.getItem("pinkscore"))
                        var green_display=document.getElementById("green_display")
                        var orange_display=document.getElementById("orange_display")

var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                    if(pink_point.length==p+1){
                        hided.classList.remove("hidden")
                        var total_point=[JSON.parse(localStorage.getItem("greenscore")) ,JSON.parse(localStorage.getItem("pinkscore")) ,JSON.parse(localStorage.getItem("orangescore")) ,JSON.parse(localStorage.getItem("bluescore")) ]
                    var maximum=Math.max(total_point[0],total_point[1],total_point[2],total_point[3])
                    if(maximum==JSON.parse(localStorage.getItem("greenscore"))){
                     team_name.innerHTML=`<div><p>green Team</p><p>score:${localStorage.getItem("greenscore")}</p></div>`
                    }
                    else if(maximum==JSON.parse(localStorage.getItem("pinkscore"))){
                        team_name.innerHTML=`<div><p> pink Team</p><p>score:${localStorage.getItem("pinkscore")}</p></div>`
                       }
                    else  if(maximum==JSON.parse(localStorage.getItem("orangescore"))){
                        team_name.innerHTML=`<div><p>orange Team</p><p>score:${localStorage.getItem("orangescore")}</p></div>`
                       }
                    else if(maximum==JSON.parse(localStorage.getItem("bluescore"))){
                        team_name.innerHTML=`<div><p> blue Team</p><p>score:${localStorage.getItem("bluescore")}</p></div>`
                       }
                    }
                    else{
                        var pointed_data=document.getElementById("pointed")
                        pointed_data.classList.remove("hidden")
      
                        var time=time_of_close
                      
                      var close_team_1=document.getElementById("close_team")
                        var Orange_pointed=document.getElementById("Orange_pointed")
                        var blue_pointed=document.getElementById("blue_pointed")
                        var pink_pointed=document.getElementById("pink_pointed")
                        var green_pointed=document.getElementById("green_pointed")
                        Orange_pointed.innerHTML=localStorage.getItem("orangescore")
                        blue_pointed.innerHTML=localStorage.getItem("bluescore")
                        pink_pointed.innerHTML=localStorage.getItem("pinkscore")
                        green_pointed.innerHTML=localStorage.getItem("greenscore")
                        timed= setInterval(work,1000)
                      function work(){
                       
                      
                            time=time-1
                            if(time==0){
                                clearInterval(timed)
                                pointed_data.classList.add("hidden")
                              }
                           close_team_1.innerHTML="closed in  "+time+"(s)"
                           
                             
                      }
                    }


    })
}
for(let g=0; g<green_point.length; g++){


    green_point[g].addEventListener("click",()=>{

        if(localStorage.getItem("greenscore")){
            var update=JSON.parse(localStorage.getItem("greenscore") )+1
            
            localStorage.setItem("greenscore",update)
         //   alert(localStorage.getItem("greenscore"))
           
          
            var green_display=document.getElementById("green_display")
var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                    else{
                        green_score=green_score+1
                        localStorage.setItem("greenscore",green_score)
                       // alert(localStorage.getItem("greenscore"))
                        var green_display=document.getElementById("green_display")
                        var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                    if(green_point.length==g+1){
                        hided.classList.remove("hidden")
                        var total_point=[JSON.parse(localStorage.getItem("greenscore")) ,JSON.parse(localStorage.getItem("pinkscore")) ,JSON.parse(localStorage.getItem("orangescore")) ,JSON.parse(localStorage.getItem("bluescore")) ]
                    var maximum=Math.max(total_point[0],total_point[1],total_point[2],total_point[3])
                    if(maximum==JSON.parse(localStorage.getItem("greenscore"))){
                     team_name.innerHTML=`<div><p>green Team</p><p>score:${localStorage.getItem("greenscore")}</p></div>`
                    }
                    else if(maximum==JSON.parse(localStorage.getItem("pinkscore"))){
                        team_name.innerHTML=`<div><p> pink Team</p><p>score:${localStorage.getItem("pinkscore")}</p></div>`
                       }
                    else  if(maximum==JSON.parse(localStorage.getItem("orangescore"))){
                        team_name.innerHTML=`<div><p>orange Team</p><p>score:${localStorage.getItem("orangescore")}</p></div>`
                       }
                    else if(maximum==JSON.parse(localStorage.getItem("bluescore"))){
                        team_name.innerHTML=`<div><p> blue Team</p><p>score:${localStorage.getItem("bluescore")}</p></div>`
                       }
                    }
                    else{
                        var pointed_data=document.getElementById("pointed")
                        pointed_data.classList.remove("hidden")
      
                        var time=time_of_close
                    
                      var close_team_1=document.getElementById("close_team")
                      var Orange_pointed=document.getElementById("Orange_pointed")
                      var blue_pointed=document.getElementById("blue_pointed")
                      var pink_pointed=document.getElementById("pink_pointed")
                      var green_pointed=document.getElementById("green_pointed")
                      Orange_pointed.innerHTML=localStorage.getItem("orangescore")
                      blue_pointed.innerHTML=localStorage.getItem("bluescore")
                      pink_pointed.innerHTML=localStorage.getItem("pinkscore")
                      green_pointed.innerHTML=localStorage.getItem("greenscore")
                      timed= setInterval(work,1000)

                      function work(){
                       
                        
                            time=time-1
                            if(time==0){
                                clearInterval(timed)
                                pointed_data.classList.add("hidden")
                              }
                           close_team_1.innerHTML="closed in  "+time+"(s)"
                           
                             
                      }
                        

                    }


    })
}
for(let b=0; b<blue_point.length; b++){


    blue_point[b].addEventListener("click",()=>{
    
        if(localStorage.getItem("bluescore")){
            
            var update=JSON.parse(localStorage.getItem("bluescore") )+1
            localStorage.setItem("bluescore",update)
           // alert(localStorage.getItem("bluescore"))
            var green_display=document.getElementById("green_display")
var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")
                    }
                   
                    else{
                        blue_score=blue_score+1
                        localStorage.setItem("bluescore",blue_score)
                       // alert(localStorage.getItem("bluescore"))
                        var orange_display=document.getElementById("orange_display")
var green_display=document.getElementById("green_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")

                    }
                    
                  
                    if(blue_point.length==b+1){
                        hided.classList.remove("hidden")
                        var total_point=[JSON.parse(localStorage.getItem("greenscore")) ,JSON.parse(localStorage.getItem("pinkscore")) ,JSON.parse(localStorage.getItem("orangescore")) ,JSON.parse(localStorage.getItem("bluescore")) ]
                    var maximum=Math.max(total_point[0],total_point[1],total_point[2],total_point[3])
                    if(maximum==JSON.parse(localStorage.getItem("greenscore"))){
                     team_name.innerHTML=`<div><p>green Team</p><p>score:${localStorage.getItem("greenscore")}</p></div>`
                    }
                    else if(maximum==JSON.parse(localStorage.getItem("pinkscore"))){
                        team_name.innerHTML=`<div><p> pink Team</p><p>score:${localStorage.getItem("pinkscore")}</p></div>`
                       }
                    else  if(maximum==JSON.parse(localStorage.getItem("orangescore"))){
                        team_name.innerHTML=`<div><p>orange Team</p><p>score:${localStorage.getItem("orangescore")}</p></div>`
                       }
                    else if(maximum==JSON.parse(localStorage.getItem("bluescore"))){
                        team_name.innerHTML=`<div><p> blue Team</p><p>score:${localStorage.getItem("bluescore")}</p></div>`
                       }
                    }
                    else{
           
                        var pointed_data=document.getElementById("pointed")
                        pointed_data.classList.remove("hidden")
      
                        var time=time_of_close
                        var close_team_1=document.getElementById("close_team")
                        var Orange_pointed=document.getElementById("Orange_pointed")
                        var blue_pointed=document.getElementById("blue_pointed")
                        var pink_pointed=document.getElementById("pink_pointed")
                        var green_pointed=document.getElementById("green_pointed")
                        Orange_pointed.innerHTML=localStorage.getItem("orangescore")
                        blue_pointed.innerHTML=localStorage.getItem("bluescore")
                        pink_pointed.innerHTML=localStorage.getItem("pinkscore")
                        green_pointed.innerHTML=localStorage.getItem("greenscore")
                      timed= setInterval(work,1000)
                    

                      function work(){
                       
                        
                            time=time-1
                            if(time==0){
                                clearInterval(timed)
                                pointed_data.classList.add("hidden")
                              }
                           close_team_1.innerHTML="closed in  "+time+"(s)"
                           
                             
                      }
                    

                    }
                


    })
}
var green_display=document.getElementById("green_display")
var orange_display=document.getElementById("orange_display")
var pink_display=document.getElementById("pink_display")
var blue_display=document.getElementById("blue_display")
green_display.innerHTML=localStorage.getItem("greenscore")
pink_display.innerHTML=localStorage.getItem("pinkscore")
orange_display.innerHTML=localStorage.getItem("orangescore")
blue_display.innerHTML=localStorage.getItem("bluescore")

document.getElementById("clear").onclick=()=>{
       var confirmed= confirm("Are you sure to want to clear")
       if(confirmed){
        localStorage.clear("pinkscore")
        localStorage.clear("bluescore")
        localStorage.clear("orangescore")
        localStorage.setItem("greenscore",0)
        localStorage.setItem("pinkscore",0)
        localStorage.setItem("bluescore",0)
        localStorage.setItem("orangescore",0)
        localStorage.setItem("greenscore",0)


       }
}
var hided=document.getElementById("hide")
var team_name=document.getElementById("team_name")
var terminate=document.getElementById("close")
var checked=document.getElementById("check")
terminate.onclick=()=>{
    
hided.classList.add("hidden")
}   
 checked.onclick=()=>{
    
     hided.classList.remove("hidden")
     var total_point=[JSON.parse(localStorage.getItem("greenscore")) ,JSON.parse(localStorage.getItem("pinkscore")) ,JSON.parse(localStorage.getItem("orangescore")) ,JSON.parse(localStorage.getItem("bluescore")) ]
 var maximum=Math.max(total_point[0],total_point[1],total_point[2],total_point[3])
 if(maximum==JSON.parse(localStorage.getItem("greenscore"))){
  team_name.innerHTML=`<div><p>green Team</p><p>score:${localStorage.getItem("greenscore")}</p></div>`
 }
 else if(maximum==JSON.parse(localStorage.getItem("pinkscore"))){
     team_name.innerHTML=`<div><p> pink Team</p><p>score:${localStorage.getItem("pinkscore")}</p></div>`
    }
 else  if(maximum==JSON.parse(localStorage.getItem("orangescore"))){
     team_name.innerHTML=`<div><p>orange Team</p><p>score:${localStorage.getItem("orangescore")}</p></div>`
    }
 else if(maximum==JSON.parse(localStorage.getItem("bluescore"))){
    team_name.innerHTML=`<div><p> blue Team</p><p>score:${localStorage.getItem("bluescore")}</p></div>`
   }
    }   
var close_team=document.getElementById("close_team")
var pointed=document.getElementById("pointed")
close_team.onclick=()=>{
    clearInterval(timed)
    pointed.classList.add("hidden")
}


var check_answer=document.querySelectorAll("#check_answer")
for(let answers=0;answers<check_answer.length;answers++){
    check_answer[answers].onclick=()=>{
        alert("answer:"+check_answer[answers].textContent.trim())
        
    }
}
var question_num=document.querySelectorAll("#ques_num")
for(let  no_of_question=0; no_of_question<=question_num.length;no_of_question++){
    
    question_num[no_of_question].innerHTML=no_of_question+1+".";
}