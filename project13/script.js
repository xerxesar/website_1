function add(){
   let v=(document.getElementById("text2").value);
   let vc = `<div class="todo-item">
        <input type="checkbox" value="">
        <span>${v}</span>
    </div>`;
   document.getElementById("todo-list").innerHTML+=vc
   
}