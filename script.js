let btn = document.querySelector(".btn1");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let listinnerdiv = document.querySelector(".list");


btn.addEventListener("click", () => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let btn2 = document.createElement("button");
    console.log("add task");
    
    // let div=document.createElement("div");
    btn2.innerText = "remove";
    p.innerText = input.value;
    input.value = "";
    
    // listinnerdiv.appendChild(div);
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(btn2);

    // ul.innerHTML="<hr>";
    // console.log(input.value);
    btn2.classList.add("btn2");
    
    let delBtns = document.querySelectorAll(".btn2");
    delBtns.forEach((delBtn)=>{
        delBtn.addEventListener("click", () => {
            console.log("element deleted");
            let par = delBtn.parentElement;
            console.log(par);
            // par.innerText="";
            par.remove();
        });
    });
});


