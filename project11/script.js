function btnpressed(v){
    const e = document.getElementById("input")
    e.value+=v
}

function css(t){
    alert (t)
}
let n = prompt("عدد خود را وارد کنید")
n = Number(n);
if (Number.isNaN(n)){
    alert("یک مقدار عددی وارد کنید")
}
else{
    if(n%2==0){
        alert("زوج")
    } 
    else{
        alert("فرد")
    }

    alert(n)
}
