 document.getElementById ('firstname').onkeydown=keyDown
function keyDown(){
    let a=document.getElementById ('firstname').value.lenght;
    console.log(a)
    document.querySelector('.text-field__label2').innerHTML=`${a}`
}