const inp=document.querySelector('input');
const btn=document.getElementById('add');
const ul=document.querySelector('ul');

let arr=[];

inp.addEventListener('keyup',(e)=>{
    add(e.keyCode);
})

//also display the msg of alert if input is empty

function add(x){
    if(x==13){
        arr.push(inp.value)
        if(inp.value.length == " "){
            alert("Please enter some item value!!");
            arr.pop();
        }
        inp.value="";
        
    }
    // if(inp.value.length == " "){
    //     arr.pop();
    // }
    printVal();
}

function printVal(){
    ul.innerHTML="";
    for(let i=0; i<arr.length; i++){
        let item=arr[i];
        const li=document.createElement('li');
        li.value=i;
        li.innerHTML=` ${item}
        <button onclick="down(${i})"><i class="fas fa-chevron-circle-down"></i></button>
        <button onclick="up(${i})"><i class="fas fa-chevron-circle-up"></i></button>
        <button onclick="deleted(${i})"><i class="fas fa-trash-alt">&nbsp;Delete</i></button>
        <button onclick="edit(${i})"><i class="fas fa-edit">&nbsp;Edit</i></button>` ;

        ul.appendChild(li);
        
    }
}

function edit(x){
    // document.querySelector('input').disabled=false;
    // if(newVal != null){
    //     arr[x]=newVal;
    //     printVal();
    // }

    let newVal = prompt("Enter your new value", `${arr[x]}`);
    if (newVal != null) {
        arr[x]=newVal;
        printVal();
    }
}

function deleted(x){
    if(x==arr.length){
        arr.pop();
    }
    else{
        arr.splice(x,1);
    }
    printVal();
}

function down(x){
    if(x<arr.length-1){
        var temp=arr[x];
        arr[x]=arr[x+1];
        arr[x+1]=temp;
        printVal();
    }
}

function up(x){
    if(x>0){
        var temp=arr[x];
        arr[x]=arr[x-1];
        arr[x-1]=temp;
        printVal();
    }  
}
