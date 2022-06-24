 document.getElementById ('firstname').onkeydown=keyDown
 let a=document.getElementById ('firstname').value;
function keyDown(){
    console.log(a.lenght)
    document.querySelector('.text-field__label2').innerHTML=`${a}`
}