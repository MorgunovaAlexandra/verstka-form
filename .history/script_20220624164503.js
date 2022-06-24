 document.getElementById ('firstname').onkeydown=keyDown
 let a=
function keyDown(){
    let a=document.getElementById ('firstname').value;
    console.log(a.lenght)
    document.querySelector('.text-field__label2').innerHTML=`${a}`
}