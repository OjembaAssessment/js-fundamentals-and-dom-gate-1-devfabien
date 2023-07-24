let count=0;
const value= document.querySelector("#num");
let start=document.querySelector("#start");
const btns=document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('remove')){
            count--;
        }else if(styles.contains('add')){
            count++;
        }else{
            count=0;
        }
        value.textContent=count;
        let vvalue=value.innerHTML;
        
        start.addEventListener('click', function (){
            var stopWatch = setInterval(function() { 
            if(vvalue <0){     
                count=0 ;
                clearInterval(stopWatch);         
                return;
            }
            document.getElementById("num").innerHTML = vvalue;
            start.textContent="stop";
            if(vvalue==0){
                start.textContent="start"
            }
            vvalue--;
        }, 1000);
        vvalue.innerHTML=0;
        })
    })
})


