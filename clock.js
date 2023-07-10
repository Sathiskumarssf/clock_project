document.getElementById("timeset").onclick=function (){
    setInterval(add,1000);
     function add(){
    const a =new Date();
    console.log(a);
    let b =a.getDate();
    let c =a.getMonth()+1;
    let d =a.getFullYear();
    let f =a.getHours();
    let g =a.getMinutes();
    let h =a.getSeconds();
    document.getElementById("clock").innerHTML= "today date is  :"+d+"/"+c+"/"+b+" =>"+f+":"+g+":"+h;
    
    }
        
    
      
    }
