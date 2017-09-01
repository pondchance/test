"use strict";
function clickchar(area)
     {
              document.getElementById("area").innerHTML = document.getElementById("area").innerHTML + area ;   
    }

    function clickSP(){
    	       document.getElementById("area").innerHTML = document.getElementById("area").innerHTML + " " ; 
    
       }
    function clickenter(){
               document.getElementById("area").innerHTML = document.getElementById("area").innerHTML + "\n" ;   
    }
    function clickBS(){
              var str = document.getElementById("area").innerHTML ;
              var depc = str.substr(0,str.length-1);
              document.getElementById("area").innerHTML = depc;
    } 
    function clickclear(){
    	document.getElementById("area").innerHTML = "" ; 
    }
    function clicktadabtabtab(){
    	document.getElementById("area").innerHTML =document.getElementById("area").innerHTML + "    " ;  
    }