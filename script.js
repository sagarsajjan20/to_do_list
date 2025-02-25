let ele=document.getElementById("ul")

let str=` <div class="list"> <li count="0" class="li">****</li> <button class="btn2">DONE</button> <button class="btn3">DELETE</button><br><br></div>`

let add=document.getElementById('btn1')
let text=document.getElementById('text')

add.addEventListener('click',()=>{
    
    if(text.value)
    {
    let str0= str.replace('****', text.value);
    ele.innerHTML=ele.innerHTML+str0
    text.value=null
    }
    else alert("Enter Task to ADD into List")
})



ele.addEventListener('click', (event) => {
    
    if (event.target.getAttribute("class")=="btn3") {
        let par = event.target.parentElement;
        par.remove();
    }
    
    else if(event.target.getAttribute("class")=="btn2")
        {
        let cou = event.target.parentElement.firstElementChild;

        if(cou.getAttribute("count")=="0")
         {
           cou.style.textDecoration="line-through";
           cou.setAttribute("count","1")
           event.target.innerText="ADD"
         }
         else{
           cou.style.textDecoration=null;
           cou.setAttribute("count","0")
           event.target.innerText="DONE"
         }
        
        }
});


