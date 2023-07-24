let count=0;
const value= document.querySelector("#num");
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
    })
})
