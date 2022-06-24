 document.getElementById ('firstname').onkeydown=keyDown
 
function keyDown(){
    let str=document.getElementById ('firstname').value;
    
    console.log(str.length)
    document.querySelector('.text-field__label2').innerHTML=`${str}`
}